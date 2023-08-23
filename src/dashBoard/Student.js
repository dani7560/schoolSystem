import React from 'react'
import DashBoardNav from '../pages/DashBoardNav'
import DashBoardHead from '../pages/DashBoardHead'

const Student = () => {
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

export default Student