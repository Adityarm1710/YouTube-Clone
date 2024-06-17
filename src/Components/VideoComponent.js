const VideoComponent = ({ videoInfo }) => {
  const { contentDetails, snippet } = videoInfo;
  return (
    <div className="pt-3 m-1 shadow w-52 ">
      <img alt="VideoCard" src={snippet?.thumbnails?.medium?.url} />
      <div>
        <ul>
          <li className="font-bold text-sm text-wrap pt-2 ">{snippet?.title}</li>
          <li className="text-sm">{snippet?.channelTitle}</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoComponent;
