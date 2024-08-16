import React from "react";
import SideBar from "./SideBar";
import ButtonTags from "./ButtonTags";
import VideoCatelouge from "./VideoCatelouge";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isSidebarVisible = useSelector((store) => store.app.click);
  return (
    <div className="flex">
      <SideBar />
      <div
        className={`flex-grow mt-16 transition-all duration-300 ${
          isSidebarVisible ? `ml-64` : `ml-28`
        }`}
      >
        <ButtonTags />
        <VideoCatelouge />
      </div>
    </div>
  );
};

export default MainContainer;

// className="flex-grow ml-64 mt-4 transition-all duration-300"
