import { NavLink, Outlet } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

const DashBoard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink className="" to="/dashboard/Home">
                <FaHome />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservations">
                <FaCalendarAlt />
                Reservetion
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <RiShoppingCartFill />
                my cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/hisotry">
                <IoWalletSharp /> Payment History
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              {" "}
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">
                <LuMenu />
                Menu
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/"></NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/"></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
