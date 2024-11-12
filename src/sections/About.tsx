const About = () => {
  return (
    <section className="pt-12 md:pt-20 lg:pt-32 ">
      <div className="container relative">
        <img
          src="./images/Star2.svg"
          alt=""
          className=" absolute -top-10 left-36  rotate-[10deg] w-4  "
        />
        <div className="w-full flex justify-evenly bg-[#3D544D]/20 py-16 rounded-3xl backdrop-blur-sm max-md:flex-col max-md:gap-8 max-md:mt-12">
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-bold">16y</p>
            <p className=" text-p2 font-medium">Experience</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-bold">250+</p>
            <p className=" text-p2 font-medium">Merchant Partner</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-bold">18+</p>
            <p className=" text-p2 font-medium">Years Experience</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-bold">10.2k+</p>
            <p className=" text-p2 font-medium">Worldwide Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
