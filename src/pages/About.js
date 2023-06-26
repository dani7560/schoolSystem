import React, { useState } from 'react'
import ToggleElements from '../toggle';
import './about.css'
import{AiFillClockCircle} from 'react-icons/ai'

const  About = () => {
 
  return (<>
    <div className='habout'> 
    <h1 className='h1about'>
      about our school
    </h1>
   <h3>The christian brothers founded st.John Baptist de La Salle Catholic School in Addis Ababa and the Oromo Region.
    </h3>
    <button className='hbutton'>
      READ MORE
    </button>
    </div>
  
    <div className='aboutevent'>
      <h1>Recent Event</h1>
    
    <div className='eventLayout'>
      <div className='grideImage'><img src={require('../images/download (3).jpg')} alt=''/></div>
        {/*  */}
  
      <div className='eventTime'>
        <div className='event'>
          <div className='event1'>Event 1
            <div><AiFillClockCircle/></div>
            <div>Hall</div>
            
          </div>
          <div className='event2'>Event 1
          <div><AiFillClockCircle/></div>
          <div>Hall</div>
          </div>
        </div>
        <div className='event-'>
          <div className='event3'>Event 1
          <div><AiFillClockCircle/></div>
          <div>Hall</div>
          </div>
          <div className='event4'>Event 1
          <div><AiFillClockCircle/></div>
          <div>Hall</div>
          </div>
        </div>
        
      </div>
      
    </div>
    <div>
     <h3 className='annualCalender'>Annual caledar</h3><button className='calanderBtn'>calander</button></div>
     
    </div>

      <h1 className='schoolAct'>School Activity</h1>
      
      <div className='rowActivity'>
        <div className='columActivity1'>
          <div>
          <h2>ART CLUB</h2>
          <div className='Club'>
          <div>
          <img src={require('../images/art.png')} alt="" className='clubimage'/>
          </div>
          <div className='mv'>
            <div className='Mission'>
              <div>MISSION</div>
            <div>To prromote a well -developed and organized art club for students </div>
            </div>
            <div className='Vission'>
              <div>VISION</div>
            <div>
            Initiating students to express their ability on art in different ages</div>
            </div>
            </div>
          </div>
          </div>
          <div>
          <h2>CHARITY CLUB</h2>
          <div className='Club'>
          <div>
          <img src={require('../images/charity.png')} alt="" className='clubimage'/>
          </div>
          <div className='mv'>
            <div className='Mission'><h3>MISSION</h3>
            <div>Helping students to develop the habit of generosity and improve student financialy</div></div>
            <div className='Vission'><h3>VISSION</h3>
            <div>creating generous community .any student do not have to miss school or class becuase of financial storage</div></div>
            </div>
          </div>
          </div>
          <div>
          <h2>SPORT CLUB</h2>
          <div className='Club'>
          <div>
          <img src={require('../images/sport.png')} alt="" className='clubimage'/>
          </div>
          <div className='mv'>
            <div className='Mission'><h3>MISSION</h3>
            <div>To create disciplined and ensuring safe environment</div></div>
            <div className='Vission'><h3>MISSION</h3>
            <div>Improving the range and quality of the sports practiced in the school creating good awarness about sports among the school community</div></div>
            </div>
          </div>
          </div>
          <div>
          <h2>ICT CLUB</h2>
          <div className='Club'>
          <div>
          <img src={require('../images/ict.png')} alt="" className='clubimage'/>
          </div>
          <div className='mv'>
            <div className='Mission'>
              <div>MISSION</div>
            <div>Making the whole school interconnected through networking using computers.</div>
            </div>
            <div className='Vission'>
              <div>VISION</div>
            <div>
            Making students digitally literate and make them familar with ICT.</div>
            </div>
            </div>
          </div>
          </div>
          
          </div>
        <div className='columActivity2'>
        <div>
          <h2>MATH CLUB</h2>
          <div className='Club'>
          <div>
          <img src={require('../images/math.png')} alt="" className='clubimage'/>
          </div>
          <div className='mv'>
            <div className='Mission'><h3>MISSION</h3>
            <div>To create awareness in the students mind that math is useful in the real life.</div></div>
            <div className='Vission'><h3>VISSION</h3>
            <div>To change the cast of mind of studenttowards math.</div></div>
            </div>
          </div>
          </div>
          <div>
          <h2>PSYCHOLOGY CLUB</h2>
          <div className='Club'>
          <div>
          <img src={require('../images/psycholgy.png')} alt="" className='clubimage'/>
          </div>
          <div className='mv'>
            <div className='Mission'><h3>MISSION</h3>
            <div>to give peer of group counseling service to students.</div></div>
            <div className='Vission'><h3>VISSION</h3>
            <div>To create emotionaly stable society and a society that has an independent in every aspect</div></div>
            </div>
          </div>
          </div>
          <div>
          <h2>CHAMISTRY CLUB</h2>
          <div className='Club'>
          <div>
          <img src={require('../images/chemistry.png')} alt="" className='clubimage'/>
          </div>
          <div className='mv'>
            <div className='Mission'><h3>MISSION</h3>
            <div>To encourage and work on enthusiastic students </div></div>
            <div className='Vission'><h3>VISION</h3>
            <div>To create confident ,self-educating and reader students.</div></div>
            </div>
          </div>
          </div>
          <div>
          <h2>LANGUAGE CLUB</h2>
          <div className='Club'>
          <div>
          <img src={require('../images/language.png')} alt="" className='clubimage'/>
          </div>
          <div className='mv'>
            <div className='Mission'><h3>MISSION</h3>
            <div>To make students love English language and help them be better in their four skills.</div></div>
            <div className='Vission'><h3>VISION</h3>
            <div>To help students by creating programs in English ,giving additional tutorials about</div></div>
            </div>
          </div>
          </div>
          
          </div></div>
      

  
    
    </>
  )
}

export default  About