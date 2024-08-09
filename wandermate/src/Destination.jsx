import React, { useEffect, useState, useRef } from "react";
import TopDestination from "./TopDestinationCard";
import Header from "./Header";
import TopHotels from "./TopHotels";
import TopTravelPackages from "./TopTravelPack";
import Footer from "./Footer";
import ScrollButton from "./scroll"; // Import the ScrollButton

const Destination = () => {
  const [topdestination, setTopDestination] = useState([]);
  const [destination, setDestination] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchTopDestination = async () => {
      try {
        const response = await fetch(`http://localhost:3000/topDestinations`);
        if (!response.ok) {
          throw new Error("Network connection is not found");
        }
        const data = await response.json();
        console.log(data);
        setTopDestination(data);
      } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr");
      }
    };
    fetchTopDestination();
  }, []);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`http://localhost:3000/destination`);
        if (!response.ok) {
          throw new Error("Network connection is not found");
        }
        const data = await response.json();
        console.log(data);
        setDestination(data);
      } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr");
      }
    };
    fetchDestination();
  }, []);

  

  return (
    <>
      <Header />
      <div className="relative pb-14 mr-[93px] ml-[80px]">
        <div className="relative overflow-x-auto" ref={containerRef}>
          <div className="flex space-x-4">
            {destination.map((destination) => (
              <div
                className="h-[40vh] relative sm:h-[40vh] md:h-[65vh] lg:h-[75vh] w-[80vw] mt-8 transition-all duration-300 ease-in-out rounded-lg flex-shrink-0"
                key={destination.id}
              >
                <img
                  className="h-full w-full object-cover rounded-lg transition-all duration-300 ease-in-out"
                  src={destination.img}
                  alt={destination.title}
                />
                <div className="absolute">{destination.title}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollButton props = {destination}/>
      </div>

      <div className="w-full flex flex-row gap-[23px] flex-wrap pl-[18px]">
        <TopDestination props={topdestination} />
        <TopHotels />
        <TopTravelPackages />
        <Footer />
      </div>
    </>
  );
};

export default Destination;
