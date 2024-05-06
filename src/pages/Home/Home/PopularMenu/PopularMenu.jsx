// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../useHooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
 
  return (
    <div>
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-6">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4  mb-12">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
