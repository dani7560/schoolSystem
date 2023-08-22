import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './navbar.css'
import { FaBars , FaTimes} from 'react-icons/fa'
import {TbMessage} from 'react-icons/tb'
import {FaPhone} from 'react-icons/fa'



const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>{
    setClick(!click);
  }
  // const handleLinkClick = () => {
  //   window.open('/dashboard', '_blank');
  // };

  const [color,setColor]=useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90){
      setColor(true)
    }
    else{
      setColor(false)
    }
   
  }
  window.addEventListener('scroll' , changeColor)
  
  const closeMenu=()=>{
    setClick(false)
  }
  
  return (
    <div className={color? "header header-bg" : "header"}>
      <nav className='navBar'>
      <div className='logoImage'>
    <img src={require('./images/logo.png')} alt='logImage'/>
        </div>
      <div className='bars' onClick={handleClick}>{click ? (<FaTimes size={30} style={{ color: 'white'}}/>) : (<FaBars size={30} style={{ color: 'white'}}/>) }</div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className='nav-item'>
        <CustomLink to="/" onClick={closeMenu}>HOME</CustomLink>
        </li>
        <li className='nav-item'>
        <CustomLink to="/dashboard" onClick={closeMenu}><a>DASHBOARD</a></CustomLink>
        </li>
        <li className='nav-item'>
        <CustomLink to="/gallery" onClick={closeMenu}>GALLERY</CustomLink>
        </li>  
        <li className='nav-item'>
        <CustomLink to="/about" onClick={closeMenu}>ABOUT US</CustomLink>
        </li>
        <li className='nav-item'>
        <CustomLink to="/contact" onClick={closeMenu}>CONTACT</CustomLink>
        </li>
        
        <li className='nav-item'>
        <CustomLink to="/contact" onClick={closeMenu}><FaPhone/></CustomLink>
        <CustomLink to="/contact" onClick={closeMenu}><TbMessage/></CustomLink>
          
        </li>
      </ul>


      </nav>
    </div>
  )
}


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


export default Navbar