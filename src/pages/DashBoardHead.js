import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const DashBoardHead = () => {
  return (
    <div className='dashboard'>
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
     
     
    
    </div>
  )
}

export default DashBoardHead

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