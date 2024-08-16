import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard from "./VideoCard";

const VideoCatelouge = () => {
  const [vidData, setVidData] = useState(null);

  useEffect(() => {
    fetchVideosData();
  }, []);

  const fetchVideosData = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVidData(data);
    console.log(data);
  };

  return (
    <div className="flex flex-wrap mt-8 gap-4">
      {vidData?.items?.map((vid) => (
        <VideoCard key={vid.id} vidData={vid} />
      ))}
    </div>
  );
};

export default VideoCatelouge;
