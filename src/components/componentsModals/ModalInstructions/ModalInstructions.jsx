import React, { useEffect, useState } from 'react';
import './ModalInstructions.css';

export const ModalInstructions = ({ openModalInstructions }) => {

  /*-------------local States of this Component---------------------------------*/
  const [showModalInstructions, setShowModalInstructions] = useState(false);

  
  /*---------- useEffects that contribute to the Design and Effects of this Component----------*/ 
  useEffect(() => {
    if (openModalInstructions) {
      const timeoutId = setTimeout(() => {
        setShowModalInstructions(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [openModalInstructions]);


/*---------------- component JSX structure ---------------------- */ 
  return (
    <>
    {showModalInstructions && (
      <div className={`modal-instructions modal-IC ${openModalInstructions ? 'show' : ''}`}>
        <span className="title-instructions modal-IC_title">
          <span>📚</span> Instructions
        </span>

        <div className="instructions-content modal-IC_content">
          <span>COMING SOON!!</span>
          <span>We are working on this Function.</span>
        </div>
      </div>
    )}
  </>
);
};