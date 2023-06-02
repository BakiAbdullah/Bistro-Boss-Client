import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";


//Todo: A Custom Hook to Handle data in different components
const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);

  //Todo: A Custom Hook to Handle state of data in different components Using React Query
  const { data: menu = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      return res.json();
    },
  });

  return [menu, loading, refetch];
};

export default useMenu; 
