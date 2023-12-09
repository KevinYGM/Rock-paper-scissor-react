import React, { useEffect, useState } from 'react';
import './ModalConfiguration.css';


export const ModalConfiguration = ({ openModalConfiguration }) => {


  /*-------------local States of this Component---------------------------------*/
  const [showModalConfiguration, setShowModalConfiguration] = useState(false);

 
  useEffect(() => {
    if (openModalConfiguration) {
      const timeoutId = setTimeout(() => {
        setShowModalConfiguration(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [openModalConfiguration]);

  
  /*---------------- component JSX structure ---------------------- */ 
  return (
    <>
    {showModalConfiguration && (
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
    )}
    </>
  )
}
