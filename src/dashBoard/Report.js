import React from 'react'
import './report.css'
import DashBoardNav from '../pages/DashBoardNav'
import DashBoardHead from '../pages/DashBoardHead'
const Report = () => {
  return (
    <>
    <div className='dashboard'>
      
    
  <div className='dashboardlay'>
  <div><DashBoardNav/></div>
  <div>
  <div className='dashboadhead'><DashBoardHead/></div>
  
    <div className='username'><div>UserName</div>
    </div>
    </div>
  </div>
    </div>
      
      </>
  )
}

export default Report