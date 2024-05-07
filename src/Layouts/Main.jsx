import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navber from "../pages/Shared/Navber/Navber";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navber />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
