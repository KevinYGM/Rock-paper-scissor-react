import React, { useState } from 'react';

/*Components*/
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { Title } from './Title/Title';
import { SelectCharacter } from './SelectCharacter/SelectCharacter';
import { StartGame } from './StartGame/StartGame';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

/*Modals*/
import { ModalSelectCharacter } from '../componentsModals/ModalSelectCharacter/ModalSelectCharacter';

/*Data*/
import { characters } from '../../data/charactersData';


export const ComponentWelcome = 
({characterPlayer, 
  setCharacterPlayer,
  setCharacterCom,
  setCounterRock,
  setCounterPaper,
  setCounterScissor,
  setCounterRockCom,
  setCounterPaperCom,
  setCounterScissorCom
}) => {

  /*------------------state components-------------------------*/
  const [openModalCharacter, setOpenModalCharacter] = useState(false);


/*---------------- component JSX structure ---------------------- */ 
  return (
    <div className='container-welcome'>
      <HeaderComponent />
      <div className="welcome-page">
          <Title />

          <SelectCharacter
                characters = { characters }
                setCharacterPlayer = { setCharacterPlayer }
                openModalCharacter = { openModalCharacter }
                setCounterRock = { setCounterRock }  
                setCounterPaper = { setCounterPaper }  
                setCounterScissor = { setCounterScissor }   
                />
                
          <StartGame 
                setOpenModalCharacter = { setOpenModalCharacter } 
                openModalCharacter = { openModalCharacter }  
                />
          
          <ModalSelectCharacter 
                characters = { characters }
                characterPlayer = { characterPlayer }
                setCharacterCom = { setCharacterCom }
                openModalCharacter = { openModalCharacter } 
                setOpenModalCharacter = { setOpenModalCharacter } 
                setCounterRockCom = { setCounterRockCom } 
                setCounterPaperCom = { setCounterPaperCom }
                setCounterScissorCom = { setCounterScissorCom }
                />
      </div>
      <FooterComponent />
    </div>
  )
}
