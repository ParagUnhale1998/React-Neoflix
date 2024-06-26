import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import LazyImg from "./LazyImg";
// import CircleRating from "./CircleRating";
// import Genres from "./Genres";
// import dayjs from "dayjs";
import Card from "./Card";

const Carousel = ({ title, data, loading, mediaTypes }) => {
  const renderSkeletons = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <SwiperSlide
        key={index}
        className="relative border-1 w-full h-full cursor-pointer group"
      >
        <div className="bg-gray-500 rounded-md w-full h-[350px] animate-pulse"></div>
      </SwiperSlide>
    ));

  const renderData = () =>
    data.map((item) => (
      <SwiperSlide
        key={item.id}
        className="relative border-1 w-full h-full cursor-pointer group"
      >
        {/* <LazyImg
          src={item.poster_path}
          className="w-full h-auto transform transition duration-200"
        />
        <div className="group-hover:flex bottom-0 absolute flex flex-col justify-end items-start gap-2 bg-black bg-opacity-70 p-2 pb-5 w-full h-full transform transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
          <div className="font-bold text-lg">{item.title || item.name}</div>
          <p className="text-sm">{item.overview.slice(0, 100)}...</p>
          <span className="font-bold text-sm">
            <strong className="font-semibold text-white">Aired :</strong>{" "}
            <span className="underline underline-offset-2">
              {" "}
              {dayjs(item.release_date || item.first_air_date).format(
                "MMM D, YYYY"
              )}
            </span>
          </span>
          <CircleRating rating={item.vote_average.toFixed(1)} />
          <Genres data={item.genre_ids.slice(0, 2)} type={item.media_type} /> 
        </div>
          */}
        <Card mediaTypes={mediaTypes} data={item} />
      </SwiperSlide>
    ));

  return (
    <div className="carouselSection">
      {title && (
        <h2 className="my-4 w-full text-2xl sm:text-3xl tracking-wider">
          {title}
        </h2>
      )}

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1,spaceBetween: 10,},
          480: {slidesPerView: 2, spaceBetween: 10,},
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
          1536: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="mySwiper"
      >
        {loading || !data || data.length === 0
          ? renderSkeletons()
          : renderData()}
      </Swiper>
    </div>
  );
};

export default React.memo(Carousel);

// old code without clean and best practise// components/Carousel.js
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import LazyImg from "./LazyImg";
// import CircleRating from "./CircleRating";
// import Genres from "./Genres";

// const Carousel = ({ title, data, loading }) => {

//   const renderSkeletons = () => (
//     <div className="flex justify-start items-center gap-4 container">
//       {Array.from({ length: 6 }).map((_, index) => (
//         <div
//           key={index}
//           className="bg-gray-500 rounded-md w-1/5 h-[350px] animate-pulse posterBlock skeleton"
//         ></div>
//       ))}
//     </div>
//   );

//   if (!data || data.length === 0)
//     return (
//       renderSkeletons()
//     );

//   return (
//     <div className="carouselSection">
//       {title && (
//         <h2 className="my-4 w-full text-2xl sm:text-3xl tracking-wider">
//           {title}
//         </h2>
//       )}

//       <Swiper
//         slidesPerView={4}
//         spaceBetween={20}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         // modules={[FreeMode, Pagination]}
//         breakpoints={{
//           640: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//           },
//         }}
//         className="mySwiper"
//       >
//         {loading
//           ? renderSkeletons()
//           : data.map((item) => (
//               <SwiperSlide
//                 key={item.id}
//                 className="relative border-1 w-full h-full cursor-pointer group"
//               >
//                 <LazyImg
//                   src={item.poster_path}
//                   className="w-full h-auto transform transition duration-200"
//                 />
//                 {/* <img
//                 src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//                 alt={item.title || item.name}
//                 className="group-hover:scale-110 w-full h-auto transform transition duration-200"
//               /> */}

//                 <div class="group-hover:flex bottom-0 absolute flex flex-col justify-end items-start gap-2 bg-black bg-opacity-70 p-2 pb-5 w-full h-full transform transition-all translate-y-full group-hover:translate-y-0 duration-500 ease-in-out">
//                   <div className="font-bold text-lg">
//                     {item.title || item.name}
//                   </div>
//                   <p className="text-sm">{item.overview.slice(0, 100)}...</p>
//                   <span className="font-bold text-sm">
//                     <strong className="font-semibold text-white">
//                       Aired :
//                     </strong>{" "}
//                     <span className="underline underline-offset-2">
//                       {item.release_date || item.first_air_date}
//                     </span>
//                   </span>
//                   <CircleRating rating={item.vote_average.toFixed(1)} />
//                   <Genres
//                     data={item.genre_ids.slice(0, 2)}
//                     type={item.media_type}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;
