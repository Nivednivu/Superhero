import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Grievance from './pages/Grievance/Grievance'
import User from './pages/User/User'
import Admin from './pages/Admin/Admin'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <AnimatePresence>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/grievance' element={<Grievance/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    <Footer/>
    </AnimatePresence>
  )
}

export default App
