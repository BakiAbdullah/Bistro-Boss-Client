import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/CoverBanner/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Dynamic Image and Title from Cover Component Via Props */}
      <Cover img={menuImg} title="our menu"></Cover>

      {/* Main Cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Todays Offer"
      ></SectionTitle>
      {/* Offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title="Dessert"
      ></MenuCategory>

      {/* Pizza */}
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>

      {/* salad */}
      <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>

      {/* Soup */}
      <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
