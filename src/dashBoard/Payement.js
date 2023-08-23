import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCheck } from '@fortawesome/free-solid-svg-icons'
import './payement.css'

import { useState } from 'react'
import { Table } from 'react-bootstrap'
import DashBoardNav from '../pages/DashBoardNav'
import DashBoardHead from '../pages/DashBoardHead'


const Payement = () => {

  // const columns = [
  //   {
  //     key:'1',
  //     title: 'ID',
  //     dataIndex: 'id',
  //     sorter: {
  //       compare: (a, b) => a.chinese - b.chinese,
  //       multiple: 3,
  //     }
  //   },
  //   {
  //     key:'2',
  //     title: 'First Name',
  //     dataIndex: 'firstname',
  //     sorter: {
  //       compare: (a,b) => a.math -b.math, 
  //       multiple:2,
  //     },
  //   },
  //   {
  //     key:'3',
  //     title: 'Middle Name ',
  //     dataIndex: 'middlename',
  //     sorter: {
  //       compare: (a, b) => a.math - b.math,
  //       multiple: 2,
  //     },
  //   },
  //   {
  //     key:'4',
  //     title: 'Last Name',
  //     dataIndex: 'lastname',
  //     sorter: {
  //       compare: (a, b) => a.english - b.english,
  //       multiple: 1,
  //     },
  //   },
  //   {
  //     key:'5',
  //     title: 'Grade ',
  //     dataIndex: 'grade',
  //     sorter: {
  //       compare: (a, b) => a.english - b.english,
  //       multiple: 1,
  //     },
  //   },
  //   {
  //     key:'6',
  //     title: 'Sec. ',
  //     dataIndex: 'sec',
  //     sorter: {
  //       compare: (a, b) => a.english - b.english,
  //       multiple: 1,
  //     },
  //   },
  //   {
  //     key:'7',
  //     title: 'Sept ',
  //     dataIndex: 'sept',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
      
  //   },
  //   {
  //     key:'8',
  //     title: 'Oct ',
  //     dataIndex: 'oct',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
     
  //   },
  //   {
  //     key:'9',
  //     title: 'Nov ',
  //     dataIndex: 'nov',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
     
  //   },
  //   {
  //     key:'10',
  //     title: 'Dec ',
  //     dataIndex: 'dec',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
     
  //   },
  //   {
  //     key:'11',
  //     title: 'Jan ',
  //     dataIndex: 'jan',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
  //   },
  //   {
  //     key:'12',
  //     title: 'Feb ',
  //     dataIndex: 'feb',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
     
  //   },
  //   {
  //     key:'13',
  //     title: 'Mar ',
  //     dataIndex: 'mar',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
  //   },
  //   {
  //     key:'14',
  //     title: 'Apr ',
  //     dataIndex: 'apr',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
  //   },
  //   {
  //     key:'15',
  //     title: 'Jun ',
  //     dataIndex: 'jun',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
  //   },
  //   {
  //     key:'16',
  //     title: 'Jul ',
  //     dataIndex: 'jul',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
  //   },
  //   {
  //     key:'17',
  //     title: 'Aug ',
  //     dataIndex: 'aug',
  //     render: () => (
  //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //         <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
  //       </div>
  //     ),
  //   },
  // ];
  //   // eslint-disable-next-line no-unused-vars
  // const[dataSource, setDataSource] = useState([
  //   {
  //     id:'0001',
  //     firstname:'Abebe ',
  //     middlename:'Bekelle',
  //     lastname:'Chala',
  //     grade: 1,
  //     sec: 'A',
      
      
  //   },
    
  // ]);
  return (

<>
    <div className='dashboard'>
      
    
  <div className='dashboardlay'>
  <div><DashBoardNav/></div>
  <div>
  <div className='dashboadhead'><DashBoardHead/></div>
  
    <div className='username'><div>Payement</div>
    </div>
    </div>
  </div>
    </div>
      
      </>
    
  )
}

export default Payement