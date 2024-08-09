import { React, useEffect, useState } from "react";


const TravelPackagesDash=()=>{
    const [travelPackages, setTravelPackages] = useState([]);
    const [showForm, setShowForm] =useState(false);
    const [editMode,setEditMode] = useState(false);
    const [currentTravelPackagesIndex, setCurrentTravelPackagesIndex] = useState(null);
    const [newTravelPackages, setNewTravelPackages] =useState({
      id: "",
      name: "",
      price: "",
      img: "",
      desc: "",


    })

    const loadTravelPackagesFromLocalStorage=()=>{
      const storedTravelPackages = localStorage.getItem('travelpackages');
       if(storedTravelPackages){
        setTravelPackages(JSON.parse(storedTravelPackages));
       }
    };
    const saveTravelPackagesToLocalStorage=(travelPackages)=>{
      localStorage.setItem('travelpackages', JSON.stringify(travelPackages));
    }
    
    useEffect(()=>{
      loadTravelPackagesFromLocalStorage();
    },[])




    // useEffect(() => {
    //   const fetchTravelPackages = async () => {
    //     try {
    //       const response = await fetch(`http://localhost:3000/travelPackages`);
    //       if (!response.ok) {
    //         throw new Error("Network connection is not found");
    //       }
    //       const data = await response.json();
    //       console.log(data);
    //       setTravelPackages(data);
    //     } catch (error) {
    //       console.log("errorrrrrrrrrrrrrrrrrrr");
    //     }
    //   };
    //   fetchTravelPackages();
    // }, []);
    // const handleEdit = (id) => {
    //     console.log(`Edit clicked for hotel ID: ${id}`);
    //   };
    
    //   const handleDelete = (id) => {
    //     console.log(`Delete clicked for hotel ID: ${id}`);
    //   };
    const HandleAddTravelPackages=()=>{
        setShowForm(true);
    }
    const HandleCancle=()=>{
      setShowForm(false);
    }

    const HandleChange=(e)=>{
        const{name,value} = e.target;
        setNewTravelPackages((prevState)=>({
            ...prevState,
            [name]:value,
        }));
    };

    const handleSaveTravelPackages = () => {
      let updateTravelPackages;
      if(editMode)
      {
       updateTravelPackages=travelPackages.map((travelpackage,index)=>
         index === currentTravelPackagesIndex ? newTravelPackages: travelpackage)
 
     }else
       {
           updateTravelPackages=[...travelPackages,newTravelPackages]
       }
 
 
    
       setTravelPackages(updateTravelPackages);
       saveTravelPackagesToLocalStorage(updateTravelPackages);
       setShowForm(false);
       setNewTravelPackages({
         id: "",
          title: "",
         weather: "",
         img: "",
         desc: "",
       
       });
     };
 
 
     const HandleDeleteTravelPackages=(index)=>{
       const updateTravelPackages=[...travelPackages];
       updateTravelPackages.splice(index,1);
       setTravelPackages(updateTravelPackages);
       saveTravelPackagesToLocalStorage(updateTravelPackages);
 
     }
      
    const HandleEditMode=(index)=>{
      setCurrentTravelPackagesIndex(index);
      setNewTravelPackages(travelPackages[index]);
      setShowForm(true);
      setEditMode(true);
  };

    return(
        <>
         <button
        className="bg-blue-700 text-white ml-6 mt-3 px-6 py-2 rounded-md mr-3 border-2 border-white"
       onClick={HandleAddTravelPackages}
      >
        Add New
      </button>
         <table className="border-4 bg-white border-separate border-slate-100 w-[90%] mx-auto">
        <thead>
          <tr className="bg-sky-500">
            <th className="text-white w-1/5 py-3">ID</th>
            <th className="text-white w-1/5 py-3"> Name</th>
            <th className="text-white w-1/5 py-3">Price</th>
            <th className="text-white w-1/5 py-3">Image</th>
            <th className="text-white w-1/5 py-3">Description</th>
            <th className="text-white w-1/5 py-3">Actions</th>
          </tr>
          </thead>
          <tbody>
          {travelPackages.map((travelpackagesdash,index) => (
            <tr key={index} className="bg-sky-300 h-16">
              <td className="w-1/5 px-2">{travelpackagesdash.id}</td>
              <td className="w-1/5 px-2">{travelpackagesdash.name}</td>
              <td className="w-1/5 px-2">{travelpackagesdash.price}</td>
              <td className="w-1/5 px-2">{travelpackagesdash.img}</td>
              <td className="w-1/5 px-2">{travelpackagesdash.desc.slice(0,50)}...</td>
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
                  HandleDeleteTravelPackages(index)
                 }
                 }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm &&(
      <div className="w-[60%] bg-gray-400 px-3 py-5  mt-14 ml-6">
          <form className="w-full" >
            <label>ID</label>
            <br />
            <input
              className="w-full"
              type="number"
              name="id"
              value={newTravelPackages.id}
              onChange={HandleChange}

            ></input>
            <br />

            <label>Name</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="name"
             value={newTravelPackages.name}
              onChange={HandleChange}
            ></input>
            <br />

            <label>Price</label>
            <br />
            <input
              className="w-full"
              type="number"
              name="price"
              value={newTravelPackages.price}
              onChange={HandleChange}
            ></input>
            <br />

            <label>Img URL</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="img"
              value={newTravelPackages.img}
              onChange={HandleChange}
            
            ></input>
            <br />

            <label>Description</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="desc"
              value={newTravelPackages.desc}
              onChange={HandleChange}
            
            ></input>
            <br />

            <button
              className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
              onClick={handleSaveTravelPackages}
            >
              {editMode ? 'Update':'Save'}
            </button>
            <button
              className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
              onClick={HandleCancle}
              
            >
              Cancel
            </button>
          </form>
        </div>
        )}
        </>
    )
}
export default TravelPackagesDash;