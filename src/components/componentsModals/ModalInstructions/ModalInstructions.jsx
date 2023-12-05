import React, { useEffect, useState } from 'react';
import './ModalInstructions.css';

export const ModalInstructions = ({openModalInstructions}) => {
  const [showModalInstructions, setShowModalInstructions] = useState(false);

  useEffect(() => {
    if (openModalInstructions) {
      const timeoutId = setTimeout(() => {
        setShowModalInstructions(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [openModalInstructions]);


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