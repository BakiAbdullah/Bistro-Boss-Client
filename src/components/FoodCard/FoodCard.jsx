const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="w-full text-center glass">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-semibold">Caesar Salad</h2>
        <p className="my-2">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-gray-200  text-yellow-600 border-0 border-b-4 border-yellow-600">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
