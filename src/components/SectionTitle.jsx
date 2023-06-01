//TODO: Shared Section title for different sections
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 lg:w-5/12 my-10 mx-auto text-center">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h3 className="text-4xl uppercase border-y-4 mb-12 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
