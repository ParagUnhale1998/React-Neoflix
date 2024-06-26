import React from "react";

function Loading() {
  return (
    <div className="items-center gap-4 space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 main-container">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="relative border-1 w-full h-full cursor-pointer group"
        >
          <div className="bg-gray-500 rounded-md w-full h-[400px] animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default Loading;
