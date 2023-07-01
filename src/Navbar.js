import React, { useState } from 'react'

import './navbar.css'
import { FaBars , FaTimes} from 'react-icons/fa'
import {TbMessage} from 'react-icons/tb'
import {FaPhone} from 'react-icons/fa'

const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>{
    setClick(!click);
  }

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
          <a href='/' onClick={closeMenu}>HOME</a>
        </li>
        <li className='nav-item'>
          <a href='#dashboard' onClick={closeMenu}>DASHBOARD</a>
        </li>
        <li className='nav-item'>
          <a href='#gallery' onClick={closeMenu}>GALLERY</a>
        </li>  
        <li className='nav-item'>
          <a href='#about' onClick={closeMenu}>ABOUT US</a>
        </li>
        <li className='nav-item'>
          <a href='#contact' onClick={closeMenu}>CONTACT</a>
        </li>
        
        <li className='nav-item'>
          <a href='/'><FaPhone/></a>
          <a href='/'><TbMessage/></a>
          
        </li>
      </ul>


      </nav>
    </div>
  )
}

export default Navbar







// import log from './images/log.svg'
// import React from 'react'
// import {FaPhone} from 'react-icons/fa'
// import {TbMessage} from 'react-icons/tb'
// import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import './Navbar.css'
// import 'tailwindcss/tailwind.css';
// import { useState } from 'react'


// const Navbar = () => {
//   const [color,setColor]=useState(false)
//   const onChangeColor=()=>{
//     if(window.scrollY>=80){
//       setColor(true)
//     }else{
//       setColor(false)
//     }
//     window.addEventListener('scroll',onChangeColor)
//   }
//   return (<>
  
//   <div className='container sticky top-0'>
//     <nav className={color ? 'header header-big':'header'}>
//       <div className='colorShape Shape'>
    
//       </div>
//     <div>
//     <ul className='ul'>
//     <CustomLink to="/">HOME</CustomLink>
//       <CustomLink to="/dashboard">DASHBOARD</CustomLink>
//       <CustomLink to="/gallery">GALLERY</CustomLink>
//       <CustomLink to="/about">ABOUT US</CustomLink>
//       <CustomLink to="/contact">CONTACT</CustomLink>
//       <div className='contactWay'>
//       <CustomLink to="/contact" className="FaPhone">{<FaPhone/>}</CustomLink>
//       <CustomLink to="/contact" className="TbMessage">{<TbMessage/>}</CustomLink>

//       </div>
//     </ul>
//     </div>
//   </nav>
//   </div>
//   </>
//   )
// }
// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }
// export default Navbar