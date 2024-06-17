import { useEffect,useState} from "react";
import { YOUTUBE_API_KEY } from "../Utilities/Constants";
import VideoComponent from "./VideoComponent";
import { Link } from "react-router-dom";

const VideoContainer=()=>{
  
  const [videoStatus,setvideoStatus] = useState([]);

  useEffect(()=>{
    getVideosDetail();
  },[]);

   const getVideosDetail= async ()=>{
      const data = await fetch(YOUTUBE_API_KEY);  
      const json = await data.json();
      console.log(json.items);
      setvideoStatus(json.items);
   };
  
   if(videoStatus.length === 0) return null;

  return(
    <div className="flex flex-wrap pl-2">
       {
        videoStatus.map((video)=> <Link key={video?.id} to={"/watch?v="+ video?.id}><VideoComponent videoInfo={video}/></Link> )
       }
    </div>
  );
};

export default VideoContainer;