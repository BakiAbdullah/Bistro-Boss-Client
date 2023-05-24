const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
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
          <button className="btn bg-gray-200  text-yellow-600 border-0 border-b-4 border-yellow-600">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
