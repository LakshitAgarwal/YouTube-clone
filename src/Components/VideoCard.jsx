import numeral from "numeral";
import { useSelector } from "react-redux";

const VideoCard = ({ vidData }) => {
  const isSidebarVisible = useSelector((store) => store.app.click);
  return (
    <div className="cursor-pointer">
      <img
        src={vidData?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
        className={
          isSidebarVisible
            ? "w-[368px] rounded-xl mb-2"
            : "w-[300px] rounded-xl mb-2"
        }
      />

      <h2
        className={
          isSidebarVisible ? "w-[350px] text-white" : "w-[295px] text-white"
        }
      >
        {vidData?.snippet?.localized?.title}
      </h2>
      <p className="text-gray-400 text-sm">{vidData?.snippet?.channelTitle}</p>
      <div className="text-gray-400 text-sm mb-8">
        {numeral(vidData?.statistics?.viewCount).format("0.a").toUpperCase()}{" "}
        views
      </div>
    </div>
  );
};

export default VideoCard;
