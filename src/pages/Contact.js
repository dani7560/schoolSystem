import React,{ useState } from 'react'
import './contact.css'




const Contact = () => {
  const [text, setText] = useState('');

  const handlePhoneClick = () => {
    window.open('tel:+1234567890');
  };
  const handleEmailClick = () => {
    window.open('mailto:danieldesisa@gmail.com');
  };
  const handleMailboxClick = () => {
    window.open('mailto:');
  };

  

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your desired action with the text
    console.log('Text:', text);
    // Clear the textarea
    setText('');
    
  };
   const sendMessage=()=>{
    var sendTxt=setText(text)
   }
  return (
    <><div className='contact' id='contact'>
      
    <div className='content'>
    <p>Contact</p>
      <div className='rowPrincipal'>
        <div className='colPrincipal'>
        <div>
        <img className='prImage' src={require('../images/principal.png')} alt=''/>
        </div>
        <div className='principal'>Mr.principal</div>
        
        </div>
        <div className='message'><form onSubmit={handleSubmit} className='form'>
      <textarea value={text} onChange={handleChange} placeholder="Message" />
      <button type="submit">Send</button>
    </form></div>
        
      </div>
      <div className='socialContact'>
        <div className='telphone'>
          <button className='telButton' onClick={handlePhoneClick}>
            <img src={require('../images/telphone.png')} alt=''/>
            <p>012345687</p>
          </button>
        </div>
        <div className='email'><button className='emailButton' onClick={handleEmailClick}>
            <img src={require('../images/@mail.png')} alt=''/>
            <p>mrprincipal@gmail.com</p>
          </button></div>
        <div className='mail'>
          <button className='mailboxButton' onClick={handleMailboxClick}>
            <img src={require('../images/mail.png')} alt=''/>
            <p>11111</p>
          </button></div>
      </div>
      

    </div>
    </div>
    
    </>
    
  )
}

export default Contact