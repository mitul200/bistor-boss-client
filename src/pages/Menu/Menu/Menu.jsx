import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
// import menuImg from "../../../assets/menu/menu-bg.jpg";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      <Cover menuImg={menuImg} title={"our menu"} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
