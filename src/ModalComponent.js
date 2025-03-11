import React, { useState } from 'react';

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>Modal Title</h2>
            <p>This is a simple modal.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the modal
const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
};

export default ModalComponent;
