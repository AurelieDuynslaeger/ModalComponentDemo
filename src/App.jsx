import React, { useState } from 'react';
import Modal from 'modal-component-ocr-finalproject';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSecondOpen = () => setIsSecondOpen(true);
  const handleSecondClose = () => setIsSecondOpen(false);

  const primaryAction = () => {
    console.log('Primary action executed!');
    handleClose();
  };

  const secondaryAction = () => {
    console.log('Secondary action executed!');
    handleClose();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Modal Component Demo</h1>
      
      <button onClick={handleOpen}>Open First Modal</button>
      <button onClick={handleSecondOpen} style={{ marginLeft: '10px' }}>Open Second Modal</button>

      {/* First Modal */}
      <Modal
        isOpen={isOpen}
        title="Delete Employee"
        text="Are you sure you want to delete this employee?"
        onClose={handleClose}
        primaryButton={{ label: 'Delete', onClick: primaryAction }}
        secondaryButton={{ label: 'Cancel', onClick: secondaryAction }}
        style={{
          backgroundColor: '#f9f9f9',
          color: '#333',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      />

      {/* Second Modal with different styles */}
      <Modal
        isOpen={isSecondOpen}
        title="Confirm Action"
        text="Would you like to proceed with this action?"
        onClose={handleSecondClose}
        primaryButton={{ label: 'Yes', onClick: handleSecondClose }}
        secondaryButton={{ label: 'No', onClick: handleSecondClose }}
        style={{
          backgroundColor: '#fff',
          color: '#444',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 6px 14px rgba(0,0,0,0.3)',
        }}
      />
    </div>
  );
};

export default App;
