import log from './images/log.svg'
import React from 'react'
import {FaPhone} from 'react-icons/fa'
import {TbMessage} from 'react-icons/tb'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (<>
  <div className='container'>
    <nav className="nav">
      <div className='colorShape Shape'>
    
      </div>
    
    <ul>
    <CustomLink to="/">HOME</CustomLink>
      <CustomLink to="/dashboard">DASHBOARD</CustomLink>
      <CustomLink to="/gallery">GALLERY</CustomLink>
      <CustomLink to="/about">ABOUT US</CustomLink>
      <CustomLink to="/contact">CONTACT</CustomLink>
      <div className='contactWay'>
      <CustomLink to="/contact" className="FaPhone">{<FaPhone/>}</CustomLink>
      <CustomLink to="/contact" className="TbMessage">{<TbMessage/>}</CustomLink>

      </div>
    </ul>
  </nav>
  </div>
  </>
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