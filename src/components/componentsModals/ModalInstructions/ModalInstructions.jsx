import React from 'react';
import './ModalInstructions.css';

export const ModalInstructions = ({openModalInstructions}) => {
  return (
    <>
      {openModalInstructions && (
        <div className="modal-instructions modal-IC">
          <span className="title-instructions modal-IC_title"><span>📚</span>
          Instructions
          </span>

          <div className="instructions-content modal-IC_content">
            <span>COMING SOON!!</span>
            <span>We are working in this Function.</span>
          </div>
        </div>
      )}
   </> 
  )
}
