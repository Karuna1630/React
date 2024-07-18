/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from "react";

function CounterUse(){
    const[count,setCount] =useState(0);

    useEffect(()=>{
        console.log(`Component mounted or count changed to: ${count}`);
        return()=>{
            console.log('Component unmounted or count changed. cleanin...')
        };

    },[count]);// this is dependency array which is change hune wala data it pass as argument of useeffect
    const increment =()=>{
        setCount(prevCount => prevCount + 1);
    };
    return(
        <>
        <p className="text-black text-xl">Count:{count}</p>
        <button onClick={increment}>Increment</button>


        </>
    )
}
export default CounterUse;

