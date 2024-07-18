/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./Nav";

const Landing = () => {
  return (
    <>
     <Nav/>
    <div className=" relative ">
       
        <img className=" w-full h-screen bg-cover bg-center" src="https://cdn.pixabay.com/photo/2021/03/11/02/57/mountain-6086083_640.jpg" alt="" />
   
       <h1 className="absolute top-3 left-0 text-3xl font-bold text-orange-500 m-4  ">Explore.</h1> 
       <div className="absolute top-11 left-1/2 transform -translate-x-1/2  flex flex-row items-center justify-center ">
        <div className=" text-black text-2xl font-bold pr-14">About</div>
        <div className="text-black text-2xl font-bold pr-14">Tours</div>
        <div className="text-black text-2xl font-bold pr-14">Sale</div>
        <div className=" text-black text-2xl font-bold pr-14">Contact</div>
        </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-white text-2xl">The country of Himalays</p>
        <h1 className="text-orange-500 text-9xl font-bold">NEP<span className="text-white text-9xl font-bold">AL</span></h1>
      </div>

      <div className="absolute bottom-0 left-0">
        <p className="text-white text-l font-bold px-2  py-2">Visit Nepal. You will never regret it. <br/>
          This is something incredible, fanstastic,<br/> 
          mesmerizing and lifetime experience</p>
      </div>

      <div className="absolute bottom-0 right-0 flex flex-row items-center justify-center py-2 ">
        <div className=" text-white text-l font-bold pr-6">Facebook</div>
        <div className="text-white text-l font-bold pr-6">Twitter</div>
        <div className="text-white text-l font-bold pr-6">Instagram</div>
        <div className=" text-white text-l font-bold pr-6">Youtube</div>
        <div className=" text-white text-l font-bold pr-6">Google</div>
        </div>

       </div>
    </>
  );
};
export default Landing;
