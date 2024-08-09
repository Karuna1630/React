import React, { useEffect, useState } from "react";

const ScrollButton = ({ props }) => {
  const [index, setIndex] = useState(0);
  const screenwidht = window.innerWidth;
  const mainSlideWidth = screenwidht - 190;
  // console.log("This isis ", props);
  console.log(mainSlideWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % props.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" w-full h-[500px] overflow-hidden rounded-lg">
        <div
          className=" relative w-full h-full flex transform transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * mainSlideWidth}px)` }}
        >
          {props.map((prop, index) => (
            
            <img
              className="w-full flex-shrink-0 object-cover rounded-lg"
              src={prop.img}
              alt={prop.title}
            />
          ))}
      <div className="absolute">{prop.title}
    </div>
        </div> 
        
      </div>
    </>
  );
};

export default ScrollButton;
