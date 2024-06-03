import { useEffect,useState} from "react";
import { YOUTUBE_API_KEY } from "../Utilities/Constants";
import VideoComponent from "./VideoComponent";

const VideoContainer=()=>{
  
  useEffect(()=>{
    getVideosDetail();
  },[]);

   const getVideosDetail= async ()=>{
      const data = await fetch(YOUTUBE_API_KEY);  
      const json = await data.json();
      console.log(json);
   };

  return(
    <div>
       <VideoComponent/>
    </div>
  );
};

export default VideoContainer;