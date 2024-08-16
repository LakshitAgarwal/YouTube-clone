import { RxHamburgerMenu } from "react-icons/rx";
import ytLogo from "../Assets/yt-logo-dark.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addClick } from "../Utils/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addClick());
  };
  return (
    <div className="select-none fixed w-screen top-0 flex bg-[#0f0f0f] items-center justify-between px-8">
      <div className="flex items-center p-2">
        <div className="cursor-pointer">
          <RxHamburgerMenu
            className="text-white text-xl"
            onClick={handleClick}
          />
        </div>
        <a href="/">
          <img src={ytLogo} alt="logo" className="w-28 ml-5 cursor-pointer" />
        </a>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="p-1 pl-4 rounded-l-full w-[35rem] text-white bg-[#0f0f0f] border-[#444444] border-[0.5px]"
        />
        <div className="bg-[#222222] p-[7px] px-6 rounded-r-full cursor-pointer">
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
