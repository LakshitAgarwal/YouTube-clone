import React from "react";
import SideBar from "./SideBar";
import ButtonTags from "./ButtonTags";
import VideoCatelouge from "./VideoCatelouge";

const MainContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow ml-6 mt-4 transition-all duration-300">
        <ButtonTags />
        <VideoCatelouge />
      </div>
    </div>
  );
};

export default MainContainer;
