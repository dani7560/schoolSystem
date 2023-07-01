import Navbar from "./Navbar";
import './App.css'
import React, { useRef } from 'react'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import  About from "./pages/About"
import DashBoard from './pages/DashBoard'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import DisplayTextPage from "./DisplayTextPage";



const App = () => {
    // const home=useRef(null);
    // const dashboard=useRef(null);
    // const gallery=useRef(null);
    // const about=useRef(null);
    // const contact=useRef(null);
    // const scrollToSection=(elementRef)=>{
    //     window.scrollTo({top:elementRef.current.offsetTop,behavior:'smooth'})
    // }
  
  return ( <>
  <Navbar/>
  <Home/>
  <DashBoard/>
  <Gallery/>
  <About/>
  <Contact/>
  <DisplayTextPage/>
    
      
      {/* <img src= {log} alt=""className="logImage"/> */}
    
    {/* <div className="container">
      <Routes>
        <Route path="/" element={<Home />} ref=''/>
        <Route path="/dashboard" element={<DashBoard />} />
        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
   </div>
    <Home/>
    <DashBoard/>
  <Gallery/>
  <About/>
  <Contact/>
       */}
  
  
  
  </>
     
  )
}


export default App