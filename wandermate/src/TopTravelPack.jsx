import React,{useState, useEffect} from "react";
import logo from"./assets/assets/hotel3.jpg";

const TopTravelPackages = ()=>{
    const [topTravelPackages, setTravelPackages] =useState([]);

    useEffect(()=>{
        const fetchTravelPackages = async ()=>{
            try{
                const response = await fetch(`http://localhost:3000/travelPackages`);
                if(!response.ok){
                    throw new Error("Network connection is not found")
                }
                const data = await response.json();
                console.log(data);
                setTravelPackages(data);
               
            }
            catch(error){
    
                console.log('errorrrrrrrrrrrrrrrrrrr')
            }
           
            };
            fetchTravelPackages();
            
    },[]);
    




    return(
        <>
        <div className="flex flex-row gap-2">
        <img className=" w-10 h-10 ml-[55px] rounded-full" src={logo} alt="logo"></img>
        <h1 className="text-2xl font-bold">Top TravelPackages</h1>
        </div>

      <div className=" w-[100%] flex flex-row flex-wrap gap-4 mr-[70px] ml-[50px]">
        {topTravelPackages.map((travelpackage) => (
          <div className="w-[48%]" key={travelpackage.id}>
            <div className=" relative w-full flex flex-col m-3 ">
              <img
                className="w-full h-[350px] rounded-xl"
                src={travelpackage.img}
                alt={travelpackage.name} />

              <div className="w-full h-14 absolute flex flex-row justify-between bottom-0 rounded-bl-xl rounded-br-xl  px-5 py-3 backdrop-blur-sm ">
                <h1 className="text-white shadow-white text-2xl font-semibold ">{travelpackage.name}</h1>
                <p className="font-bold text-white shadow-white">${travelpackage.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
        </>



    );
}
export default TopTravelPackages;