import React, { useState } from 'react';
import './toggle.css';
const ToggleElements = () => {
  const [showElements, setShowElements] = useState(false);

  const handleButtonClick = () => {
    setShowElements(!showElements);
  };

  return (
    <div className='showALL'>
      <button onClick={handleButtonClick}>
        {showElements ? 'Hide Elements' : 'Show Elements'}
      </button>
      {showElements && (
        <div>
          {/* Elements to be shown when the button is clicked */}
          <p>Element 1</p>
          <p>Element 2</p>
          <p>Element 3</p>
        </div>
      )}
    </div>
  );
};

export default ToggleElements;
