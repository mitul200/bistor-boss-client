import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-items text-white pt-10 my-10 bg-fixed">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      />
      <div className="md:flex justify-center items-center pb-10 pt-12 px-36">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div className="md:ml-12">
          <p className="text-white ">March 20, 2023</p>
          <p className="text-white uppercase">WHERE CAN I GET SOME?</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
