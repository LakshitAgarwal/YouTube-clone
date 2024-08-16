import { FaHistory, FaRegUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { TbBrandYoutube } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeData } from "../Utils/VideoDataSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((store) => store.app.click);

  const emptyVideoSlice = () => {
    dispatch(removeData());
  };
  return showSidebar ? (
    <div className="fixed left-0 mt-[3.3rem] pt-3 min-h-screen w-56 flex-shrink-0 bg-[#0f0f0f] z-50">
      <Link to="/" onClick={emptyVideoSlice}>
        <div className="flex items-center">
          <IoMdHome className="text-white text-2xl ml-6" />
          <p className="text-white text-sm ml-5">Home</p>
        </div>
      </Link>
      <div className="flex items-center">
        <SiYoutubeshorts className="text-white text-2xl ml-6 my-5" />
        <p className="text-white text-sm ml-5">Shorts</p>
      </div>
      <div className="flex items-center ">
        <MdSubscriptions className="text-white text-2xl ml-6" />
        <p className="text-white text-sm ml-5">Subscriptions</p>
      </div>
      <hr className="border-gray-700 my-4" />
      <div className="flex items-center">
        <TbBrandYoutube className="text-white text-2xl ml-6" />
        <p className="text-white text-sm ml-5">You</p>
      </div>
      <div className="flex items-center my-5">
        <FaHistory className="text-white text-2xl ml-6 " />
        <p className="text-white text-sm ml-5">History</p>
      </div>
      <hr className="border-gray-700 my-4" />
      <div className="my-5">
        <p className="text-white text-sm ml-6">
          Sign in to like videos, comment and subscribe.
        </p>
        <div className="flex w-fit item-center border-[1px] border-[#3f3f3f] rounded-full py-[6px] px-3 hover:bg-blue-600 hover:bg-opacity-30 cursor-pointer ml-6 my-3">
          <FaRegUserCircle className="text-blue-600 text-xl" />
          <p className="text-blue-600 text-sm ml-2">Sign In</p>
        </div>
      </div>
      <hr className="border-gray-700 my-4" />
    </div>
  ) : (
    <div className="fixed left-0 mt-[3.3rem] pt-3 min-h-screen w-fit flex-shrink-0 bg-[#0f0f0f] z-50">
      <Link to="/" onClick={emptyVideoSlice}>
        <div>
          <IoMdHome className="text-white text-2xl ml-10" />
          <p className="text-white text-xs text-center ml-3 pt-1">Home</p>
        </div>
      </Link>
      <div>
        <SiYoutubeshorts className="text-white text-2xl ml-10 mt-7" />
        <p className="text-white text-xs text-center ml-3 pt-1">Shorts</p>
      </div>
      <div>
        <MdSubscriptions className="text-white text-2xl ml-10 mt-7" />
        <p className="text-white text-xs text-center ml-4 pt-1">
          Subscriptions
        </p>
      </div>
      <div>
        <TbBrandYoutube className="text-white text-2xl ml-10 mt-7" />
        <p className="text-white text-xs text-center ml-3 pt-1">You</p>
      </div>
      <div className=" my-5">
        <FaHistory className="text-white text-2xl ml-10 mt-7" />
        <p className="text-white text-xs text-center ml-3 pt-1">History</p>
      </div>
    </div>
  );
};

export default SideBar;
