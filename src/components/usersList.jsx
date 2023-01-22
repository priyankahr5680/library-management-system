import { useEffect, useState } from "react";
import '../styles/userList.css'
const UserList = () => {
    let[user,setUser]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let responce =await fetch("http://localhost:2006/users")
            let data=await responce.json()
            setUser(data)
        }
        fetchData()
    },[user])
    let RemoveUser=(id,name)=>{
        fetch(`http://localhost:2006/users/${id}`,{
         method:'DELETE'
        })
            alert(`${name} will be deleted permanently`)
         }
    
    
    return (  
        <div className="userList">
            <h1>User List</h1>
            <div className="user card">
                {user.map(data=>(
                    <div className="user_details">
                       <h3>Name:{data.name}</h3>
                       <h4>Age:{data.age}</h4>
                       <h4>Email:{data.email}</h4>
                       <h4>PhNo:{data.phoneNumber}</h4>
                       <button onClick={()=>RemoveUser(data.id,data.name)}>Remove</button>
                    </div>
                ))}

            </div>

        </div>
    );
}
 
export default UserList;