import { features } from "../constants";

const Features = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 relative" id="services">
      <div className="container">
        <h2 className="text-4xl text-center font-bold">What do we offer?</h2>
        <div className="flex  gap-10 mt-16 max-lg:flex-wrap">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex  gap-6 max-md:w-400 max-lg:w-[350px] max-md:px-6 "
            >
              <div className="w-16 h-16 flex shrink-0 justify-center items-center bg-[#3d544d] rounded-3xl ">
                <img src={feature.icon} alt="" className="w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-medium max-md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-500 max-w-330">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
