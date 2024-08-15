import { FaHistory } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { TbBrandYoutube } from "react-icons/tb";
import { useSelector } from "react-redux";

const SideBar = () => {
  const showSidebar = useSelector((store) => store.app.click);

  return showSidebar ? (
    <div className="mt-4 min-h-screen w-56">
      <div className="flex items-center">
        <IoMdHome className="text-white text-2xl ml-10" />
        <p className="text-white text-sm ml-6">Home</p>
      </div>
      <div className="flex items-center">
        <SiYoutubeshorts className="text-white text-2xl ml-10 my-5" />
        <p className="text-white text-sm ml-6">Shorts</p>
      </div>
      <div className="flex items-center ">
        <MdSubscriptions className="text-white text-2xl ml-10" />
        <p className="text-white text-sm ml-6">Subscriptions</p>
      </div>
      <hr className="border-gray-700 my-4" />
      <div className="flex items-center">
        <TbBrandYoutube className="text-white text-2xl ml-10" />
        <p className="text-white text-sm ml-6">You</p>
      </div>
      <div className="flex items-center my-5">
        <FaHistory className="text-white text-2xl ml-10 " />
        <p className="text-white text-sm ml-6">History</p>
      </div>
      <hr className="border-gray-700 my-4" />
    </div>
  ) : (
    <div className="mt-4 min-h-screen w-fit">
      <div className="">
        <IoMdHome className="text-white text-2xl ml-10" />
        <p className="text-white text-xs text-center ml-4 pt-1">Home</p>
      </div>
      <div className="">
        <SiYoutubeshorts className="text-white text-2xl ml-10 mt-7" />
        <p className="text-white text-xs text-center ml-3 pt-1">Shorts</p>
      </div>
      <div className=" ">
        <MdSubscriptions className="text-white text-2xl ml-10 mt-7" />
        <p className="text-white text-xs text-center ml-4 pt-1">Subscriptions</p>
      </div>
      <div className="">
        <TbBrandYoutube className="text-white text-2xl ml-10 mt-7" />
        <p className="text-white text-xs text-center ml-4 pt-1">You</p>
      </div>
      <div className=" my-5">
        <FaHistory className="text-white text-2xl ml-10 mt-7" />
        <p className="text-white text-xs text-center ml-3 pt-1">History</p>
      </div>
    </div>
  );
};

export default SideBar;
