/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "./assets/assets/img6.jpg";


export default function TopDestination({ props }) {
  return (
    <>

      <div className="flex flex-row gap-2">
      <img className=" w-10 h-10 ml-[58px] rounded-full" src={Logo} alt="logo"></img>
      <h1 className="text-2xl font-bold">Top Destinations</h1>
      </div>
    
      
    
      <div className="w-[100%] flex flex-row flex-wrap gap-4 mr-[70px] ml-[50px]">
        {props.map((topdestination) => (
          <div className="w-[48%]" key={topdestination.id}>
            <div className=" relative w-full flex flex-col m-3 ">
              <img
                className="w-full h-[350px] rounded-xl"
                src={topdestination.img}
                alt={topdestination.name} />

              <div className="w-full h-14 absolute flex flex-row justify-between bottom-0 rounded-bl-xl rounded-br-xl  px-5 py-3 backdrop-blur-sm ">
                <h1 className="text-white shadow-white text-2xl font-semibold ">{topdestination.name}</h1>
                <p className="font-bold text-white shadow-white">${topdestination.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      
    </>
  );
}
