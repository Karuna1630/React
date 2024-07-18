/* eslint-disable no-unused-vars */
import React ,{useEffect, useState} from "react";


const DestinationlList=()=>{
    const[destinaton, setDestination]=useState([]);
    const[loading, setLoading]=useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        const fetchdestination = async ()=>{
            try{
            const response = await fetch(`http://localhost:3000/destination`);
            if(!response.ok){
                throw new Error("Network connection is not found");
            }
            const data = await response.json();
            console.log(data);
            setDestination(data);
            setLoading(false);
            }
        catch(error){
            setError(error);
            setLoading(false);
        }
       
        };
        fetchdestination();
    },[]);

        if (loading){
            return<p>Loading....</p>
         }

        if (error){
            return<p>Error:{error}</p>
         }

    return(
        <div>
            <h1>Destinations for Vacation</h1>
            <ul>
                {destinaton.map((destinaton) =>(
                <li key={destinaton.id}>
                <h1>Name:{destinaton.name}</h1>
                <p>Price:Rs{destinaton.price}</p>
                <p>Rating: {destinaton.rating} Stars</p>
                <img src={destinaton.img} alt= {destinaton.name}></img>
                <p>{destinaton.desc}</p>

                </li>
                
                ))}
                
            </ul>
        </div>
    );
}
export default DestinationlList;