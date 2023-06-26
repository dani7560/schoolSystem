import Navbar from "./Navbar";
import './App.css'
import React, { useRef } from 'react'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import  About from "./pages/About"
import DashBoard from './pages/DashBoard'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'


const App = () => {
//  const navRef=useRef();
//  const showEvent=()=>{
//   navRef.current.classlist.toggle("");
//  }
  
  return ( <>
  
    
    
      <Navbar className="navBar"/>
      {/* <img src= {log} alt=""className="logImage"/> */}
    <div>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
   </div>
    
      <div className="container">
      <div className="studtImage">
        <img src={require('./images/download.png')} alt=""/>
      </div>
        <div className="board">
        <div className="john">st.johnbaptist delasalle catholic school</div>
         <div className="dashboardaccess">
          <h4>Are you a student ,parent or teacher Signin to access the dashboard
          <button className="signin">
          SIgn IN{}
        </button>
        </h4>
        </div>
        </div>
      </div>
      
      <div className="containerv">
      <div className="grid mission"><h1 className="hmission">mission</h1>
        To provide a human and a christian education to less fortunate young Ethiopia so they can become respectful and loving to all humanity and to their country,according to the ministry which the Catholic  Church entrusted to it.</div>
      <div className="grid vission"><h1 className="hvision"> Vision</h1>
        To integrate children who come from different races and denomination,who are economically poor and artisans ,and who are in poor health.</div> 
      </div> 

    </div>
  <About/>
  
  
  </>
     
  )
}

export default App