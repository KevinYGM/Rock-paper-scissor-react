import React from 'react';
import './ModalInstructions.css';

export const ModalInstructions = ({ openModalInstructions }) => {

  /*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      <div className={`modal-instructions modal-IC ${openModalInstructions ? 'show' : ''}`}>
        <span className="title-instructions modal-IC_title">
          <span>📚</span> Instructions
        </span>

        <div className="instructions-content modal-IC_content">
          <span>COMING SOON!!</span>
          <span>We are working on this Function.</span>
        </div>
      </div>
    </>
  );
};