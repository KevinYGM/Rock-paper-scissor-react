import React, { useState } from 'react'
import './HeaderComponent.css';
import { ModalInstructions } from '../../componentsModals/ModalInstructions/ModalInstructions';
import { ModalConfiguration } from '../../componentsModals/ModalConfiguration/ModalConfiguration';

export const HeaderComponent = () => {

  const [ openModalConfiguration, setOpenModalConfiguration ] = useState (false);
  const [ openModalInstructions, setOpenModalInstructions ] = useState (false);

  
  
const toggleModal = (currentModal, setCurrentModal, unUsedModal,setUnUsedModal) => {
  /*function that opens and closes the configuration and instructions modals, and that conditions the opening of one with the closing of the other, to avoid collisions */
  
    setCurrentModal(!currentModal);
    unUsedModal && (setUnUsedModal(false));
  }


  return (
    <header className='header'>

      <span className='brand'>KYGM APP</span>

      <div className='configuration'>

{/*---------------Section Instructions-----------------------*/}
        <span className='btn-instructions'
              onClick={()=> toggleModal(
                openModalInstructions, 
                setOpenModalInstructions, 
                openModalConfiguration, 
                setOpenModalConfiguration) }
          >{!openModalInstructions ? "📙" : "📕"}</span>

                    
          <ModalInstructions openModalInstructions = {openModalInstructions} />

       

          

{/*---------------Section Configuration-----------------------*/}

        <span className={openModalConfiguration ? "btn-configuration  btn-configuration-active" : "btn-configuration" }
              onClick={()=> toggleModal(
                openModalConfiguration, 
                setOpenModalConfiguration, 
                openModalInstructions,
                setOpenModalInstructions)}>⚙️</span>

        <ModalConfiguration 
                openModalConfiguration = {openModalConfiguration}
                /> 

      </div>
    </header>
  )
}