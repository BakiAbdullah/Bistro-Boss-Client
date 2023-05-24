import { RingLoader } from "react-spinners";
import SectionTitle from "../../../components/sectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, loading] = useMenu(); // Custom Hook to Load Menu Data
  const popular = menu.filter((item) => item.category === "popular");
  // eslint-disable-next-line no-undef

  return (
    <>
      {loading ? (
        <div className="spinner text-center">
          <RingLoader color="#123abc" loading={true} size={70} />
        </div>
      ) : (
        <div className="mb-14">
          <section>
            <SectionTitle
              heading="From Our Menu"
              subHeading="Popular Items"
            ></SectionTitle>
          </section>
          <div className="grid md:grid-cols-2 gap-10">
            {popular.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
          <div className="text-center my-12">
            <button className="btn bg-gray-200 text-yellow-600 border-0 border-b-4 border-yellow-600">
              View Full Menu
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularMenu;
