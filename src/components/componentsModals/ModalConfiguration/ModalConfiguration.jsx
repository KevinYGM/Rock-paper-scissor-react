import React from 'react'
import './ModalConfiguration.css';


export const ModalConfiguration = ({ openModalConfiguration }) => {
  return (
    <>
      {openModalConfiguration && (
        <div className="modal-configuration modal-IC">
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
