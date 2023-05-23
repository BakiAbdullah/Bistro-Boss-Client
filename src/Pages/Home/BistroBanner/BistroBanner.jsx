import serviceImg from '../../../assets/home/chef-service.jpg'

const BistroBanner = () => {
  return (
    <>
      <div className="relative mt-12 items-center justify-center w-full h-full overflow-auto">
        <div className="inset-0 h-screen bg-cover bg-center">
          <img src={serviceImg} alt="" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="shadow-2xl bg-opacity-50 bg-black flex items-center justify-center w-4/5 h-96 bg-cover bg-center">
            <div className="text-center w-3/4 text-white">
              <h2 className="text-5xl mb-5 font-semibold">Bistro Boss</h2>
              <p className="italic text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius at,
                nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BistroBanner;