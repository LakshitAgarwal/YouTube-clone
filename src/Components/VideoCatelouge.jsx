import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../Utils/VideoDataSlice";
import { setClickFalse } from "../Utils/appSlice";

const VideoCatelouge = () => {
  const [vidData, setVidData] = useState(null);
  const dispatch = useDispatch();

  const handleData = (vid) => {
    dispatch(setClickFalse());
    dispatch(addData(vid));
  };

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
        <Link
          to={`/watch?id=${vid.id}`}
          onClick={() => handleData(vid)}
          key={vid.id}
        >
          <VideoCard key={vid.id} vidData={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoCatelouge;
