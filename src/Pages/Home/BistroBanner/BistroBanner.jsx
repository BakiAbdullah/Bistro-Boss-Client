import serviceImg from '../../../assets/home/chef-service.jpg'

const BistroBanner = () => {
  return (
    <>
      <div className="z-30 relative mt-12 items-center justify-center w-full h-full overflow-auto">
        <div className="inset-0 h-screen bg-cover bg-center">
          <img src={serviceImg} alt="" />
        </div>

        <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div className="shadow-2xl flex items-center justify-center w-4/5 h-96 bg-cover bg-center bg-white">
            <div className='text-center w-3/4'>
              <h2 className="text-5xl mb-5">Bistro Boss</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BistroBanner;