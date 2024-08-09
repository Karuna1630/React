import  {React, useState, useEffect } from "react"; 

const Users=()=>{
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const[editMode,setEditMode] =useState(false);

  const [NewUsers, setNewUsers] = useState({
    id: "",
    name: "",
    address: "",
    img:"",
   
  });
      const loadUsersToLocalStorage=()=>{
        const storedUsers=localStorage.getItem('users');
        if(storedUsers){
          setUsers(JSON.parse(storedUsers));
        }
      };

      const saveUsersToLocalStorage = (users) => {
        localStorage.setItem('users', JSON.stringify(users));
      };

      useEffect(()=>{
        loadUsersToLocalStorage();
      },[])

      const HandleAddUsers=()=>{
        setShowForm(true);
      };

      const HandleCancelUsers=()=>{
        setShowForm(false);
      };

      const HandleSaveUsers=()=>{
        const updateUsers =[...users,NewUsers];
        setUsers(updateUsers);
        saveUsersToLocalStorage(updateUsers);
        setShowForm(false);
        NewUsers({
          id: "",
          name: "",
          address: "",
          img:"",

        });
      };

      const HandleChange = (e) => {
        const { name, value,   } = e.target;
        setNewUsers((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    return(
        <>
       <button
        className="bg-blue-700 text-white ml-6 mt-3 px-6 py-2 rounded-md mr-3 border-2 border-white"
      onClick={HandleAddUsers}

      >
        Add New
      </button>
         <table className="border-4 bg-white border-separate border-slate-100 w-[90%] mx-auto">
        <thead>
          <tr className="bg-sky-500">
            <th className="text-white w-1/5 py-3">ID</th>
            <th className="text-white w-1/5 py-3"> Name</th>
            <th className="text-white w-1/5 py-3">Address</th>
            <th className="text-white w-1/5 py-3">Image</th>
            <th className="text-white w-1/5 py-3">Actions</th>
          </tr>
          </thead>
          <tbody>
          {users.map((users,index) => (
            <tr key={index} className="bg-sky-300 h-16">
              <td className="w-1/5 px-2">{users.id}</td>
              <td className="w-1/5 px-2">{users.name}</td>
              <td className="w-1/5 px-2">{users.address}</td>
              <td className="w-1/5 px-2">{users.img}</td>
              
              <td className="w-1/5 px-2">
                <button
                  className="bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
                 
                >
                  Edit
                </button>
                <button
                  className="bg-cyan-700 text-white px-4 py-2 rounded-md border-2 border-white"
                 
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
              value={NewUsers.id}
              onChange={HandleChange}

            ></input>
            <br />

            <label>Name</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="name"
             value={NewUsers.name}
             onChange={HandleChange}
            
            ></input>
            <br />

            <label>Address</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="address"
              value={NewUsers.address}
              onChange={HandleChange}
             
            ></input>
            <br />

            <label>Img URL</label>
            <br />
            <input
              className="w-full"
              type="text"
              name="img"
              value={NewUsers.img}
              onChange={HandleChange}
             
            
            ></input>
            <br />

           

            <button
              className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
              onClick={HandleSaveUsers}
            >
              Save
            </button>
            <button
              className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-md mr-3 border-2 border-white"
              onClick={HandleCancelUsers}
              
            >
              Cancel
            </button>
          </form>
        </div>
        )}
        </>
    )
}
export default Users;