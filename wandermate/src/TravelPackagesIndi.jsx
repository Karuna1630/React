import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import Reviews from "./Reviews";




function TravelPackIn() {
  const { id } = useParams();

  
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    const fetchTravelPackages = async () => {
      try {
        const response = await fetch(`http://localhost:3000/travelPackages/${id}`);
        if (!response.ok) {
          throw new Error("Network connection is not found");
        }
        const data = await response.json();
        console.log(data);
        setTravelPackages(data);
      } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr");
      }
    };
    fetchTravelPackages();
  }, [id]);

   
  

  const scrollToSelection=(id)=>{
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  };
  if (!travelPackages) {
    return <h2>Loading..............</h2>;
  }

  return (
    <>
      <Header />
      <div className="mx-20  overflow-hidden ">
        <div className="  w-screen h-[700px] flex flex-row ">
          <div className=" w-[46%] h-[660px] py-5  ">
            <img
              className="rounded-md h-full w-full object-cover"
              src={travelPackages.img}
              alt={travelPackages.name}
            />
          </div>
          <div className="  overflow-hidden p-5  w-[45%] h-[658px] gap-3  flex flex-wrap object-cover">
            <img
              className="w-[300px] h-[300px] rounded-md"
              src={travelPackages.img}
              alt={travelPackages.name}
            />
            <img
              className="w-[300px] h-[300px] rounded-md"
              src={travelPackages.img}
              alt={travelPackages.name}
            />
            <img
              className="w-[300px] h-[300px] rounded-md"
              src={travelPackages.img}
              alt={travelPackages.name}
            />
            <img
              className="w-[300px] h-[300px] rounded-md"
              src={travelPackages.img}
              alt={travelPackages.name}
            />
          </div>
        </div>
        <div className=" w-[25%] h-10 mt-1 mb-1 py-1 flex flex-row justify-between text-xl font-semibold">
        <button onClick={()=>{
          scrollToSelection("about");
        }}>About</button>

        <button onClick={()=>{
          scrollToSelection("location");
        }}>Location</button>

        <button onClick={()=>{
          scrollToSelection("reviews");
        }}>Reviews</button>
        </div>

        <div id="about" className="w-full py-2 mt-5 mb-5 gap-5 flex flex-row shadow-xl border-2 rounded-md">
        <div className="flex  ml-3 flex-col w-[50%] px-2 ">
        <h1 className="text-2xl font-bold">{travelPackages.id}</h1>

        <p className="text-l font-semibold">{travelPackages.desc}</p>
        </div>
        <div className="w-[50%] mr-3 flex items-center justify-center ">
        <button className="bg-sky-400 px-8 py-1 rounded-md text-white text-bold ">Book Now</button>
        </div>
        </div>
        <div id="location" className="w-full py-2 px-2 mt-5 mb-5 gap-5 flex flex-row shadow-xl border-2 rounded-md">
          jdhk
        </div>
        <div id="reviews"><Reviews/></div>
      </div>
    </>
  );
}

export default TravelPackIn;
