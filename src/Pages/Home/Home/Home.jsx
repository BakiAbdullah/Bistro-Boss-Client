import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBanner from "../BistroBanner/BistroBanner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonioals from "../Testimonioals/Testimonioals";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroBanner></BistroBanner>
      <PopularMenu></PopularMenu>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonioals></Testimonioals>
    </div>
  );
};

export default Home;