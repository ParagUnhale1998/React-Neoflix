import React from "react";
import LazyImg from "./LazyImg"; // Make sure to import LazyImg or any image component you have
import CircleRating from "./CircleRating"; // Import CircleRating component
import Genres from "./Genres"; // Import Genres component
import dayjs from "dayjs"; // Import dayjs for date formatting
import { useLocation, useNavigate } from "react-router-dom";
// import PosterFallback from "/assets/no-poster.png";

function Card({mediaTypes, data }) {
  const PosterFallback = '../assets/no-poster.png';
  const navigate = useNavigate();
  const location = useLocation();

  const mediaType = location.pathname.split("/").filter(Boolean)[0];
console.log(data?.media_type , mediaType)
  return (
    <div  onClick={() =>
      navigate(`/${data?.media_type || mediaTypes }/${data.id}`)
  } 
   className="relative border-1 aspect-w-2 aspect-h-3 text-white cursor-pointer overflow-hidden group">
     { data?.poster_path ? <LazyImg
        src={data?.poster_path}
        className="w-full h-[full] sm:h-[full] md:h-[400px] xl:h-[450px] transform transition duration-200"
      /> : <img src={PosterFallback} alt=""/> }
      <div className="group-hover:flex bottom-0 absolute flex flex-col justify-end items-start gap-2 bg-black bg-opacity-70 p-2 pb-5 w-full h-full transform transition-all translate-y-full group-hover:translate-y-0 duration-500 delay-100 ease-in-out">
        <div className="font-bold text-lg">{data?.title || data?.name}</div>
        <p className="text-sm">{data?.overview?.slice(0, 100)}...</p>
        <span className="font-bold text-sm">
          <strong className="font-semibold text-white">Aired :</strong>{" "}
          <span className="underline underline-offset-2">
            {" "}
            {dayjs(data?.release_date || data?.first_air_date).format(
              "MMM D, YYYY"
            )}
          </span>
        </span>
        <CircleRating rating={data?.vote_average?.toFixed(1)} />
        <Genres data={data?.genre_ids?.slice(0, 2)} type={data?.media_type} />
      </div>
    </div>
  );
}

export default Card;
// https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=popularity.desc
// https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=popularity.asc
// https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=vote_average.desc
// https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=vote_average.asc
// https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=primary_release_date.desc
// https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=primary_release_date.asc
// https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=original_title.asc