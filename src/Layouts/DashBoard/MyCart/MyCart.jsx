import { Helmet } from "react-helmet-async";
import useCart from "../../../useHooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handelDelet = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Bistro Boss | MyCart</title>
        </Helmet>
        <div className=" flex justify-between gap-6 font-semibold items-center">
          <h2 className=" uppercase text-xl text-left ">
            total items {cart.length}
          </h2>
          <h2 className=" uppercase text-xl ">total price :$ {total}</h2>
          <button className="btn btn-outline btn-warning btn-sm">PAY</button>
        </div>
      </div>

      {/* table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item IMG</th>
              <th>Item Name</th>
              <th>Price </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((row, i) => (
              <tr key={row._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={row.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{row.name}</div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className=" text-end text-orange-500 text-lg">
                    {" "}
                    $ {row.price}
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handelDelet(row._id)}
                    className="btn btn-ghost  bg-red-600 btn-sm text-white"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCart;
