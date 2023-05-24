import { Link } from "react-router-dom";
import Cover from "../../Shared/CoverBanner/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-10">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn bg-gray-200  text-yellow-600 border-0 border-b-4 border-yellow-600">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
