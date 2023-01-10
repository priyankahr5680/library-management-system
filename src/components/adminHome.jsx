import AdminNavbar from "./adminNavbar";
import AdminDashboard from "./adminDashBoard";
import {Routes,Route} from 'react-router-dom'
import BookList from "./bookList";
import UserList from "./usersList";
import ReadBook from "./readBook";
import AddUser from "./addUser"; 
import AddBook from "./addBook";

const AdminHome = () => {
    return ( 
        <div className="adminnav">
               <AdminNavbar/>
               <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path='/book-list' element={<BookList/>}/>
                <Route path='/user-list' element={<UserList/>}/>
                <Route path='book-list/:id'element={<ReadBook/>}/>
                <Route path='/add-user' element={<AddUser/>}/>
                <Route path='/add-book' element={<AddBook/>}/>
               </Routes>
        </div>
     );
}
 
export default AdminHome;