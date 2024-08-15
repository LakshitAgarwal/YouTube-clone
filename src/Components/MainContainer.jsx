import React from "react";
import SideBar from "./SideBar";
import ButtonTags from "./ButtonTags";
import VideoCatelouge from "./VideoCatelouge";

const MainContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <ButtonTags />
        <VideoCatelouge />
      </div>
    </div>
  );
};

export default MainContainer;
