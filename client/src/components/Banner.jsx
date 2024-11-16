import leftTopImage from "../assets/banner-image/bb.png";
import bannerImage from "../assets/banner-image/banner-image.png (1).png";
import {FaArrowRightLong} from "react-icons/fa6";
import Container from "./Container";
import Navbar from "./shared/Navbar";
const Banner = () => {
  return (
    <div className="bg-custom-gradient">
      <div className="h-20">
        {" "}
        <Navbar />
      </div>
      <div className=" flex pt-6">
        <div className="absolute">
          <img className="" src={leftTopImage} alt="" />
        </div>
        <Container>
          <div className="flex gap-44">
            <div className="">
              {" "}
              <h4 className="text-left font-Berkshire text-[40px]">
                Welcome to The
              </h4>
              <h1 className="font-Berkshire text-[82px] leading-[108px]">
                Discover <span className="text-[#F83D8E]">Sweet</span> <br />{" "}
                Delights!{" "}
              </h1>
              <p className="text-2xl font-Archivo mt-3">
                Relish the timeless taste of handcrafted ice cream, made <br />{" "}
                with passion and the finest ingredients.
              </p>
              <button className="flex items-center justify-center text-white bg-[#683292] gap-4 py-6 px-9 rounded-full font-Archivo font-semibold mt-8 mb-32">
                Browse Our Classic Flavours <FaArrowRightLong />{" "}
              </button>
            </div>
            <div className="h-[500px] w-[600px] rounded-full bg-banner-gradient flex justify-center ml-8">
              <img
                className="mt-4 ml-14 h-[550px] absolute"
                src={bannerImage}
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
