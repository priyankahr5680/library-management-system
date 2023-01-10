import '../styles/adminLogin.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin=()=>{
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()
    let adminLogin=(e)=>{
          e.preventDefault();
          let data={email,password} //data from input
          //admin validation
          if(email=="admin@gmail.com"&& password==1234){
            navigate('/admin/')
          }
          else{
            alert(`invalid credentials`)
          }
          
    }
    return(
    <div className="adminLogin">
         <h1>Login as Admin</h1>
        <div className="form container card">
             
           
            <div className="form_input">
                <form  onSubmit={adminLogin}>
                  <div className="email">
                     <input type="email" placeholder="email address" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div className="password">
                    <input type="password" placeholder="enter password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                  </div>
                  <button>Login</button>
                </form>
            </div>
        </div>
    </div>
    )
}
export default AdminLogin;