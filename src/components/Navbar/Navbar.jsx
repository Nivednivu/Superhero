import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IoIosCloseCircle } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [isOpen,setOpen]=useState(false)

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,    
        ease: [0.42, 0, 0.58, 1],  
        delay: 0.2      
      }        }
  };

  return (
    <>
      <div className='navbar'>
        <div className='logo'>
    <Link style={{textDecoration:'none'}} to={'/'}>
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className='motion'
    >
      Super <span>Hero</span>
    </motion.h1>
</Link>


        </div>
        <div className='nav-item'>
          <ul className={isOpen?"mobile":"nav-page"} onClick={()=>setOpen(false)}>
            <Link className='li' to={'/'}>   <li  >Home</li>  </Link>
            <Link className='li' to={'/about'}><li >About</li></Link>
            <Link className='li' to={'/grievance'}><li>Grievance</li></Link>
            <div className='navbar-sing'>
              <h2>Sing</h2>
              <ul className='nav-sing-dropdown'>
                <Link className='link' to={'/user'}> <li>user</li>     </Link>
                <hr />

                <Link className='link' to={'/admin'}> <li>admin</li>    </Link>

              </ul>
            </div>
          </ul>
<div className='mobile' onClick={()=>setOpen(!isOpen)}>{isOpen? <IoIosCloseCircle/>  :  <CiMenuBurger/>}</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
