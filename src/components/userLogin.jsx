import '../styles/userLogin.css'
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
    let navigate=useNavigate()
    let userLogin=()=>{
        navigate('/user/')
    }
    return (
        <div className="userLogin">
           <h1>Login as User</h1>
        <div className="formcontainercard">
               
            <div className="form_input">
                <form  onSubmit={userLogin}>
                  <div className="email">
                     <input type="email" placeholder="email address" required />
                   
                  </div>
                  <div className="password">
                    <input type="password" placeholder="enter password" required/>
                  </div>
                  <button>Login</button>
                </form>
            </div>
        </div>
    </div>
      );
}
 
export default UserLogin;