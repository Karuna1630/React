/* eslint-disable no-unused-vars */
import React from "react";

export default function DestCard({ props }) {
  console.log(props);
  return (
    <>
      <div className="w-[100%] flex flex-row flex-wrap">
        {props.map((destination) => (
          <div key={destination.id}>
            <div className=" relative w-[350px] flex flex-col m-3 bg-sky-300 rounded-md ">
              <img
                className="w-full h-[300px] rounded-t-md"
                src={destination.img}
                alt={destination.name}
              ></img>
              <h1 className="text-green-700 text-2xl text-bold px-1">
                {destination.title}
              </h1>
              <p className="py-2 px-1">{destination.desc.slice(0, 250)}...</p>
              <p className="text-medium text-orange-600 px-1 py-1">
                Weather: {destination.weather}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

{
  /*<h1>Destinations for Vacation</h1>
<ul>
    {destination.map((destinaton) =>(
    <li key={destinaton.id}>
    <h1>Name:{destinaton.name}</h1>
    <p>Price:Rs{destinaton.price}</p>
    <p>Rating: {destinaton.rating} Stars</p>
    <img src={destinaton.img} alt= {destinaton.name}></img>
    <p>{destinaton.desc}</p>

    </li>
    
    ))}
    
</ul>*/
}
