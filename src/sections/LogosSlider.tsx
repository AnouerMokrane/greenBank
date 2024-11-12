import { logos } from "../constants";

const LogosSlider = () => {
  return (
    <div className="pt-24 pb-8 md:pt-20 lg:pt-32 relative">
      <div
        className="overflow-hidden mx-auto 
       max-w-[1120px] "
      >
        <img
          src="./images/Star2.svg"
          alt=""
          className=" absolute -top-1 left-1/3 -rotate-[55deg] w-6 md:top-20 "
        />
        <div className="flex items-center animate-slide gap-16 ">
          {logos.map((logo) => (
            <div key={logo.id} className=" shrink-0">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo) => (
            <div key={logo.id} className=" shrink-0">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo) => (
            <div key={logo.id} className=" shrink-0">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogosSlider;
