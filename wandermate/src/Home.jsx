/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from "react";
import mountain from "./assets/assets/mountain2.jpg";

import Boudha from "./assets/assets/headerImg3.jpg";
import header from "./assets/assets/headerImg9.jpg";
import TopDestination from "./TopDestinationCard";
import TopHotels from "./TopHotels";
import TopTravelPackages from "./TopTravelPack";
import Footer from "./Footer";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Home =()=>{
    
      const[topdestination, setTopDestination] = useState([]);
  

    useEffect(()=>{
        const fetchTopDestination = async ()=>{
            try{
                const response = await fetch(`http://localhost:3000/topDestinations`);
                if(!response.ok){
                    throw new Error("Network connection is not found")
                }
                const data = await response.json();
                console.log(data);
                setTopDestination(data);
               
            }
            catch(error){
    
                console.log('errorrrrrrrrrrrrrrrrrrr')
            }
           
            };
            fetchTopDestination();
            
    },[]);
    return(
        <>
         <Header/>

        
        <div className="  relative  pb-14 mr-[84px] ml-[85px] rounded-lg flex justify-center items-center">
                 <img className="  rounded-md" src={header} alt="Mountain"></img>
             <div className=" flex absolute w-full h-6 justify-center items-center ">
            <input
              className="w-1/3 px-6 h-[4rem] rounded-md text-2xl stroke-none font-fredericka"
              type="text"
              name="homeSearch"
              placeholder="Search Your Places, Destination..."
            />
            <button className="bg-blue-500 w-[3rem] h-[3rem] pt-1 rounded-full absolute left-[62%]">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                // style={{ color: "#ffffff", fontSize: 18}}
                className="text-white text-2xl"
              />
            </button>
            </div>
                    
                   
                    
        </div>

        <div className="  w-full flex flex-row gap-[23px] flex-wrap ml-[18px]">
           
            < TopDestination props ={ topdestination } />
            <TopHotels />
            <TopTravelPackages/>
            <Footer/>

            
    
            
        </div>
      


        </>




    );
}
export default Home;