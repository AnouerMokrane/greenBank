const Hero = () => {
  return (
    <section className="py-40 md:py-60 lg:py-72" id="home">
      <div className="relative container">
        <div className="flex md:gap-20">
          <div className="max-md:flex-300 flex-1 ">
            <h1 className="text-3xl font-bold md:text-[50px] leading-[55px]  ">
              Discover the Perfect Credit Card for You
            </h1>
            <p className="text-lg text-gray-500 mt-5 md:max-w-[460px] ">
              Discover the power of our secure and rewarding credit cards.
              Explore our range of credit cards and take control of your
              finances today.
            </p>
            <button className="flex items-center py-4 px-9 mt-8 bg-p2 rounded-full font-medium">
              <span>Get Started</span>
              <img src="./images/arrow.png" alt="" className="ml-3" />
            </button>
            <div className="flex gap-4 items-center mt-8 relative">
              <img
                src="./images/Star2.svg"
                alt=""
                className=" absolute -top-1/5 right-1/4 w-6 rotate-12"
              />
              <ul className="flex">
                <li className="-mr-4">
                  <img src="./images/user3.png" alt="" />
                </li>
                <li className="-mr-4">
                  <img src="./images/user2.png" alt="" />
                </li>
                <li>
                  <img src="./images/user1.png" alt="" />
                </li>
              </ul>
              <div>
                <p className="font-bold">10.2k+</p>
                <p className="text-xs text-gray-500 max-w-[150px] ">
                  Active users around the wordls
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src="./images/Vector.png"
              alt=""
              className=" backdrop-blur-sm rotate-[15deg] rounded-7xl max-md:hidden relative z-10"
            />
            <div className=" absolute -right-52 top-0 w-[492px] h-[492px] bg-p2 rounded-full -z-1 max-md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
