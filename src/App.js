import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import DashBoard from './pages/DashBoard';
import UserName from './dashBoard/UserName';
import Student from './dashBoard/Student';
import Receipt from './dashBoard/Receipt';
import Report from './dashBoard/Report';
import Payment from './dashBoard/Payement';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/dashboard/*" >
          <Route path="username" element={<UserName />} />
          <Route path="student" element={<Student />} />
          <Route path="receipt" element={<Receipt />} />
          <Route path="report" element={<Report />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
