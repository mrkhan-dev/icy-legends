import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "../Container";
import NavItem from "./NavItem";
import {AiOutlineShopping} from "react-icons/ai";
import {useEffect, useState} from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to="/" className="flex items-center ">
            <img className="py-2 h-[70px]" src={logo} alt="logo" />
            <h2 className="font-Berkshire font-normal md:text-3xl text-xl text-[#F83D8E]">
              Icy<span className="text-[#77449C]">Legends</span>
            </h2>
          </Link>
          {/* menu item */}
          <div className="flex items-center">
            <div className="hidden md:flex gap-14">
              <NavItem address="/" label="Home" />
              <NavItem address="/about" label="About Us" />
              <NavItem address="others" label="Others" />
            </div>
            <div className="flex items-center ml-10 gap-2">
              <AiOutlineShopping className="text-3xl text-gray-700" />
              <Link to="/signUp">
                <button className="bg-[#F83D8E] text-white py-2 font-Archivo font-semibold rounded-3xl px-7">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
