import React from "react";
import profile from "./assets/assets/userProfile.jpg";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>


    <div className="relative flex  w-[91%] h-16 mb-4 ml-[68px] items-center justify-between px-4">
    <p className=" text-sky-600 font-bold text-xl">WanderMate</p>

    
    <ul className=" absolute inset-x-0 top-0 flex flex-row items-center justify-center w-full ">
                <li className="text-black font-bold text-2xl py-4 px-6  "><Link to="/home">Home</Link></li>
                <li className="text-black font-bold text-2xl py-4 px-6 "><Link to="/destination">Destination</Link></li>
                <li className="text-black  font-bold text-2xl py-4 px-6 "><Link to="/travelpackage">Travel Packages</Link></li>
                <li className="text-black font-bold text-2xl py-4 px-6 "><Link to="/hotels">Hotels</Link></li>
                
     </ul>

     <div className="   flex items-center justify-between gap-3">
    <span className=" text-black font-bold text-2xl " >Karuna123</span>
    <img className="a w-12  rounded-full "src={profile} alt="Logo"/>
    </div>

    </div>

        </>
    );

}
export default Header;