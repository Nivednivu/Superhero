import React from 'react'
import './Footer.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div>
              <Row className='rowll'>
            <Col>
            <h2>Hero</h2>
            <p > maxime nesciunt. Debitis a aspernatur quos, odit id deleniti.</p>
            </Col>
            <Col className='col'>
            <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/'}>About</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/login'}>login</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Dashboard</Link>
            </Col>
            <Col className='col'>
            <a style={{textDecoration:'none',color:'white'}}  href="">React</a>
            <a style={{textDecoration:'none',color:'white'}} href="">React Bootstrap</a>
            <a style={{textDecoration:'none',color:'white'}} href="">Bootswatch</a>
            <a style={{textDecoration:'none',color:'white'}} href="">Tailwind CSS</a>
            </Col>
            <Col className='col-icon'>
            <h3>Contact</h3>
            <input type="email" className='contact' placeholder='Enter'/>
            <button className='btn'>submit</button>
            <div className='icons'>
            <FaInstagram className='icons-fa'/>
            <CiLinkedin className='icons-fa'/>
            <FaFacebook className='icons-fa'/>
            <FaYoutube className='icons-fa'/>

            </div>

            </Col>
        </Row>

    </div>
  )
}

export default Footer
