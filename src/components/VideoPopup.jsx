import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";

function VideoPopup({ show, setShow, videoId, setVideoId }) {
  console.log("active");
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div className="top-0 left-0 z-50 fixed w-screen h-screen video-container"  onClick={hidePopup}>
      <div
        className="top-0 absolute bg-black opacity-50 opacity-layer w-full h-full transition-all duration-300 ease-in-out"
       
      ></div>
      <div className="top-0 right-36 xl:right-32 absolute w-full h-full container video-player">
        <div className="relative flex justify-center items-center h-full container">
          <span
            className="top-20 right-40 absolute close-btn"
            onClick={hidePopup}
          >
            <FaRegWindowClose className="text-4xl text-white hover:text-red-500 cursor-pointer" />
          </span>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="60%"
            height="60%"
            // playing={true}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPopup;
