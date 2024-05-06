import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
// import menuImg from "../../../assets/menu/menu-bg.jpg";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
// import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../useHooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCateGory from "../MenuCategory/MenuCateGory";
const Menu = () => {
  const [menu] = useMenu();
  const saladItems = menu.filter((item) => item.category === "salad");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const soupItems = menu.filter((item) => item.category === "soup");
  const offeredItems = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      {/* offerd_items */}
      <Cover menuImg={menuImg} title={"our menu"} />
      <SectionTitle heading="---Don't miss---" subHeading="TODAY'S OFFER" />
      <MenuCateGory items={offeredItems} />
      {/* desert-items */}

      <MenuCateGory img={desertImg} title="dessert" items={dessertItems} />
      {/* pizza-titems */}
      <MenuCateGory img={pizzaImg} title="pizza" items={pizzaItems} />
      {/* salad-titems */}
      <MenuCateGory img={saladImg} title="salad" items={saladItems} />
      {/* soup-titems */}
      <MenuCateGory img={soupImg} title="soup" items={soupItems} />
    </div>
  );
};

export default Menu;
