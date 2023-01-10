import '../styles/landingPage.css' 
import { Link } from "react-router-dom"

const LandingPage=()=>{
    return(
        
         <div  className="landingpage"> 
             <div className="selectLoginType">
                   <h1>Library Management System</h1>
                <div className='adimiuser'>
                <div className='admin'>
                    <img  width="100" height="90" src="images/admin1.jpg" alt="" />
                    <br /><br />
                <button style={{border:"2px solid red"}}> <Link className='admin1' to='/admin-login'>Admin Login</Link></button>

                </div>
                <div className='user'>
                    <img width="100" height="90" src="images/user.jpg" alt="" />
                    <br /><br />
                <button style={{border:"2px solid blue"}}><Link className='user1' to='/user-login' >User Login</Link></button>
                </div>
                </div>
             </div>
             </div>
          
       
    )
}
export default LandingPage