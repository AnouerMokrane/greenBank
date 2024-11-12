const Footer = () => {
  return (
    <footer className="relative bg-[#283430]/20  text-gray-300 pb-10 pt-14 backdrop-blur-sm">
      <div className="absolute top-32 right-[236px] rounded-full shadow-green-glow max-lg:hidden" />
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 xl:gap-28">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <img src="./images/logo.png" alt="" />
            <p className="mt-2 text-sm max-w-[250px] ">
              Discover the power of our secure and rewarding credit cards
            </p>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="font-semibold mb-2">About us</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-500">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Book a demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-500">
                  Credit Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Savings accounts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  NFT
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Useful Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-500">
                  Free rewards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Affiliate program
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Social</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-500">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Site Maps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 pt-4">
          <p>&copy; 2024 DoraDesign. All Rights Reserved</p>
          <p>
            This page uses cookies. See cookie details{" "}
            <a href="#" className="text-green-500 hover:underline">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
