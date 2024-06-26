import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetchData";
import IMG from "../../../components/IMG";
import Container from "../../../components/Container";
import dayjs from "dayjs";
import Genres from "../../../components/Genres";
import CircleRating from "../../../components/CircleRating";
import { PlayIcon } from "../../../components/Playbtn";
import VideoPopup from "../../../components/VideoPopup";
import { IoIosPlay, IoIosPlayCircle } from "react-icons/io";
import TiltImage from "../../../components/TiltImage";
import HDimg from "../../../components/HDimg";

function DetailsBanner({ video, crew }) {
  const PosterFallback = "../assets/no-poster.png";
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const _genres = data?.genres?.map((g) => g.id);
  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const handleOpenVideo = () => {
    setShow(true);
    setVideoId(video.key);
  };
  return (
    <div className="w-screen h-screen detail-container">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="top-0 -z-20 absolute backdrop-img w-full h-full">
                <HDimg
                  className={"w-screen brightness-50 object-cover h-screen"}
                  src={data.backdrop_path || data.poster_path}
                />
                {/* <img className="w-screen h-screen object-cover" src={`https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path}`} alt=""  loading="lazy"/> */}
              </div>
              <div className="top-0 -z-10 absolute bg-gradient-to-t from-netflixbackground via-transparent to-netflixbackground bg-opacity-70 opacity-layer w-screen h-screen"></div>
              <Container>
                <div className="relative flex md:flex-row flex-col justify-start items-start pt-20 w-full h-screen text-netflixWhite">
                  <div className="left p-10 w-1/3">
                    {data.poster_path ? (
                      <TiltImage
                     
                        className="shadow-lg shadow-red-500 rounded-lg w-full h-full cursor-pointer object-cover posterImg"
                        src={data.poster_path}
                      />
                    ) : (
                      <TiltImage
                       
                        className="shadow-lg shadow-red-500 rounded-lg w-full h-full cursor-pointer object-cover posterImg"
                        src={PosterFallback}
                      />
                    )}
                  </div>
                  <div className="right flex flex-col justify-between items-start gap-2 p-10 w-1/2 h-[90%]">
                    <div className="font-semibold text-3xl title">
                      {`${data.name || data.title}  (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="opacity-80 text-lg italic subtitle">
                      {data.tagline}
                    </div>
                    <div className="flex justify-start items-start w-full geners">
                      <Genres data={_genres} type={mediaType} />
                    </div>
                    <div className="flex justify-start items-center gap-4 w-full row">
                      <CircleRating
                        text={"35px"}
                        width={"w-20 shadow-md shadow-white"}
                        rating={data.vote_average.toFixed(1)}
                      />
                      <div
                        className="relative flex justify-start items-center w-1/2 cursor-pointer group playBtn"
                        onClick={handleOpenVideo}
                      >
                        {/* <IoIosPlay  className="top-7 hover:top-5 left-7 absolute text-5xl transition-all duration-300"/> */}
                        <IoIosPlayCircle className="group-hover:scale-105 group-hover:rotate-90 group-hover:text-netflixRed opacity-50 group-hover:opacity-100 text-8xl transition-all duration-300 delay-100 ease-in-out" />

                        <span className="group-hover:text-netflixRed font-semibold text-xl transition-all duration-300 ease-in">
                          Watch Trailer
                        </span>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="mb-2 font-semibold text-3xl capitalize heading">
                        overview
                      </div>
                      <div className="font-semibold capitalize description">
                        {data.overview}
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-4 text-lg info">
                      {data.status && (
                        <div className="capitalize infoItem">
                          <span className="font-bold text">Status: </span>
                          <span className="opacity-60 text text">
                            {data.status}
                          </span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="capitalize infoItem">
                          <span className="font-bold text">Release Date: </span>
                          <span className="opacity-60 text">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="capitalize infoItem">
                          <span className="font-bold text">Runtime: </span>
                          <span className="opacity-60 text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                      <div className="info">
                        <span className="font-bold text">Director: </span>
                        <span className="opacity-60 text">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {writer?.length > 0 && (
                      <div className="info">
                        <span className="font-bold text">Writer: </span>
                        <span className="opacity-60 text">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="bold text">Creator: </span>
                        <span className="text">
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {show && (
                  <VideoPopup
                    show={show}
                    setShow={setShow}
                    videoId={videoId}
                    setVideoId={setVideoId}
                  />
                )}
              </Container>
            </React.Fragment>
          )}
        </>
      ) : (
        "Loading...."
      )}
    </div>
  );
}

export default DetailsBanner;
