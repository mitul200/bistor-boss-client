import { NavLink, Outlet } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import useCart from "../../useHooks/useCart";
import { FaAddressBook } from "react-icons/fa6";
import useAdmin from "../../useHooks/useAdmin";
// import useAdmin from "../../useHooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  // TODO
  // const isAdmin = true;
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
            {isAdmin ? (
              <>
                <li>
                  <NavLink className="" to="/dashboard/Home">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="" to="/dashboard/addItem">
                    <TiThMenuOutline />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <RiShoppingCartFill />
                    Manage Item
                    <div className="badge badge-secondary">
                      +{cart.length || 0}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/hisotry">
                    <FaAddressBook /> Manage Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
                    <div className="badge badge-secondary">
                      +{cart.length || 0}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/hisotry">
                    <IoWalletSharp /> Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <LuMenu />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/"></NavLink>
            </li>
            <li>
              <NavLink to="/"></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
