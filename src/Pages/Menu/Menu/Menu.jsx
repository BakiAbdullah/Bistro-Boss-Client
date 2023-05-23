import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/CoverBanner/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Dynamic Image and Title from Cover Component Via Props */}
      <Cover bannerImg={menuImg} title="our menu"></Cover>
    </div>
  );
};

export default Menu;
