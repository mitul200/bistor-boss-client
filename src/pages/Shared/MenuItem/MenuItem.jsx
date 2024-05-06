// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
  // console.log(item);
  // eslint-disable-next-line react/prop-types
  const { price, name, recipe, image } = item;

  return (
    <div className="flex space-x-4 mb-12">
      <img
        style={{ borderRadius: "0  200px 200px 200px" }}
        src={image}
        className="w-[100px]"
        alt=""
      />
      <div className="">
        <h1 className="uppercase font-semibold"> Name : {name}...........</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
