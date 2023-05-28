import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div>
        <div className="uppercase flex gap-14 items-center">
          <h3 className="text-3xl">Total Items: {cart.length}</h3>
          <h3 className="text-3xl">Total Price: ${total}</h3>
          <button className="btn btn-sm btn-warning">Pay</button>
        </div>
      </div>
    </>
  );
};

export default MyCart;
