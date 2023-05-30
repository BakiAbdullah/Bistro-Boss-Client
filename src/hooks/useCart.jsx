import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth() // Custom hook for AuthContext
  // const token = localStorage.getItem('access-token');
  const axiosSecure = useAxiosSecure();

  // TODO: tanStack/React Query Magic to update data without filtering and setting it to State.
  // TODO: TanStack Query gives us the Power to Refetch data and Auto Updatation the ui
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!user?.email,
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`, {
    //       method: "GET",
    //       headers: {
    //        authorization: `bearer ${token}`
    //       }
    //     });
    //   return res.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      console.log('res from Axios', res)
      return res.data
    },
  });

  return [cart, refetch];
};

export default useCart;
