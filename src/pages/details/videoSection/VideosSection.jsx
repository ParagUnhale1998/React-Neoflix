import React, { useState } from "react";
import Container from "../../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { IoIosPlayCircle } from "react-icons/io";
import VideoPopup from "../../../components/VideoPopup";
import 'swiper/css/scrollbar';

function VideosSection({ data, loading }) {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="items-center gap-10 space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-10 pb-10 w-full main-container">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-500 rounded-md w-[250px] h-[150px] animate-pulse cursor-pointer object-cover"
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-10 text-white video-section">
      <Container>
        <div className="px-10 w-full section-heading">
          <h1 className="font-semibold text-3xl underline underline-offset-8 tracking-wider">
            Videos
          </h1>
        </div>
        {!loading ? (
           <div className="container">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            freeMode={true}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
            }}
            className="mySwiper"
          >
            
              {data?.results?.map((video) => {
                return (
                  <SwiperSlide
                    key={video.id}
                    className="relative mt-4 pt-10 w-full h-full cursor-pointer group"
                  >
                    <div
                      className="relative flex flex-col justify-center items-center gap-2 px-10 w-full h-full"
                      onClick={() => {
                        setVideoId(video.key);
                        setShow(true);
                      }}
                    >
                      <div className="relative w-full group videoThumbnail">
                        <img
                          className="group-hover:brightness-50 shadow-md shadow-red-500 rounded-md w-full h-full transition-all duration-300 ease-in-out object-cover"
                          src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                          alt=""
                        />
                        <IoIosPlayCircle className="group-hover:scale-105 group-hover:rotate-90 group-hover:text-netflixRed top-1/2 left-1/2 absolute opacity-50 group-hover:opacity-100 text-8xl transform transition-all -translate-x-1/2 -translate-y-1/2 duration-300 delay-100 ease-in-out" />
                      </div>
                      <div className="font-semibold text-center capitalize tracking-wider videoTitle">
                        {video.name.slice(0, 35)}...
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            
          </Swiper>
          </div>
        ) : (
          <div className="flex justify-start items-start gap-4 mt-4 pt-10 castSkeleton">
            {loadingSkeleton()}
          </div>
        )}

        {show && (
          <VideoPopup
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
          />
        )}
      </Container>
    </div>
  );
}

export default VideosSection;
