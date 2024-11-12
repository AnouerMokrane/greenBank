const CreditCartDesign = () => {
  return (
    <section className="pb-20 pt-14 md:pb-20 lg:pb-32 relative">
      <div className="absolute top-[106px] right-[400px] rounded-full shadow-green-glow" />
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h2 className=" text-4xl font-bold max-w-[500px] ">
              Design your personalized credit card.
            </h2>
            <p className=" text-gray-500 mt-5  max-w-[380px]">
              You have the freedom to personalize the design of your credit
              card, ensuring a truly unique experience that makes you feel
              extraordinary
            </p>
            <button className="flex items-center py-4 px-9 mt-8 bg-p2 rounded-full font-medium max-sm:backdrop-blur-md">
              <span>Create New Card</span>
              <img src="./images/arrow.png" alt="" className="ml-3" />
            </button>
          </div>
          <div className="relative">
            <img
              src="./images/Star2.svg"
              alt=""
              className=" absolute top-20 -right-11 -rotate-12"
            />
            <img
              src="./images/creditCard1.png"
              alt="Credit Card"
              className="w-full max-lg:hidden backdrop-blur-sm"
            />
            <img
              src="./images/Star1.png"
              alt=""
              className=" absolute top-52 -left-32 rotate-6"
            />
            <img
              src="./images/Star2.svg"
              alt=""
              className=" absolute -bottom-24 right-24 -rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCartDesign;
