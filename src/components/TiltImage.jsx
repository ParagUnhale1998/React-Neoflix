import React from "react";
import Tilt from "react-parallax-tilt";

function TiltImage({trackWindow, src, className }) {
  return (
    <Tilt
    trackOnWindow={true}
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    perspective={1000}
    transitionSpeed={500}
    gyroscope={true}
    glareEnable={true}
    glareMaxOpacity={0.5}
    glareReverse={true}
    scale={1}

    >
      <img src={`https://image.tmdb.org/t/p/w780${src}`} alt="" className={className} />
    </Tilt>
  );
}

export default TiltImage;
