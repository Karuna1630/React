import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" relative w-[90%] bg-white mr-[70px] ml-[55px] mb-4 h-[13rem] flex flex-row justify-between py-3 px-40 shadow-2xl ">
        <div className="flex flex-col ml-8">
          <h1 className="font-bold text-2xl text-gray-500 mb-3 ">
            About Wandermate
          </h1>
          <p>About Us</p>
          <p>Home</p>
          <p>Destinations</p>
          <p>Tours</p>
          <p>Hotels</p>
        </div>

        <div className="flex flex-col ">
          <h1 className="font-bold text-2xl text-gray-500 mb-3">Explore</h1>
          <p>Flights</p>
          <p>Car Rentals</p>
          <p>Activities</p>
          <p>Deals</p>
        </div>

        <div className="flex flex-col ">
          <h1 className="font-bold text-2xl text-gray-500 mb-3">
            Trip-Advisor-Sites
          </h1>
          <p className="">Contact Us</p>
          <p>Terms of Service</p>
          <p>Privacy Polic y</p>
          <p>Terms and Condition</p>
        </div>
        <p className="absolute left-[35%] bottom-1"> &#169; 2024 WanderMate LLC All rights reserved</p>
      </div>
    </>
  );
};
export default Footer;
