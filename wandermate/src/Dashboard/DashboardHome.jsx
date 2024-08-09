import React from "react";
import { Link,BrowserRouter,Routes, Route } from "react-router-dom";
import HotelsDash from "./HotelsDash";
import Users from "./Users";
import DestinationDash from "./DestinationDash";
import TravelPackagesDash from "./TravelPackagesDash";
import HomeDash from './HomeDash'

const DashboardHome=()=>{
return(
    <>
    <div className="flex">
        <SideBar/>
        <div className="bg-orange-300  w-full">
        <Paths/>
        </div>

    </div>
 

    </>
);
}
export default DashboardHome;

const Paths=()=>{
    return(
    <Routes>
        <Route path="homedash" element={<HomeDash/>}/>
        <Route path="hoteldash" element={<HotelsDash/>}></Route>
        <Route path="users" element={<Users/>}></Route>
        <Route path="travelpackagesdash" element={<TravelPackagesDash/>}></Route>
        <Route path="destinationdash" element={<DestinationDash/>}></Route>
    </Routes>
    )
}

const SideBar=()=>{
    return(
    <div className="bg-blue-400 w-[25vw] h-screen px-3 py-4 font-bold text-2xl text-white border-2 ">
    <ul>
        
        <li>
            <Link to="homedash">Home</Link>
        </li>

        
        <li>
            <Link to="hoteldash">Hotels</Link>
        </li>

        <li>
            <Link to="users">Users</Link>
        </li>

        <li>
            <Link to="travelpackagesdash">TravelPackages</Link>
        </li>

        <li>
            <Link to="destinationdash">Destination</Link>
        </li>

    </ul>
    </div>
    );
}
   

