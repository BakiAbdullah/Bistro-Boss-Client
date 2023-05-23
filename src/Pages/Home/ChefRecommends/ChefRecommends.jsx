import pizza from "../../../assets/home/pizza-bg.jpg";
import SectionTitle from "../../../components/sectionTitle";

const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
      <div className="grid my-20 lg:grid-cols-3 gap-12">
        <div className="card w-full text-center glass">
          <figure>
            <img src={pizza} alt="car!" />
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
        <div className="card w-full text-center glass">
          <figure>
            <img src={pizza} alt="car!" />
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
        <div className="card w-full text-center glass">
          <figure>
            <img src={pizza} alt="car!" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold">Caesar Salad</h2>
            <p className="my-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-gray-200 text-yellow-600 border-0 border-b-4 border-yellow-600">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
