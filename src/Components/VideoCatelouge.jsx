import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
        <Link to={`/watch?id=${vid.id}`} key={vid.id}>
          <VideoCard key={vid.id} vidData={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoCatelouge;
