import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeNav } from "../Utilities/navSlice";

const WatchPage = () => {
  const [watchId] = useSearchParams();
  console.log(watchId.get("v"));
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeNav());
  },[]);

  return (
    <div className="p-2 m-2">
      <iframe
        width="800"
        height="450"
        src={"https://www.youtube.com/embed/"+watchId.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
