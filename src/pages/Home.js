import React from 'react';

import './home.css'; // Import the custom CSS file

const Home = () => {
  const handleClick = () => {
    window.location.href = '#dashboard';
  };
  return (
    <>
      <div className='home' id='home'>
        <div className="container">
          <div className="studtImage">
            <img src={require('../images/download.png')} alt=""/>
          </div>
          <div className="board">
            <div className="john">St. John Baptist De La Salle Catholic School</div>
            <div className="dashboardaccess">
              <h4>Are you a student, parent, or teacher? Sign in to access the dashboard</h4>
              <button className="button" onClick={handleClick}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      
        <div className="containerv">
          <div className="gridmission">
            
            <img src={require('../images/mission.png')} alt='missionImg' />
            <div>
              <div className='gm'>
            <p>Mission</p>
            <p>
            To provide a human and Christian education to less fortunate young Ethiopians so they can become respectful and loving to all humanity and to their country, according to the ministry which the Catholic Church entrusted to it.
            </p>
            </div>
            </div>
          </div>
          
          <div className="gridvission">
            <img src={require('../images/vission.png')} alt='vissioImg' />
            <div className='gv'>
            <p>Vision</p>
            <p>
            To integrate children who come from different races and denominations, who are economically poor and artisans, and who are in poor health.
            </p>
            </div>
          </div> 
        </div> 
      </div>
    </>
  );
}

export default Home;
