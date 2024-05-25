// import { useContext } from "react";
// import { AuthContext } from "../Components/Provider/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
  // const { user } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  // const { refetch, data: cart = [] } = useQuery({
  //   queryKey: ["cart", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/carts?email=${user?.email}`,
  //       {
  //         headers: {
  //           authorization: `bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(res);
  //     return res.json();
  //   },
  // });
  // return [cart, refetch];
};

export default useCart;
