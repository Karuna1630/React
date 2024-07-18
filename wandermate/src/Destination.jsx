import React, { useEffect, useState } from "react";
import mountain from "./assets/assets/mountain2.jpg";

import TopDestination from "./TopDestinationCard";
import Header from "./Header";
import TopHotels from "./TopHotels";
import TopTravelPackages from "./TopTravelPack";
import Footer from "./Footer";


const Destination = () => {
  const [topdestination, setTopDestination] = useState([]);
  const [destination, setDestination] = useState([]);

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
        console.log('errorrrrrrrrrrrrrrrrrrr');
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
        console.log('errorrrrrrrrrrrrrrrrrrr');
      }
    };
    fetchDestination();
  }, []);

  return (
    <>
      <Header />
      <Carasoul data={destination} />
      <div className="w-full flex flex-row gap-[23px] flex-wrap pl-[18px] ">
        <TopDestination props={topdestination} />
        <TopHotels />
        <TopTravelPackages />
        <Footer />
      </div>
    </>
  );
}

export default Destination;
