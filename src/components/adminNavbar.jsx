import '../styles/adminNavbar.css'
import { Link } from "react-router-dom";
const AdminNavbar = () => {
    return (
        <div className="adminportal">
            <div className="navbar">
            <div className="logo">
                <img width="100" height="80" src="/images/admin.jpg" alt="" />
            </div>
            <div className="nav_links">
                  <ul>
                    <li><Link className='link' to="/admin/">Dashboard</Link></li>
                    <li><Link className='link' to="/admin/add-book">AddBook</Link></li>
                    <li><Link className='link' to="/admin/add-user">AddUser</Link></li>
                    <li><Link className='link' to="/admin/book-list">BookList</Link></li>
                    <li><Link className='link' to="/admin/user-list">UserList</Link></li>
                    <li> <Link className='link' to="/">Logout</Link></li>
                  </ul>
            </div>
            </div>

          </div>
      );
}
 
export default AdminNavbar;