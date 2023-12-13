import React, { useState } from 'react'
import './HeaderComponent.css';
import { ModalInstructions } from '../../componentsModals/ModalInstructions/ModalInstructions';
import { ModalConfiguration } from '../../componentsModals/ModalConfiguration/ModalConfiguration';

/*Sounds*/
import clickSound from '../../../sounds/sound-1.mp3';

export const HeaderComponent = () => {

  /*-------------local States of this Component---------------------------------*/
  const [ openModalConfiguration, setOpenModalConfiguration ] = useState (false);
  const [ openModalInstructions, setOpenModalInstructions ] = useState (false);

  
   /*---------- Functions that contribute to the logic of this Component----------*/

const toggleModal = (currentModal, setCurrentModal, unUsedModal,setUnUsedModal) => {
  /*function that opens and closes the configuration and instructions modals, and that conditions the opening of one with the closing of the other, to avoid collisions */
  
    const audio = new Audio(clickSound);
    audio.play();

    setCurrentModal(!currentModal);
    unUsedModal && (setUnUsedModal(false));
  }



 /*---------------- component JSX structure ---------------------- */ 
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