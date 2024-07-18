/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Nav from "./Nav";

const Registration = () => {
  const [formData, setFormData] = useState({ //it track the change in the data
    username: "",
    email: "",
    gender: ""
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Nav />
      <form
        onSubmit={handleSubmit}
        className="max-w-max mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl"
      >
        <label className="text-center text-black text-xl">Registration form</label>
        <label>Name:</label>
        <input
          type="text"
          placeholder="name"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
          <div className="flex items-center">
            <input type="radio" id="male" name="gender"value="male"checked={formData.gender === "male"} onChange={handleChange} className="mr-2"/>
            <label htmlFor="male" className="mr-4">Male</label>
            <input type="radio"id="female" name="gender" value="female"checked={formData.gender === "female"}onChange={handleChange}className="mr-2"/>
            <label htmlFor="female" className="mr-4">Female</label>
            <input type="radio" id="other" name="gender" value="other" checked={formData.gender === "other"}onChange={handleChange} className="mr-2"/>
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <button
          className="w-full bg-blue-600 outline outline-offset-2 outline-2 rounded-md text-white h-8" type="submit"> Submit</button>
      </form>
      
    
    </>
  );
};

export default Registration;
