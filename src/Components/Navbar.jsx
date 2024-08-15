import { RxHamburgerMenu } from "react-icons/rx";
import ytLogo from "../Assets/yt-logo-dark.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex  items-center justify-between mx-8">
      <div className="flex items-center p-2 ">
        <div className="cursor-pointer hover:bg-gray-600 hover:rounded-full ">
          <RxHamburgerMenu className="text-white text-xl" />
        </div>
        <img src={ytLogo} alt="logo" className="w-28 ml-5" />
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="p-1 pl-4 rounded-l-full w-[35rem]  bg-[#0f0f0f] border-[#444444] border-[0.5px]"
        />
        <div className="bg-[#222222] p-[7px] px-6 rounded-r-full">
          <FiSearch className="text-white text-xl " />
        </div>
      </div>
      <div className="flex item-center border-[1px] border-[#3f3f3f] rounded-full py-[6px] px-2 hover:bg-blue-600 hover:bg-opacity-30 cursor-pointer">
        <FaRegUserCircle className="text-blue-600 text-xl" />
        <p className="text-blue-600 text-sm ml-2">Sign In</p>
      </div>
    </div>
  );
};

export default Navbar;
