import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  // Add Item to Cart
  const handleAddToCart = (menuItem) => {
    console.log(menuItem);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("https://bistro-boss-server-lovat.vercel.app/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch(); // Refetch cart to update the number of of items in the cart
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Order the Food?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card rounded-none w-full my-4 text-center glass">
      <figure>
        <img className="w-full object-cover" src={image} alt="car!" />
      </figure>

      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-800 text-white">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="my-2">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn bg-gray-200  text-yellow-600 border-0 border-b-4 border-yellow-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
