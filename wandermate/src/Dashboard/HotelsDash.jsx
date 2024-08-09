
import {React,useEffect,useState} from "react";
import axios from "axios";

const HotelsDash=()=>{
  const [hotels, setHotels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentHotelIndex, setCurrentHotelIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [NewHotels, setNewHotels] = useState({
   
    
    name: "",
    price: 0,
    img: [],
    rating: 0,
    description: "",
    freeCancellation: false,
    reserveNow: false,
  });
    


    const fetchHotels = async()=>{
        const response = await axios.get('http://localhost:5024/wandermate_backened/hotel')
        console.log(response.data);
        setHotels(response.data);
    }

    const SaveHotelsToAPI = async(NewHotels)=>{
      try{
      await axios.post('http://localhost:5024/wandermate_backened/hotel',NewHotels)
      await fetchHotels();
      }
      catch(error){
        console.log("error",error)
      }
     

    }

    const UpdateHotels = async(id,hotel)=>{
      try{
        await axios.put(`http://localhost:5024/wandermate_backened/hotel/${id}`,hotel)
        await fetchHotels();
        }
        catch(error){
          console.log("error",error)
        }
    }


    useEffect(()=>{fetchHotels()}, []);
       
      const HandleAddHotel = () => {
      setShowForm(true);
      setEditMode(false);
       };

 
      const HandleCancelHotel = () => {
          
          setShowForm(false);
        };
        
      const handleSaveHotel =async (e) => {
          e.preventDefault();
        let updateHotels;
    
        if(editMode)
        {
        UpdateHotels(currentHotelIndex,NewHotels);
        fetchHotels();
       
        console.log ("not here");
        }  else {
          await SaveHotelsToAPI(NewHotels);
          updateHotels = [...hotels]
          console.log ("error here");
        }
        console.log (updateHotels)
       
       
        setShowForm(false);
        setNewHotels({
         
          
          name: "",
          price: 0,
          img: [],
          rating: 0,
          description: "",
          freeCancellation: false,
          reserveNow: false,
        });
      };
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewHotels((prevState) => ({
          ...prevState,
          [name]: type === "checkbox" ? checked : value,
        }));
      }
    
      const HandleEditMode=(id)=>{
        setShowForm(true);

        setCurrentHotelIndex(id);
        hotels.map(hotel=>{
          if(id == hotel.id)
            setNewHotels(hotel)
        })
       
        setEditMode(true);
      };
    
      const HandleDeleteHotels=async(id)=>{
    
      try{
        await axios.delete(`http://localhost:5024/wandermate_backened/hotel/${id}`)
      fetchHotels();
      }
      catch(error){
        console.log("error while deleting hotel",error)
      }
    
        // const updateHotels =[...hotels];
        // updateHotels.splice(index,1);
        // setHotels(updateHotels);
        // SaveHotelsToAPI(updateHotels);
      };

   
    
      
     

    




    return(
        <>
        <button
        className="bg-blue-700 text-white ml-6 mt-3 px-6 py-2 rounded-md mr-3 border-2 border-white"
        onClick={HandleAddHotel}
      >
       
        Add New
      </button>
      

      <table
        className="border-4 bg-white border-separate border-slate-100 w-auto ml-6"
        style={{ tableLayout: "fixed" }}
      >
        <thead>
          <tr className="bg-sky-500">
            
            <th className="text-white py-3 px-2">Hotel Name</th>
            <th className="text-white py-3 px-2">Price</th>
            <th className="text-white py-3 px-2">Rating</th>
            <th className="text-white py-3 px-2">Description</th>

            <th className="text-white py-3 px-2">Image</th>
            <th className="text-white py-3 px-2">Free Cancellation</th>
            <th className="text-white py-3 px-2">ReserveNow</th>
            <th className="text-white py-3 px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hoteldash, index) => (
            <tr key={hoteldash.id} className="bg-sky-300 h-16">
              <td className="px-2">{hoteldash.name}</td>
              <td className="px-2">{hoteldash.price}</td>
              <td className="px-2">{hoteldash.rating}</td>
              <td className="px-2">{hoteldash.description}
              </td>
              <td className="px-2">{hoteldash.img}</td>
              <td className="px-2">
                {hoteldash.freeCancellation ? "True" : "False"}
              </td>
              <td className="px-2">
                {hoteldash.reserveNow ? "True" : "False"}
              </td>
              <td className="px-2">
                <button
                  className="bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
                  onClick={()=>{
                  HandleEditMode(hoteldash.id)
                  }}
                >
                
                  Edit
                </button>
                <button className="bg-cyan-700 text-white px-4 py-2 rounded-md border-2 border-white"
                onClick={()=> 
                HandleDeleteHotels(hoteldash.id)}>

                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <div className="w-[60%] bg-gray-400 px-3 py-5  mt-14 ml-6">
          <form className="w-full">
        

            <label>Name</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="name"
              onChange={handleChange}
              value={NewHotels.name}
            ></input>
            <br />

            <label>Price</label>
            <br />
            <input
              className="w-full"
              type="number"
              name="price"
              onChange={handleChange}
              value={NewHotels.price}
            ></input>
            <br />

            {/* <label>Img URL</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="img"
              onChange={handleChange}
              value={NewHotels.img}
            ></input>
            <br /> */}

            <label>Rating</label>
            <br />
            <input
              className="w-full"
              type="number"
              name="rating"
              onChange={handleChange}
              value={NewHotels.rating}
            ></input>
            <br />

            <label>Description</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="description"
              onChange={handleChange}
              value={NewHotels.description}
            ></input>
            <br />

            <label className="">FreeCancellation </label>
            <br />
            <input
              className="ml-3"
              type="checkbox"
              name="freeCancellation"
              onChange={handleChange}
              checked={NewHotels.freeCancellation}
            ></input>
            <br />

            <label className="">Reserve NOW </label>
            <br />
            <input
              className="ml-3"
              type="checkbox"
              name="reserveNow"
              onChange={handleChange}
              checked={NewHotels.reserveNow}
            ></input>
            <br />

            <button
              className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
              onClick={handleSaveHotel}
            >
             {editMode ? "Update" : "Save"}
            </button>
            <button
              className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
              type="button"
              onClick={HandleCancelHotel}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
     
        



        </>
    );
   
}
export default HotelsDash;

// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// const HotelsDash = () => {
  // const [hotels, setHotels] = useState([]);
  // const [showForm, setShowForm] = useState(false);
  // const [editMode, setEditMode] = useState(false);
  // const [currentHotelIndex, setCurrentHotelIndex] = useState(null);
  // const [NewHotels, setNewHotels] = useState({
   
  //   name: "",
  //   price: "",
  //   img: [],
  //   rating: "",
  //   desc: "",
  //   freeCancellation: false,
  //   reserveNow: false,
  // });
  
// useEffect(()=>{

// })

//   const loadHotlsFromLocalStorage = () => {
//     const storedHotels = localStorage.getItem("hotels");
//     if (storedHotels) {
//       setHotels(JSON.parse(storedHotels)); // Parse and set hotels from local storage
//     }

 
//   };

//   // functin to save hotels  to local storage
//   const saveHotelsToLocalStorage = (hotels) => {
//     localStorage.setItem("hotels", JSON.stringify(hotels));
//   };

//   useEffect(() => {
//     // fetch hotels from local storage
//     loadHotlsFromLocalStorage();
//   }, []);

  // // Function to show the form by making it true which was false at initial
  // const HandleAddHotel = () => {
  //   setShowForm(true);
  //   setEditMode(false);
  // };

  // // Function to hide the form by passing false
  // const HandleCancelHotel = () => {
    
  //   setShowForm(false);
  // };


  // const handleSaveHotel = () => {

  //   let updateHotels;

  //   if(editMode)
  //   {
  //     updateHotels = hotels.map((hotel,index)=>
  //       index === currentHotelIndex ? NewHotels : hotel

  //   )
    
      
  //   }  else {
  //     updateHotels = [...hotels,NewHotels]
  //   }
  //   console.log (updateHotels)
  //   setHotels(updateHotels);
  //   saveHotelsToLocalStorage(updateHotels);
  //   setShowForm(false);
  //   setNewHotels({
     
  //     name: "",
  //     price: "",
  //     img: "",
  //     rating: "",
  //     desc: "",
  //     freeCancellation: false,
  //     reserveNow: false,
  //   });
  // };

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setNewHotels((prevState) => ({
  //     ...prevState,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  // const HandleEditMode=(index)=>{
  //   setCurrentHotelIndex(index);
  //   setNewHotels(hotels[index]);
  //   setShowForm(true);
  //   setEditMode(true);
  // };

  // const HandleDeleteHotels=(index)=>{
  //   const updateHotels =[...hotels];
  //   updateHotels.splice(index,1);
  //   setHotels(updateHotels);
  //   saveHotelsToLocalStorage(updateHotels);



//   };

//   return (
//     <>
      // <button
      //   className="bg-blue-700 text-white ml-6 mt-3 px-6 py-2 rounded-md mr-3 border-2 border-white"
      //   onClick={HandleAddHotel}
      // >
       
      //   Add New
      // </button>

      // <table
      //   className="border-4 bg-white border-separate border-slate-100 w-auto ml-6"
      //   style={{ tableLayout: "fixed" }}
      // >
      //   <thead>
      //     <tr className="bg-sky-500">
            
      //       <th className="text-white py-3 px-2">Hotel Name</th>
      //       <th className="text-white py-3 px-2">Price</th>
      //       <th className="text-white py-3 px-2">Rating</th>
      //       <th className="text-white py-3 px-2">Description</th>

      //       <th className="text-white py-3 px-2">Image</th>
      //       <th className="text-white py-3 px-2">Free Cancellation</th>
      //       <th className="text-white py-3 px-2">ReserveNow</th>
      //       <th className="text-white py-3 px-2">Actions</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {hotels.map((hoteldash, index) => (
      //       <tr key={index} className="bg-sky-300 h-16">
      //         <td className="px-2">{hoteldash.name}</td>
      //         <td className="px-2">{hoteldash.price}</td>
      //         <td className="px-2">{hoteldash.rating}</td>
      //         <td className="px-2">{hoteldash.desc.slice(0, 50)}...</td>
      //         <td className="px-2">{hoteldash.img}</td>
      //         <td className="px-2">
      //           {hoteldash.freeCancellation ? "True" : "False"}
      //         </td>
      //         <td className="px-2">
      //           {hoteldash.reserveNow ? "True" : "False"}
      //         </td>
      //         <td className="px-2">
      //           <button
      //             className="bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
      //             onClick={()=>{
      //             HandleEditMode(index)
      //             }}
      //           >
                
      //             Edit
      //           </button>
      //           <button className="bg-cyan-700 text-white px-4 py-2 rounded-md border-2 border-white"
      //           onClick={()=> 
      //           HandleDeleteHotels(index)}>

      //             Delete
      //           </button>
      //         </td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
      // {showForm && (
      //   <div className="w-[60%] bg-gray-400 px-3 py-5  mt-14 ml-6">
      //     <form className="w-full">
        

      //       <label>Name</label>
      //       <br />
      //       <input
      //         className="w-full"
      //         type="text"
      //         name="name"
      //         onChange={handleChange}
      //         value={NewHotels.name}
      //       ></input>
      //       <br />

      //       <label>Price</label>
      //       <br />
      //       <input
      //         className="w-full"
      //         type="number"
      //         name="price"
      //         onChange={handleChange}
      //         value={NewHotels.price}
      //       ></input>
      //       <br />

      //       <label>Img URL</label>
      //       <br />
      //       <input
      //         className="w-full"
      //         type="text"
      //         name="img"
      //         onChange={handleChange}
      //         value={NewHotels.img}
      //       ></input>
      //       <br />

      //       <label>Rating</label>
      //       <br />
      //       <input
      //         className="w-full"
      //         type="number"
      //         name="rating"
      //         onChange={handleChange}
      //         value={NewHotels.rating}
      //       ></input>
      //       <br />

      //       <label>Description</label>
      //       <br />
      //       <input
      //         className="w-full"
      //         type="text"
      //         name="desc"
      //         onChange={handleChange}
      //         value={NewHotels.desc}
      //       ></input>
      //       <br />

      //       <label className="">FreeCancellation </label>
      //       <br />
      //       <input
      //         className="ml-3"
      //         type="checkbox"
      //         name="freeCancellation"
      //         onChange={handleChange}
      //         checked={NewHotels.freeCancellation}
      //       ></input>
      //       <br />

      //       <label className="">Reserve NOW </label>
      //       <br />
      //       <input
      //         className="ml-3"
      //         type="checkbox"
      //         name="reserveNow"
      //         onChange={handleChange}
      //         checked={NewHotels.reserveNow}
      //       ></input>
      //       <br />

      //       <button
      //         className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
      //         onClick={handleSaveHotel}
      //       >
      //         {editMode ? "Update" : "Save"}
      //       </button>
      //       <button
      //         className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
      //         type="button"
      //         onClick={HandleCancelHotel}
      //       >
      //         Cancel
      //       </button>
      //     </form>
      //   </div>
      // )}
//     </>
//   );
// };

// export default HotelsDash;
