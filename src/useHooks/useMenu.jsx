import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loding, setLoding] = useState(true);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/menu`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoding(false);
  //       setMenu(data);
  //     });
  // }, []);
  const {
    data: menu = [],
    isLoading: loding,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/menu`);
      return res.json();
    },
  });

  return [menu, loding, refetch];
};

export default useMenu;
