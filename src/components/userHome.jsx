import {Routes,Route} from 'react-router-dom'
import BookList from './bookList';
import UserDashboard from './userDashboard';
import UserNavbar from './userNavbar';
import ReadBook from './readBook';
const UserHome = () => {
    return (
        <div className="userPortal">
            <UserNavbar/>
          <Routes>
           <Route path='/user-Dashboard' element={<UserDashboard/>}/>
           <Route path='/book-list' element={<BookList/>}/>
           <Route path='/book-list/:id'element={<ReadBook/>}/>
          </Routes>
        </div>
      );
}
 
export default UserHome;