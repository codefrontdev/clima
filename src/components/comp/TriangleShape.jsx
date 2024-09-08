import React from 'react'

const TriangleShape = () => {
  return (
    <div
      className="relative -top-[25px] flex lg:justify-between justify-center items-center z-10 bg-lightBlue w-full h-10 
        rounded-t-3xl after:absolute after:w-full after:h-[70%] after:content-center
        after:bottom-[0px] after:bg-white after:rounded-t-3xl after:-z-50"
    >
      <div className="triangle-shape-2 absolute z-20 bottom-[28px] bg-white w-full h-10"></div>
      <div className="triangle-shape-2 absolute bottom-[40px] z-10 bg-lightBlue w-full h-10"></div>
    </div>
  );
}

export default TriangleShape