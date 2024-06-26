import React from "react";
import Container from "../../../components/Container";
import avatar from "../../../assets/avatar.png";
import IMG from "../../../components/IMG";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Cast({ data, loading }) {
  const skeleton = () => {
    return (
        <div className="items-center gap-10 space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-10 pb-10 w-full main-container">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-500 rounded-full w-[150px] h-[150px] animate-pulse cursor-pointer object-cover"
            >
            </div>
          ))}
        </div>
      );
  };

  return (
    <div className="bg-netflixbackground pt-10 w-full h-full text-white cart-section">
      <Container>
        <div className="px-10 w-full section-heading">
          <h1 className="font-semibold text-3xl underline underline-offset-8 tracking-wider">Top Cast</h1>
        </div>
        {!loading ? (
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            freeMode={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 10 },
              768: { slidesPerView: 5, spaceBetween: 10 },
              1024: { slidesPerView: 6, spaceBetween: 10 },
            }}
            className="mySwiper"
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id} className="relative pt-10 w-full h-full cursor-pointer group">
                <div className="flex flex-col justify-center items-center gap-2 px-10 w-full h-full">
                  <div className="profile-img">
                    <IMG
                      className="shadow-md shadow-red-500 rounded-full w-[200px] hover:scale-105 h-[120px] transform transition-all duration-500 cursor-pointer ease-in-out object-cover"
                      src={item.profile_path || avatar}
                    />
                  </div>
                  <p className="font-semibold name">{item.name.slice(0,14)}</p>
                  <p className="text-center text-xs underline underline-offset-2 character">{item.character}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex justify-start items-start gap-4 castSkeleton">
            {skeleton()}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Cast;
