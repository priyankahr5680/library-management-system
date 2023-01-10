import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    let navigate=useNavigate()
    let[name,setName]=useState("")
    let[age,setAge]=useState("")   
    let[email,setEmail]=useState("")
    let[phoneNumber,setPhoneNumber]=useState("")
     let handle=(e)=>{
          e.preventDefault();
        let data={name,age,email,phoneNumber}
        fetch("http://localhost:2006/users",{
            method:"post",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('user added successfully')
        navigate('/admin/user-list')
        
     }

    return ( 
        <div className="add-user">
            <form action="" onSubmit={handle}>
                <div className="addname">
                <input type="name" placeholder="enter name" value={name}  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="addage">
                <input type="number" min='1' placeholder="enter age" value={age}  onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="addemail">
                <input type="email" placeholder="enter email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="addname">
                <input type="tel" minLength='10' maxLength='10' placeholder="enter phoneNumber" value={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>
                </div>
                 <div className="addbutn">
                    <button >submit</button>
                    <button>Reset</button>

                 </div>
            </form>
        </div>
     );
}
 
export default AddUser;