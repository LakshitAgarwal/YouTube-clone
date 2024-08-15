import React from "react";
import SideBar from "./SideBar";
import ButtonTags from "./ButtonTags";
import VideoCatelouge from "./VideoCatelouge";

const MainContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-10 mt-4">
        <ButtonTags />
        <VideoCatelouge />
      </div>
    </div>
  );
};

export default MainContainer;
