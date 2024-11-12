const Cta = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      <div className="container flex items-center justify-between">
        <div>
          <h3 className="text-5xl font-bold max-w-[550px] max-md:text-3xl ">
            Easy Way to manage your finances
          </h3>
          <p className="mt-8 text-gray-500">
            Easy to use mobile app that support on android and ios.
          </p>
          <div className="flex items-center gap-6 mt-8 max-sm:flex-col">
            <button className="flex items-center gap-2 bg-[#3D544D] py-2.5 px-3.5 rounded-2xl ">
              <img src="./images/apple.svg" alt="" width={28} />
              <p className="text-xs font-medium">
                Download on the
                <br />
                <span className="text-xl"> App Store </span>
              </p>
            </button>
            <button className="flex items-center gap-2 bg-[#3D544D] py-2.5 px-3.5 rounded-2xl">
              <img src="./images/google-play.svg" alt="" width={28} />
              <p className="flex flex-col items-start text-xs font-medium">
                <span className="text-[10px] ">GET IT ON</span>
                <span className="text-xl">Google Play </span>
              </p>
            </button>
          </div>
        </div>
        <div className="max-w-512 w-1/2 relative max-md:hidden">
          <img
            src="./images/cta.png"
            alt=""
            className=" w-full absolute -top-48 right-0 "
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
