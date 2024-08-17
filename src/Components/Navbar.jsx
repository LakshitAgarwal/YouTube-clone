import { RxHamburgerMenu } from "react-icons/rx";
import ytLogo from "../Assets/yt-logo-dark.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addClick } from "../Utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../Utils/constants";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * If we do just like this then API will be called after every letter is typed no matter how fast the typing is, but we can save many api calls by something called as debouncing. Where we clear the previous setTimeout and set a new one after every letter is typed.
     * setTimeout(() => getSearchSuggestions(), 200);
     */
    const time = setTimeout(() => getSearchSuggestions(), 100);
    return () => clearTimeout(time);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const JSON = await data.json();
    setSearchSuggestions(JSON[1]);
  };

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
      <div>
        <div className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
            className="p-1 pl-4 rounded-l-full w-[35rem] text-white bg-[#0f0f0f] border-[#444444] border-[0.5px]"
          />
          <div className="bg-[#222222] p-[7px] px-6 rounded-r-full cursor-pointer">
            <FiSearch className="text-white text-xl " />
          </div>
        </div>
        {showSuggestions && (
          <div className=" text-white fixed mt-2 w-[35rem] rounded-xl overflow-hidden">
            <ul>
              {searchSuggestions.map((sug, index) => {
                return (
                  <div className="flex items-center my-2 py-1 pl-2 hover:bg-slate-700">
                    <FiSearch className="text-white bg-transparent text-lg mr-4" />
                    <li key={index} className="bg-transparent">
                      {sug}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="flex item-center border-[1px] border-[#3f3f3f] rounded-full py-[6px] px-2 hover:bg-blue-600 hover:bg-opacity-30 cursor-pointer">
        <FaRegUserCircle className="text-blue-600 text-xl" />
        <p className="text-blue-600 text-sm ml-2">Sign In</p>
      </div>
    </div>
  );
};

export default Navbar;
