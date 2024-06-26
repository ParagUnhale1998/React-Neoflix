import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IMG from "../../../components/IMG";
import LazyImg from "../../../components/LazyImg";

function SlideShow({index, recentlyReleasedAnimes }) {
  const navigate = useNavigate();


//   if (!recentlyReleasedAnimes || recentlyReleasedAnimes.length === 0) {
//     return <p>Loading...</p>;
//   }

  const currentAnime = recentlyReleasedAnimes[index];

  return (
    <div className="relative border-2 w-screen h-screen cursor-pointer slider-container">
      
        <h1 className="bottom-0 left-0 absolute bg-netflixRed bg-opacity-70 py-2 w-full font-bold text-center text-netflixWhite text-xl capitalize">
          {currentAnime?.name}
        </h1>
      </div>
    
  );
}

export default SlideShow;
