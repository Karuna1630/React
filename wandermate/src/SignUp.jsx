/* eslint-disable no-unused-vars */
import React,{ useState} from "react";
import Nav from "./Nav";

const Signup =() =>{

    const[formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""


    })

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("submitted", formData)
    }
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData, [name]:value});
    }    
    

    return(
    <>
    <Nav/>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl" >
        <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input><br/>
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input><br/>
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input><br/>
        <input type="password" placeholder="Confirm Password" name="confirmpassword" value={formData.confirmpassword}  onChange={handleChange} className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input><br/>
        <button className="w-full bg-blue-600 outline outline-offset-2 outline-2 rounded-md text-white h-8 " type="submit">Sign Up</button>
        <p className="text-black text-center p-5">I agree to all <span className="text-sky-500">Terms and Conditions</span></p>

    </form>

    </>

    );
}
export default Signup;