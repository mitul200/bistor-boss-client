import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch(`menu.json`)
      .then((res) => res.json())
      .then((data) => {
        setLoding(false);
        setMenu(data);
      });
  }, []);
  return [menu, loding];
};

export default useMenu;
