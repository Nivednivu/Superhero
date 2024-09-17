import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
// import Navbar from './components/Navbar/Navbar'
import Grievance from './pages/Grievance/Grievance'
import User from './pages/User/User'
// import Admin from './pages/Admin/Admin'
import Footer from './components/Footer/Footer'
// import AdminList from './pages/AdminList/AdminList'
function App() {

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/grievance' element={<Grievance/>}/>
      <Route path='/ulogin' element={<User/>}/>
      <Route path='/user' element={<User insideRegister/>}/>

      {/* <Route path='/login' element={<Admin/>}/>
      <Route path='/admin' element={<Admin insideAdminRegister/>}/>

      <Route path='/list' element={<AdminList/>}/> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default App
