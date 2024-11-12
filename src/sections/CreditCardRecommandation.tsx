const CreditCardRecommandation = () => {
  return (
    <section className="pb-12 md:pb-20 lg:pb-32 relative">
      <div className="absolute top-[106px] right-[400px] rounded-full shadow-green-glow/50" />
      <div className="container">
        <div className="flex md:items-center md:justify-between md:gap-44">
          <div className="relative">
            <img
              src="./images/creditCard2.png"
              alt="Credit Card"
              className="w-full max-lg:hidden backdrop-blur-sm"
            />
            <img
              src="./images/Star1.png"
              alt=""
              className=" absolute top-52 -right-32"
            />
          </div>
          <div className="">
            <h2 className=" text-4xl font-bold max-w-[500px]">
              Find the Perfect Credit Card for You
            </h2>
            <p className=" text-gray-500 mt-8  max-w-[500px]">
              Discover your ideal credit card with ease. Our comprehensive
              selection caters to every financial need and lifestyle. Whether
              you seek cashback rewards, travel perks, or building credit, we
              have the perfect credit card waiting for you. Unleash the
              possibilities and find the credit card that fits your unique goals
              and aspirations.
            </p>
            <button className="flex items-center py-4 px-9 mt-8 bg-p2 rounded-full font-medium max-sm:backdrop-blur-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardRecommandation;
