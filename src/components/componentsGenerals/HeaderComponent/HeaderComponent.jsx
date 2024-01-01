/*Generals Imports*/
import React, { useContext, useState } from 'react'
import './HeaderComponent.css';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*Modals*/
import { ModalInstructions } from '../../componentsModals/ModalInstructions/ModalInstructions';
import { ModalConfiguration } from '../../componentsModals/ModalConfiguration/ModalConfiguration';
import { ModalCredits } from '../../componentsModals/ModalCredits/ModalCredits';

/*Sounds*/
import modalsSound from '../../../sounds/sound-1.mp3';



export const HeaderComponent = () => {

  /*--------------Data imported from useContext-------------------------*/
  const { userIsActive, setUserIsActive, volumeSounds } = useContext(MyGeneralContext);

  /*-------------local States of this Component---------------------------------*/
  const [ openModalConfiguration, setOpenModalConfiguration ] = useState(false);
  const [ openModalInstructions, setOpenModalInstructions ] = useState(false);
  const [ openModalCredits, setOpenModalCredits ] = useState(false);

  
   /*---------- Functions that contribute to the logic of this Component----------*/

const toggleModal = (currentModal, setCurrentModal, unUsedModal,setUnUsedModal, unUsedModal2, setUnUsedModal2) => {
  /*function that opens and closes the configuration and instructions modals, and that conditions the opening of one with the closing of the other, to avoid collisions */
    
    if(!userIsActive){
      setUserIsActive(true);
    }
    
    const audioWindows =  new Audio(modalsSound);
    audioWindows.currentTime = 0;
    audioWindows.volume = volumeSounds / 100;
    audioWindows.play();

    setCurrentModal(!currentModal);
    unUsedModal && (setUnUsedModal(false));
    unUsedModal2 && (setUnUsedModal2(false));
  }

  
/*---------------- component JSX structure ---------------------- */ 
  return (
    <header className='header'>
      <span className='brand'>KYGM APP</span>
      <div className='configuration'>

{/*---------------Section Credits-----------------------*/}
<span className='btn-credits'
              onClick={()=> toggleModal(
                openModalCredits,
                setOpenModalCredits,
                openModalInstructions, 
                setOpenModalInstructions, 
                openModalConfiguration, 
                setOpenModalConfiguration) }
          >{!openModalCredits ? "🎖️" : "🏅"}</span>

          <ModalCredits
                        openModalCredits = { openModalCredits }
                        setOpenModalCredits = { setOpenModalCredits }/>

{/*---------------Section Instructions-----------------------*/}
        <span className='btn-instructions'
              onClick={()=> toggleModal(
                openModalInstructions, 
                setOpenModalInstructions, 
                openModalCredits,
                setOpenModalCredits,
                openModalConfiguration, 
                setOpenModalConfiguration) }
          >{!openModalInstructions ? "📙" : "📕"}</span>

          <ModalInstructions 
                        openModalInstructions = { openModalInstructions }
                        setOpenModalInstructions = { setOpenModalInstructions }/>

  
  {/*---------------Section Configuration-----------------------*/}

        <span className={openModalConfiguration ? "btn-configuration  btn-configuration-active" : "btn-configuration" }
              onClick={()=> toggleModal(
                openModalConfiguration, 
                setOpenModalConfiguration, 
                openModalCredits,
                setOpenModalCredits,
                openModalInstructions,
                setOpenModalInstructions)}>⚙️</span>

        <ModalConfiguration 
                openModalConfiguration = {openModalConfiguration}
                setOpenModalConfiguration = { setOpenModalConfiguration }/> 

      </div>
    </header>
  )
}