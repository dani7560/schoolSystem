
import React ,{useState} from 'react'
import './dashboard.css'
import { Link, useResolvedPath ,useMatch, Routes ,Route} from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { BsListUl } from 'react-icons/bs';
import { PiReceipt } from 'react-icons/pi';
import { BiSolidReport } from 'react-icons/bi';
import { MdPayments } from 'react-icons/md'
import UserName from '../dashBoard/UserName';
import Receipt from '../dashBoard/Receipt';
import Report from '../dashBoard/Report';
import Payement from '../dashBoard/Payement';
import Student from '../dashBoard/Student';

const DashBoard = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
const menuItem=[
  {
    path:"/dashboard/username",
    Icon:<FaUserCircle />,
    name:"UserName"
  
  },
  {
    path:"/dashboard/student",
    Icon:<BsListUl/>,
    name:"Student"
  
  },
  {
    path:"/dashboard/receipt",
    Icon:<PiReceipt/>,
    name:"Receipt"
  
  },
  {
    path:"/dashboard/report",
    Icon:<BiSolidReport/>,
    name:"Report"
   
   
  
  },
  {
    path:"/dashboard/payement",
    Icon:<MdPayments/>,
    name:"Payement"
   
    
  
  },

]


  return (
    <>
    <div className='dashboard'>
      <div className='Bar'>
      <div className='sideBar'>
    {
   menuItem.map((item, index)=>(
  
    <CustomLink to={item.path} key={index} className="link" activeclassName="active">
      
        <div className="icon">{item.Icon}</div>
        <div className="link_text">{item.name}</div>
      
    </CustomLink>
))
    }
  </div>

<div className='dashboardContent'>
<div className='mainBar'>
<div className='navBar'>
    <ul className='ulist'>
      <li className='navstudent'>
        <CustomLink to="/dashboard/student">Student</CustomLink></li>
      <li className='navreceipt'>
        <CustomLink to="/dashboard/receipts">Receipt</CustomLink>
      </li>
      <li className='navpayement'>
        <CustomLink to="/dashboard/payement">payements</CustomLink>
      </li>
      
      <li className='navreport'>
        <CustomLink to="/dashboard/report">Report</CustomLink>
      </li>
      <li className='navexport'>
        <CustomLink to="/dashboard/export">Export</CustomLink>
      </li>
      
    </ul>
  </div>
  <div>
    <select>
      <option>2011</option>
      <option>2012</option>
      <option>2013</option>
      <option>2014</option>
      <option>2015</option>
      <option>2016</option>
      <option>2017</option>
    </select>
  </div>
  </div>
  <div> <main>
 {children}
  </main></div>
 

</div>





      </div>

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

export default DashBoard




{/* <div id='dashboard' className='dashboard' >
<div className='Bar'>
  <div className='sideBar'>
    {
   menuItem.map((item, index)=>(
    <CustomLink to={item.path} key={index} className="link" activeclassName="active">
        <div className="icon">{item.icon}</div>
        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
    </CustomLink>
))
    }
  </div>
<div className=''>
<div className='mainBar'>
<div className='navBar'>
    <ul className='ulist'>
      <li className='navstudent'>
        <CustomLink to="/dashboard/student">Student</CustomLink></li>
      <li className='navreceipt'>
        <CustomLink to="/dashboard/receipts">Receipt</CustomLink>
      </li>
      <li className='navpayement'>
        <CustomLink to="/dashboard/payement">payements</CustomLink>
      </li>
      
      <li className='navreport'>
        <CustomLink to="/dashboard/report">Report</CustomLink>
      </li>
      <li className='navexport'>
        <CustomLink to="/dashboard/export">Export</CustomLink>
      </li>
      
    </ul>
  </div>
  <div>
    <select>
      <option>2011</option>
      <option>2012</option>
      <option>2013</option>
      <option>2014</option>
      <option>2015</option>
      <option>2016</option>
      <option>2017</option>
    </select>
  </div>
  </div>
  <div className='cildren'>
  <main>{children}</main>
  </div>
  </div>
  </div>
  

</div> */}