import React, { useEffect, useState } from "react";


import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function TravelPackages() {

    const checkMark = <span className=" text-black pr-2"> &#x2713;</span>;
    const [travelPackages, addPackages] = useState([])
    const [route, setRoute] = useState(``);
    useEffect(() => {
      FetchData("travelPackages", addPackages);
    }, []);

    useEffect(() =>{
      const goTo = () => {

      }
    }, [])

    console.log(travelPackages);
    return (
      <>
        <div className="relative w-[86vw] h-screen  lg:mx-[7vw]">
          <Header />
          <div className="relative w-full h-[1000px] flex flex-col">
            {travelPackages.map((travelPkg, index) => (
              <div className="relative w-full h-4/6 shadow-lg flex mb-5 overflow-hidden gap-5 ">
                <div className=" w-2/4 h-full object-cover">
                  <img src={travelPkg.img}></img>
                </div>
                <div className=" w-2/4 h-full flex justify-center items-center flex-col gap-2">
                  <span className="font-semibold text-xl">
                    {travelPkg.name}
                  </span>
                  <span className="font-semibold text-xl">
                    ${travelPkg.price}
                  </span>
                
                  <button
                    onClick={() => {
                      <Link to={`/hotels/${travelPkg.id}`}></Link>;
                    }}
                    className="bg-blue-600 px-5 text-xl rounded text-white"
                  >
                    View Deal
                  </button>
                  <ul>
                    <li>
                      {checkMark}
                      Free Cancellation
                    </li>
                    <li>{checkMark}Reserve now, pay at stay</li>
                    <li>{travelPkg.rating}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </>
    );
}

export default TravelPackages;