import React from "react";

function Container({ children }) {
  return (
    <div className="mx-auto my-0 px-[20px] py-0 w-full max-w-[1200px] xl:max-w-[1300px] container">
      {children}
    </div>
  );
}

export default Container;
