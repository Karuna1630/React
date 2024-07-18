/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from "react";
import Card from "./CardComponent";
import Cardcomponent from "./CardComponent";

const HotelList=()=>{
    const[hotels, setHotels]=useState([]);
    const[loading, setLoading]=useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        const fetchHotels = async ()=>{
            try{
            const response = await fetch(`http://localhost:3000/hotels`);
            if(!response.ok){
                throw new Error("Network connection is not found");
            }
            const data = await response.json();
            setHotels(data);
            setLoading(false);
        }
        catch(error){
            setError(error);
            setLoading(false);
        }
       
        };
        fetchHotels();
    },[]);

        // if (loading){
        //     return<p>Loading....</p>
        //  }

        // if (error){
        //     return<p>Error:{error}</p>
        //  }

    return(
        <>
        
        {/*<div props={data}>
            <h1>Hotels</h1>
            <ul>
                {hotels.map((hotel) =>(
                <li key={hotel.id}>
                <h1>Name:{hotel.name}</h1>
                <p>Price:Rs{hotel.price}</p>
                <p>Rating: {hotel.rating} Stars</p>
                <img src={hotel.img} alt= {hotel.name}></img>
                <p>{hotel.desc}</p>

                </li>
                
                ))}
                
            </ul>
        </div>*/}


         <div className="w-full flex flex-row gap-[23px] flex-wrap justify-start pl-[18px]">
            < Cardcomponent props={hotels}/>

         </div>
           
         </>
        );
}
export default HotelList;