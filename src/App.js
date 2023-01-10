
import './App.css';
import LandingPage from './components/landingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminHome from './components/adminHome';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/admin-login'element={<AdminLogin/>}/>
       <Route path='/user-login' element={<UserLogin/>}/>
       <Route path='/admin/*' element={<AdminHome/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
