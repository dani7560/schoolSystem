import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { FaBars , FaTimes} from 'react-icons/fa'
import {TbMessage} from 'react-icons/tb'
import {FaPhone} from 'react-icons/fa'

const Scroll = () => {
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
        <a href="/" onClick={closeMenu}>HOME</a>
        </li>
        <li className='nav-item'>
        <CustomLink to="/dashboard" onClick={closeMenu}>DASHBOARD</CustomLink>
        </li>
        <li className='nav-item'>
        <a href="#gallery" onClick={closeMenu}>GALLERY</a>
        </li>  
        <li className='nav-item'>
        <a href="#about" onClick={closeMenu}>ABOUT US</a>
        </li>
        <li className='nav-item'>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
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
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}


export default Scroll