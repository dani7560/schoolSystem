import React from 'react'
import { BiSolidReport } from 'react-icons/bi'
import { BsListUl } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { MdPayments } from 'react-icons/md'
import { PiReceipt } from 'react-icons/pi'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const DashBoardNav = () => {
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
  return (<>
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

</> 
  )
}
export default DashBoardNav

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