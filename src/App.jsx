import { useState } from 'react';
import Modal from 'modal-component-ocr-finalproject';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  //functions to open/close modals
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSecondOpen = () => setIsSecondOpen(true);
  const handleSecondClose = () => setIsSecondOpen(false);

  const handleThirdOpen = () => setIsThirdOpen(true);
  const handleThirdClose = () => setIsThirdOpen(false);

  //actions for buttons
  const primaryAction = () => {
    handleClose();
  };

  const secondaryAction = () => {
    handleClose();
  };

  return (
    <main>
      <h1>Modal Component Demo</h1>

      {/* Button to trigger modals */}
      <button onClick={handleOpen}>Modal with Title and 2 Button Actions</button>
      <button onClick={handleSecondOpen} style={{ marginLeft: '10px' }}>Modal without Title and 1 Button Action</button>
      <button onClick={handleThirdOpen} style={{ marginLeft: '10px' }}>Fully Customized Modal</button>

      {/* First Modal: With Title and 2 Buttons */}
      <Modal
        isOpen={isOpen}
        title="Delete Employee"
        text="Are you sure you want to delete this employee?"
        onClose={handleClose}
        primaryButton={{ label: 'Delete', onClick: primaryAction, style: { backgroundColor: '#4CAF50', color: '#fff', padding: '5px 10px' }, }}
        secondaryButton={{ label: 'Cancel', onClick: secondaryAction, style: { backgroundColor: 'rgba(255, 255, 255, 0.87)', color: '#000', padding: '5px 10px' } }}
        style={{
          backgroundColor: '#f9f9f9',
          color: '#333',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      />

      {/* Second Modal: Without Title and with 1 Button */}
      <Modal
        isOpen={isSecondOpen}
        text="Do you want to continue?"
        onClose={handleSecondClose}
        primaryButton={{
          label: 'Continue',
          onClick: () => {
            handleSecondClose();
          },
        }}
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      />

      {/* Third Modal: Fully Customized */}
      <Modal
        isOpen={isThirdOpen}
        title="Custom Action"
        text="Proceed with this action using fully customized modal UI?"
        onClose={handleThirdClose}
        primaryButton={{
          label: 'Yes',
          onClick: () => {
            handleThirdClose();
          },
          style: { backgroundColor: '#4CAF50', color: '#fff', padding: '5px 10px' },
        }}
        secondaryButton={{
          label: 'No',
          onClick: handleThirdClose,
          style: { backgroundColor: '#f44336', color: '#fff', padding: '5px 10px' },
        }}
        style={{
          backgroundColor: '#282c34',
          color: '#fff',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 6px 14px rgba(0,0,0,0.5)',
          textAlign: 'center',
        }}
      />
    </main>
  );
};

export default App;
