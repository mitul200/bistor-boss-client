import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  const handelMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${user.name} is Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    // console.log(id);
  };

  const handelUserDelet = () => {
    console.log();
  };

  return (
    <div className="w-full px-4">
      <Helmet>
        <title>Bistro Boss | All Users </title>
      </Helmet>
      <h1 className=" text-3xl font-semibold"> total user :{users.length}</h1>
      <div className="">
        <div className="overflow-x-auto ">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, i) => (
                <tr key={i + 1}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <>
                        <button
                          onClick={() => handelMakeAdmin(user)}
                          className="btn btn-ghost  bg-blue-500 btn-sm text-white"
                        >
                          <FaUserShield />
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handelUserDelet(user)}
                      className="btn btn-ghost  bg-red-600 btn-sm text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
