import React, { useState } from 'react';
import './button.css'; // Assuming you have the necessary CSS in App.css or another stylesheet

const SuccessButton = () => {
  const [buttonState, setButtonState] = useState(''); // '' | 'pending' | 'success'
  const stateDuration = 1500;

  const handleSuccess = () => {
    setButtonState('pending');
    setTimeout(() => {
      setButtonState('success');
      setTimeout(() => setButtonState(''), stateDuration);
    }, stateDuration);
  };

  return (
    <div>
      <span className="loading-btn-wrapper">
        <button 
          className={`loading-btn ${buttonState === 'pending' ? 'loading-btn--pending' : ''} ${buttonState === 'success' ? 'loading-btn--success' : ''}`}
          onClick={handleSuccess}
        >
          <span className="loading-btn__text">Submit</span>
        </button>
      </span>
    </div>
  );
};

export default SuccessButton;