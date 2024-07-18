/* eslint-disable no-unused-vars */
import React from "react";

export default function Cardcomponent({ props }) {
  console.log(props);
  return (
    <div className="w-[100%] flex flex-row flex-wrap  px-14">
      {props.map((hotel) => (
        <div key={hotel.id} >
          <div className=" relative w-[350px] flex flex-col m-3 bg-green-200 rounded-md ">
            <img
              className="w-full h-[300px] rounded-t-md"
              src={hotel.img}
              alt={hotel.name}
            ></img>
            <h1 className="text-xl text-bold px-1">{hotel.name}</h1>
          <p className="py-2 px-1">{hotel.desc.slice(0,250)}...</p>
          <h1 className="font-medium px-1 py-1 text-green-500 ">{hotel.freeCancellation ? 'Refundable':'Non-Refundable'}</h1>
            <div className="w-full flex flex-row justify-between mb-1">
              <h1 className="px-1 font-bold">Rs. {hotel.price}</h1>
              <button className="bg-sky-400 px-2 py-1 rounded-br-md rounded-tl-md text-white text-bold mr-1
               ">Book Now</button>
            </div>
            <div className="absolute text-bold text-orange-600 bg-orange-950 w-7 px-1 top-0 right-0 rounded-tr-md rounded-bl-md"> {hotel.rating}.0 </div>

           
          </div>
        </div>
      ))}
    </div>
  );
}
