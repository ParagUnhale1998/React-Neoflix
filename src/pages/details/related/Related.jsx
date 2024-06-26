import React from "react";
import useFetch from "../../../hooks/useFetchData";
import Container from "../../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Card from "../../../components/Card";

function Related({ url, mediaType, id, title }) {
  const { data, loading } = useFetch(url);

  const skeleton = () => {
    return (
      <div className="items-center gap-2 space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 px-10 pb-10 w-full main-container">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-500 rounded-md w-[260px] h-[400px] animate-pulse cursor-pointer object-cover"
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-netflixbackground w-screen h-full text-white cart-section">
      <Container>
        {data?.results?.length > 0 && (
          <div className="w-full section-heading">
            <h1 className="px-10 font-semibold text-3xl underline underline-offset-8 tracking-wider">
              {title}
            </h1>
          </div>
        )}
        {!loading ? (
          <div className="p-10 container">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              freeMode={true}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
                1280: { slidesPerView: 4, spaceBetween: 20 },
                // 1536: { slidesPerView: 5, spaceBetween: 20 },
              }}
              className="mySwiper"
            >
              {data?.results?.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="relative w-full h-full cursor-pointer group"
                >
                  <Card mediaTypes={mediaType} key={item.id} data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex justify-start items-start gap-4 castSkeleton">
            {skeleton()}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Related;
