import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import StarRating from "./Starsh";

function Hotels() {
  const checkMark = <span className="text-black pr-2"> &#x2713;</span>;

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:5024/wandermate_backened/hotel');
        if (!response.ok) {
          throw new Error("Network connection is not found");
        }
        const data = await response.json();
        console.log(data)
        setHotels(data);
      } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr");
      }
    };
    fetchHotels();
  }, []);

  return (
    <>
      <Header />
      <div className=" relative w-full flex flex-col">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="relative w-[91%] ml-16 px-8 shadow-lg flex mb-6 overflow-hidden rounded-md gap-5">
            <div className="w-2/4   ">
              <img className="w-full h-[250px] object-cover py-2 " src={hotel.img} alt={hotel.name} />
            </div>
            <div className=" w-2/4 h-full flex justify-center items-center flex-col gap-2">
              <span className="font-semibold text-xl">{hotel.name}</span>
              <span className="font-semibold text-xl">${hotel.price}</span>
              <Link className="bg-blue-600 px-5 text-xl rounded text-white" to={`/hotels/${hotel.id}`}>View Deal</Link>
              <ul>
                <li>{checkMark}Free Cancellation</li>
                <li>{checkMark}Reserve now, pay at stay</li>
                <li className="pl-3 flex items-center">
                <span >{hotel.rating}</span>
                <div className="ml-3 flex">
                  <StarRating rating={hotel.rating}/>
                 </div>
                 
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Hotels;
