import React, { useEffect, useState } from "react";
import { MdClose, MdInfo, MdPlayArrow } from "react-icons/md";
import Container from "../../../components/Container";

function Banner() {
  const [showTrailerVideo, setShowTrailerVideo] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const videoUrl =
    "https://www.youtube.com/embed/b9EkMc79ZSU?&autoplay=1&loop=1&mute=1&controls=0"; // Replace with your actual video URL

  const showTrailer = () => {
    setShowTrailerVideo(true);
  };

  const closeVideo = () => {
    setShowTrailerVideo(false);
  };

  useEffect(() => {
    // Set a timeout to hide the image and show the video after 3 seconds
    const timeout = setTimeout(() => {
      setShowImage(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="banner"
      className="relative flex justify-center items-end pb-10 w-full h-screen overflow-hidden"
    >
      <div className="top-0 -z-50 fixed bg-netflixBlack w-screen h-screen overflow-x-hidden background-layer"></div>

      <iframe
        className="-top-10 sm:-top-16 -left-52 sm:left-0 -z-40 absolute w-[300vw] sm:w-screen h-screen sm:h-[120vh]"
        src={videoUrl}
        title="Trailer Video"
        frameBorder={0}
        allowFullScreen
      ></iframe>

      <img
        className={`${
          showImage ? "block" : "opacity-0"
        } -top-10 sm:-top-16   -z-40 absolute bg-center  bg-netflixBlack transition-opacity duration-500 ease-in-out w-[300vw] sm:w-screen h-[120vh] overflow-x-hidden background-layer object-cover`}
        src="https://images.ctfassets.net/4cd45et68cgf/5DIYYKy9JB7m90nozSIcM1/2acf7e826bbe6a656fd91c9179f17e0b/Stranger_Things__The_Experience.jpg"
        alt=""
      />
      {showTrailerVideo && (
        <div
          style={{ zIndex: 9999 }}
          className="top-0 absolute flex justify-center items-center bg-netflixBlack bg-opacity-70 md:bg-opacity-0 h-screen container"
        >
          <div className="relative flex justify-center items-center 2xl:w-[1200px] h-1/2 sm:h-2/3 container">
            <iframe
              title="Trailer Video"
              className="w-full sm:w-[80%] h-full"
              src={"https://www.youtube.com/embed/b9EkMc79ZSU"}
              frameBorder={0}
              allow="autoplay; encrypted-media"
              allowFullScreen
              controls={1}
            ></iframe>
          </div>
          <button
            onClick={closeVideo}
            style={{ zIndex: 99999 }}
            className="top-24 right-5 md:right-0 absolute bg-netflixWhite hover:bg-neutral-200 px-2 p-2 rounded-full text-netflixBlack"
          >
            <MdClose className="font-bold text-2xl material-icons">
              close
            </MdClose>
          </button>
        </div>
      )}

      <Container>
        <div className="flex justify-start items-centerr">
          
          <div className="z-10 flex flex-col justify-start items-start gap-10 px-4 md:px-0 w-full md:w-1/2 text-netflixWhite">
            <div className="title-img-container">
              <img className="w-72 sm:w-96" src="assets/banner.png" alt="" />
            </div>
            <div className="text-lg sm:text-xl info-contaienr">
              <p>
                When a young boy vanishes, a small town uncovers a mystery
                involving secret experiments, terrifying supernatural forces and
                one strange little girl.
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 font-semibold btn-container">
              <button
                onClick={showTrailer}
                className="flex justify-center items-center gap-1 bg-netflixWhite hover:bg-slate-200 shadow-sm px-4 py-2 rounded-lg text-netflixBlack"
              >
                <MdPlayArrow className="text-2xl sm:text-4xl" />
                <span className="text-md sm:text-lg">Play</span>
              </button>
              <button className="flex justify-center items-center gap-2 bg-netflixBlack hover:bg-neutral-900 shadow-sm shadow-white px-4 py-2 rounded-lg text-netflixWhite">
                <MdInfo className="text-2xl sm:text-4xl" />
                <span className="text-md sm:text-lg">More Info</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
