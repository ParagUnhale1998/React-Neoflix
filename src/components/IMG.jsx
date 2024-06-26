import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function IMG({ src, className }) {
  return (
    <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            wrapperProps={{
              style: {transitionDelay: "1s"},
          }}
            src={`https://image.tmdb.org/t/p/w780${src}`}
        />
  )
}

export default IMG
