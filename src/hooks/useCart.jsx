import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  // TODO: tanStack/React Query Magic to update data without filtering and setting it to State.
  // TODO: TanStack Query gives us the Power to Refetch data and Auto Updatation the ui
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useCart;
