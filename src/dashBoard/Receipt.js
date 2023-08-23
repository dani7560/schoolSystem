import React from 'react'
import './receipt.css'
import DashBoardNav from '../pages/DashBoardNav'
import DashBoardHead from '../pages/DashBoardHead'
const Receipt = () => {
  return (
    <>
  <div className='dashboard'>
    
  
<div className='dashboardlay'>
<div><DashBoardNav/></div>
<div>
<div className='dashboadhead'><DashBoardHead/></div>

  <div className='username'><div>receipt</div>
  </div>
  </div>
</div>
  </div>
    
    </>
  )
}

export default Receipt