import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircleRating({rating,text,width}) {
  return (
    <div className={`bg-netflixWhite  p-[1px] rounded-full w-12 ${width} circleRating`}>
    <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
       
        className="font-bold text-2xl"
        styles={buildStyles({
            pathColor:
                rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                textColor: '#E50914',
                textSize: text,
                
        })}
    />
</div>
  )
}

export default CircleRating