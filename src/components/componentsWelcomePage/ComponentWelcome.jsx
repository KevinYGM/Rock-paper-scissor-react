import React, { useState } from 'react'
import { Title } from './Title/Title';
import { SelectCharacter } from './SelectCharacter/SelectCharacter';
import { StartGame } from './StartGame/StartGame';
import { characters } from '../../data/charactersData';
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';
import { ModalSelectCharacter } from '../componentsModals/ModalSelectCharacter/ModalSelectCharacter';

export const ComponentWelcome = 
({characterPlayer, 
  setCharacterPlayer,
  setCharacterCom,
  setCounterRock,
  setCounterPaper,
  setCounterScissor
}) => {

  /*------------------state components-------------------------*/
  const [openModalCharacter, setOpenModalCharacter] = useState(false);

  return (
    <div className='container-welcome'>
      <HeaderComponent />
      <div className="welcome-page">
          <Title />

          <SelectCharacter
                characters = { characters }
                setCharacterPlayer = { setCharacterPlayer }
                openModalCharacter = { openModalCharacter }
                setCounterRock = {setCounterRock}  
                setCounterPaper = {setCounterPaper}  
                setCounterScissor = {setCounterScissor}   
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
                />
      </div>
      <FooterComponent />
    </div>
  )
}
