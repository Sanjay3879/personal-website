import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'


function Navbar() {
  const [nava,setnav]=useState(false)

   function handleclick(){
    setnav(!nava)
  }
  
  return (
    <div className='navcon'>
      <h2>Portfo<span>lio.</span></h2>
      <input type="checkbox" name="" id="click" />
      <label htmlFor="click" className='menubtn'>
        <i className='fas fa-bars'></i>
      </label>
      <ul>
        <li onClick={handleclick}><Link to="home" smooth={true} duration={500} >
          Home        
          </Link></li>
        <li><Link  to="about" smooth={true}  duration={500}>
          About
        </Link></li>
        <li><Link  to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
        <li><Link  to="works" smooth={true} duration={500} offset={-50}>
          Works
        </Link></li>
        <li><Link  to="contact" smooth={true}  duration={500} >
          Contact Us
        </Link></li>
      </ul>
    </div>
  )
}

export default Navbar
