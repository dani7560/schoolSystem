import React from 'react'
import './userName.css';
import DashBoardHead from '../pages/DashBoardHead';
import DashBoard from '../pages/DashBoard';
import DashBoardNav from '../pages/DashBoardNav';

const UserName = () => {
  return (<>
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

export default UserName