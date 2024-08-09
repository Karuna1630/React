import {  React, useState, useEffect } from "react";

const DestinationDash = () => {
  const [destinations, setDestination] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(null);
  const [NewDestination, setNewDestination] = useState({
    id: "",
    title: "",
    weather: "",
    img: "",
    desc: "",

  });

   // function to load hotels from local storage
   const loadDestinationFromLocalStorage = () => {
    const storedDestination = localStorage.getItem('destination');
    if (storedDestination) {
      setDestination(JSON.parse(storedDestination)); // Parse and set hotels from local storage
    }
  };

   // functin to save hotels  to local storage
   const saveDestinationToLocalStorage = (destination) => {
    localStorage.setItem('destination', JSON.stringify(destination));
  };

  useEffect(() => {
    // fetch hotels from local storage
    loadDestinationFromLocalStorage();
  }, []);


    // Function to show the form by making it true which was false at initial
    const HandleAddDestination = () => {
      setShowForm(true);
    };

     // Function to hide the form by passing false
     const HandleCancelDestination = () => {
     setShowForm(false);
     };

     const handleSaveDestination = () => {
     let updateDestination;
     if(editMode)
     {
      updateDestination=destinations.map((destination,index)=>
        index === currentDestinationIndex ? NewDestination: destination)

    }else
      {
          updateDestination=[...destinations,NewDestination]
      }


   
      setDestination(updateDestination);
      saveDestinationToLocalStorage(updateDestination);
      setShowForm(false);
      setNewDestination({
        id: "",
         title: "",
        weather: "",
        img: "",
        desc: "",
      
      });
    };


    const HandleDeleteDestination=(index)=>{
      const updateDestination=[...destinations];
      updateDestination.splice(index,1);
      setDestination(updateDestination);
      saveDestinationToLocalStorage(updateDestination);

    }

    const HandleEditMode=(index)=>{
        setCurrentDestinationIndex(index);
        setNewDestination(destinations[index]);
        setShowForm(true);
        setEditMode(true);
    };
  
    const handleChange = (e) => {
      const { name, value,   } = e.target;
      setNewDestination((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  return (
    <>
     <button
        className="bg-blue-700 text-white ml-6 mt-3 px-6 py-2 rounded-md mr-3 border-2 border-white"
        onClick={HandleAddDestination}
      >
        Add New
      </button>
      <table className="border-4 bg-white border-separate border-slate-100 w-[90%] mx-auto">
        <thead>
          <tr className="bg-sky-500">
            <th className="text-white w-1/5 py-3">ID</th>
            <th className="text-white w-1/5 py-3">Title</th>
            <th className="text-white w-1/5 py-3">Weather</th>
            <th className="text-white w-1/5 py-3">Description</th>
            <th className="text-white w-1/5 py-3">Image</th>

            <th className="text-white w-1/5 py-3">Actions</th>
          </tr>
          </thead>
          <tbody>
          {destinations.map((destinationdash,index) => (
            <tr key={index} className="bg-sky-300 h-16">
              <td className="w-1/5 px-2">{destinationdash.id}</td>
              <td className="w-1/5 px-2">{destinationdash.title}</td>
              <td className="w-1/5 px-2">{destinationdash.weather}</td>
              <td className="w-1/5 px-2">{destinationdash.desc.slice(0,50)}...</td>
              <td className="w-1/5 px-2">{destinationdash.img}</td>
              <td className="w-1/5 px-2">
                <button
                  className="bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
                 onClick={()=>{
                  HandleEditMode(index)
                 }}
                >
                  Edit
                </button>
                <button
                  className="bg-cyan-700 text-white px-4 py-2 rounded-md border-2 border-white"
                 onClick={()=>{
                  HandleDeleteDestination(index)
                 }}
                >
                  Delete
                </button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      {showForm && (
        <div className="w-[60%] bg-gray-400 px-3 py-5  mt-14 ml-6">
          <form className="w-full" >
            <label>ID</label>
            <br />
            <input
              className="w-full"
              type="number"
              name="id"
              onChange={handleChange}
              value={NewDestination.id}
            ></input>
            <br />

            <label>Title</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="title"
              onChange={handleChange}
              value={NewDestination.title}
            ></input>
            <br />

            <label>Weather</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="weather"
              onChange={handleChange}
              value={NewDestination.weather}
            ></input>
            <br />

            <label>Description</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="desc"
              onChange={handleChange}
              value={NewDestination.desc}
            ></input>
            <br />

            <label>Img URL</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="img"
              onChange={handleChange}
              value={NewDestination.img}
            ></input>
            <br />
            <button
              className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
             onClick={handleSaveDestination}
            >
         {editMode?'Update':'Save'}
            </button>
            <button
              className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
              
              onClick={HandleCancelDestination}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};



export default DestinationDash;
