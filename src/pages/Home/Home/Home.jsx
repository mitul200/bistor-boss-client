// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import Categry from "../Category/Categry";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonial from "../../Testimonial/Testimonial";
import RecommendsRecipe from "../ChefRecommends/RecommendsRecipe";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categry />
      <PopularMenu />
      <RecommendsRecipe />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
