// src/components/Modal.js
import React from 'react';

const Modal = ({ isVisible, toggleModal }) => {
  if (!isVisible) return null; // Don't render modal if not visible

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Content</h2>
        <p>This is a simple modal!</p>
        <button onClick={toggleModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
