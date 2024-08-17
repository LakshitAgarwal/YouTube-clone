import { useSelector } from "react-redux";

const WatchPage = () => {
  const vidData = useSelector((store) => store.vidData.videoData);
  const vidId = vidData.id;
  console.log(vidId);

  return (
    <div>
      <div>
        <iframe className="ml-28 mt-16 rounded-2xl"
          width="880"
          height="560"
          src={"https://www.youtube.com/embed/" + vidId + "?autoplay=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
