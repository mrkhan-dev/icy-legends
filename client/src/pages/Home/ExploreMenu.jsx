import {FaArrowRightLong} from "react-icons/fa6";
import icyGirl from "../../assets/home/relive-image.png.png";
const ExploreMenu = () => {
  return (
    <div className="flex mt-12 justify-around items-center px-80">
      <div className="bg-[#F6F3F9] h-[460px] w-[460px] rounded-full">
        <img className="h-[524px] w-[419px]" src={icyGirl} alt="" />
      </div>
      <div>
        <h4 className="font-Berkshire text-[60px] text-[#0F0200] leading-[64px]">
          Relive the Sweet <br /> Memories of Classic <br />
          <span className="text-[#F83D8E]">Ice Creams</span>
        </h4>
        <p className="mt-7 font-Archivo text-[#646464]">
          From rich chocolate fudge to creamy vanilla sundaes, <br /> discover
          our menu of classic ice cream creations.
        </p>
        <button className="flex items-center justify-center text-white bg-[#F83D8E] gap-4 py-6 px-9 rounded-full font-Archivo font-semibold mt-8">
          Explore Our Menu <FaArrowRightLong />{" "}
        </button>
      </div>
    </div>
  );
};

export default ExploreMenu;
