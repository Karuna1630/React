/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Nav from "./Nav";


const Login =() =>{

    const [formData, setFormData]= useState({
        username:"",
        password:""
    })

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Submitted",formData)
    }

    const handleChange=(e)=>{
        const {name,value} =e.target;
        setFormData({...formData, [name]:value

        });


    }
    return(
        <>
        <Nav/>
        
           <form onSubmit={handleSubmit} className="max-w-md  mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl" >
            <label className="text-black text-bold text-2xl">Username</label><br/>
            <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/><br/>
            <label className="text-black text-bold text-2xl">Password</label><br/>
            <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/><br/>
            <button className="w-full bg-blue-600 outline outline-offset-2 outline-2 rounded-md text-white h-8 " type="submit">Sign In</button>
            <p className="text-black text-center p-4">New Here? <span className="text-sky-400">Sign Up</span></p>
           </form>
        
        
        
        </>



    );
}
export default Login;