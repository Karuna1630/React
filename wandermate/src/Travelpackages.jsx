import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function TravelPackages() {
  const checkMark = <span className=" text-black pr-2"> &#x2713;</span>;
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    const fetchTravelPackages = async () => {
      try {
        const response = await fetch(`http://localhost:3000/travelPackages`);
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
  }, []);
  return (
    <>
      <Header />
      <div className="relative w-full flex flex-col  ">
        {travelPackages.map((travelPackages) => (
          <div className="relative w-[91%] px-8  shadow-lg ml-16 flex mb-6 overflow-hidden gap-5 ">
            <div className=" w-2/4 ">
              <img className="w-full h-[250px] py-2 object-cover" src={travelPackages.img}></img>
            </div>

            <div className=" w-2/4 h-full flex justify-center items-center flex-col gap-2">
              <span className="font-semibold text-xl">
                {travelPackages.name}
              </span>
              <span className="font-semibold text-xl">
                ${travelPackages.price}
              </span>
              
                  <Link  className="bg-blue-600 px-5 text-xl rounded text-white" to={`/travelpackages/${travelPackages.id}`}>View Deal</Link>
               
               
      
                
              
              <ul>
                <li>
                  {checkMark}
                  Free Cancellation
                </li>
                <li>{checkMark}Reserve now, pay at stay</li>
                <li>{travelPackages.rating}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default TravelPackages;
