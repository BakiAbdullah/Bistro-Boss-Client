import SectionTitle from "../../../components/sectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed my-24 text-white pt-10">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center gap-12  py-24 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-3">
          <p>May 24, 2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            laborum. Ex, minus incidunt adipisci quam odio provident accusantium
            obcaecati sed voluptatibus nam quaerat est vel ducimus, vero libero
            earum corrupti? Rem quas laborum tenetur nihil assumenda architecto
            nesciunt, autem aspernatur dolore perspiciatis cupiditate porro.
            Nemo quo voluptate sit omnis quis.
          </p>

          <button className="btn bg-gray-200 text-yellow-600 border-0 border-b-4 border-yellow-600">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
