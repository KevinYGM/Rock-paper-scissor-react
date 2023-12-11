import React from 'react';
import './ModalConfiguration.css';


export const ModalConfiguration = ({ openModalConfiguration }) => {

/*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      <div className={`modal-configuration modal-IC ${openModalConfiguration ? 'show' : ''}`}>
        <span className="title-configuration modal-IC_title">
          <span>⚙️</span>
          configuration
          </span>

          <div className="instructions-content modal-IC_content">
            <span>COMING SOON!!</span>
            <span>We are working in this Function.</span>
          </div>
      </div>
    </>
  );
};
