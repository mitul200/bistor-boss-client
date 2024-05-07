const FoodCard = (item) => {
  // const { price, name, recipe, image } = item;
  console.log(item.item.price);
  return (
    <div className="card w-96 bg-base-100  ">
      <figure className="px-10 pt-10">
        <img src={item.item.image} alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name : {item.item.name}</h2>
        <h2 className="card-title">
          Price : <span className="text-yellow-500">{item.item.price}</span>
        </h2>
        <p>{item.item.recipe}</p>
        <button className="btn btn-outline bg-slate-200 border-0 border-b-4 uppercase text-yellow-800">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
