import React, { useRef } from 'react'

const Scroll = () => {
    const home=useRef(null);
    const dashboard=useRef(null);
    const gallery=useRef(null);
    const about=useRef(null);
    const contact=useRef(null);
    const scrollToSection=(elementRef)=>{
        window.scrollTo({top:elementRef.current.offsetTop,behavior:'smooth'})
    }
  return (
    <div>

    </div>
  )
}

export default Scroll