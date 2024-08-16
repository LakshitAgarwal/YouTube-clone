import { useSelector } from "react-redux";
import ButtonTags from "./ButtonTags";
import VideoCatelouge from "./VideoCatelouge";

const VideoAndTagsContainer = () => {
  const isSidebarVisible = useSelector((store) => store.app.click);
  return (
    <div
      className={`flex-grow mt-16 transition-all duration-300 ${
        isSidebarVisible ? `ml-64` : `ml-28`
      }`}
    >
      <ButtonTags />
      <VideoCatelouge />
    </div>
  );
};

export default VideoAndTagsContainer;
