import { useEffect, useState } from "react";
import MenuBtn from "../components/MenuBtn";
import { navLinks } from "../constants";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed w-full z-50 py-12 transition-all duration-500 ${
        hasScrolled ? "bg-p1 py-5 shadow-lg" : "bg-transparent"
      }  `}
    >
      <div className="absolute top-[-236px] left-[636px] rounded-full shadow-green-glow" />

      <div className="container">
        <div className="flex items-center justify-between relative ">
          <img
            src="./images/logo.png"
            width={140}
            height={40}
            alt="Logo"
            className="mr-4"
          />
          <div
            className={` items-center max-md:w-full  max-md:fixed max-md:top-0 max-md:left-0 max-md:bg-p1 z-50 h-full duration-500  ${
              isOpen ? "flex" : "max-md:hidden"
            } `}
          >
            <div className="flex items-center max-md:w-full absolute top-12 left-4 md:hidden">
              <img src="./images/logo.png" alt="" />
              <button
                className=" absolute  right-10 md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <img src="./images/close.svg" width={50} alt="" />
              </button>
            </div>
            <nav className="flex items-center w-full ">
              <ul className="flex items-center w-full justify-center gap-8 max-md:flex-col">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      className=" font-medium  font-MPLUS1 max-md:text-2xl max-md:uppercase duration-500 hover:text-p2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <button className="px-6 py-2 text-p2 border-2 border-p2 font-bold tracking-tight rounded-full max-md:hidden">
            Contact
          </button>
          <MenuBtn setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
