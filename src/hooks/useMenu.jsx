import { useEffect, useState } from "react";


//Todo: A Custom Hook to Handle data in different components
const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("menu.json")
    .then((res) => res.json())
    .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu; 
