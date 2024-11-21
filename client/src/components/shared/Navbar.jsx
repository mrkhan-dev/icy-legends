import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "../Container";
import NavItem from "./NavItem";
import {AiOutlineShopping} from "react-icons/ai";
import {RiMenuAddLine} from "react-icons/ri";
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {user, logOut} = useAuth();

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
            <div className="flex items-center ml-10 gap-3">
              <AiOutlineShopping className="text-3xl text-gray-700" />
              {user ? (
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex relative items-center gap-2 cursor-pointer p-1 rounded-lg shadow-md"
                >
                  <RiMenuAddLine className="text-lg" />
                  <div className="h-8 w-8 items-center flex rounded-full">
                    <img
                      className="rounded-full w-full h-full items-center"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute rounded-xl transition-all duration-75 shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                      <div className="flex flex-col cursor-pointer">
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 text-center transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/signUp">
                  <button className="bg-[#F83D8E] text-white py-2 font-Archivo font-semibold rounded-3xl px-7">
                    Sign Up
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
