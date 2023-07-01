import React, { useState } from 'react'

import './about.css'
import{AiFillClockCircle} from 'react-icons/ai'

const  About = () => {
  const [isShow,setIsShow]= useState(false);
const [read,setRead]=useState(false);
const ReadMore=()=>{
  setRead(!read);
}
  const toggleSize = () => {
    setIsShow(!isShow);
  };
  return (<>
    <div className='about' id='about'> 
    <div className='container'>
      <div className='schoolImg'>
    <img src={
  require('../images/school.png')} alt='' />
  </div>
      <div className='col-2'>



    <p>
      about our school
    </p>
   <p>The christian brothers founded st.John Baptist de La Salle Catholic School in Addis Ababa and the Oromo Region.
    </p>
    <div>
      {read && (<>is best school at this ceture</>)}
    </div>
    <button className='readButton' onClick={ReadMore}>
      {read? 'Read less':'Read more'}
    </button>
    
    </div>
    </div>
  
    <div className='aboutevent'>
      <p>Recent Event</p>
    
    <div className='eventLayout'>
      <div className='grideImage'><img src={require('../images/download (3).jpg')} alt=''/></div>
        {/*  */}
  
      <div className='eventTime'>
        <div className='eventRow1'>
          <div className='event1'>Event one
            <div><AiFillClockCircle/></div>
            <div>Hall</div>
            
          </div>
          <div className='event2'>Event two
          <div><AiFillClockCircle/></div>
          <div>Hall</div>
          </div>
        </div>
        <div className='eventRow2'>
          <div className='event3'>Event three
          <div><AiFillClockCircle/></div>
          <div>Hall</div>
          </div>
          <div className='event4'>Event four
          <div><AiFillClockCircle/></div>
          <div>Hall</div>
          </div>
        </div>
        <div>
      
      {isShow && (
        <div className='lstEvent'>
          {/* Elements to be shown when the button is clicked */}
          <div className='eventRow1'>
          <div className='event1'>Event one
            <div><AiFillClockCircle/></div>
            <div>Hall</div>
            
          </div>
          <div className='event2'>Event two
          <div><AiFillClockCircle/></div>
          <div>Hall</div>
          </div>
        </div>
          
        </div>
      )}
      <button className='showBtn' onClick={toggleSize}>{isShow? 'show less': 'show all'}
      </button>
      </div>
        
      </div>
      
    </div>
    <div>

    </div>
    
    <div className='annualCalender'>
     <div>Annual caledar</div>
     <div>
     <button className='calanderBtn'>calander</button>
     </div>
     </div>
    
    
    </div>
<div className='SchoolActivity'>
      <h1>School Activity</h1>
      
      <div className='rowActivity'>
        <div className='columActivity1'>
          <div className='lstActivity'>
          <p>ART CLUB</p>
          <div className='Club'>
          <div className='schoolImg'>
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
          <p>CHARITY CLUB</p>
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
          <div className='lstActivity'>
          <p>SPORT CLUB</p>
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
          <div className='lstActivity'>
          <p>ICT CLUB</p>
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
        <div className='lstActivity'>
          <p>MATH CLUB</p>
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
          <div className='lstActivity'>
          <p>PSYCHOLOGY CLUB</p>
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
          <div className='lstActivity'>
          <p>CHAMISTRY CLUB</p>
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
          <div className='lstActivity'>
          <p>LANGUAGE CLUB</p>
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
          </div>
          </div>
          </div>
          </div>
      

  
    
    </>
  )
}

export default  About