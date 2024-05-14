import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../useHooks/useCart";

// eslint-disable-next-line react/prop-types
const FoodCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, price, name, recipe, image } = item;
  // console.log(item.item.price);
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handelAddtoCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItems: _id,
        price,
        name,
        recipe,
        image,
        email: user.email,
      };
      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order food",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now !!!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100  ">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name : {name}</h2>
        <h2 className="card-title">
          Price : <span className="text-yellow-500">{price}</span>
        </h2>
        <p>{recipe}</p>
        <button
          onClick={() => handelAddtoCart(item)}
          className="btn btn-outline bg-slate-200 border-0 border-b-4 uppercase text-yellow-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
