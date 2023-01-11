import {Link} from 'react-router-dom'
const UserNavbar = () => {
    return ( 
        <div className="userportal">
        <div className="navbar">
        <div className="logo">
            <img width="100" height="80" src="/images/user.jpg" alt="" />
        </div>
        <div className="nav_links">
              <ul>
                <li><Link className='link' to="/user/user-Dashboard">Dashboard</Link></li>
                <li><Link className='link' to="/user/book-list">BookList</Link></li>
                <li><Link className='link' to='/'>Logout</Link></li>
               
                
              </ul>
        </div>
        </div>

      </div>
     );
}
 
export default UserNavbar;