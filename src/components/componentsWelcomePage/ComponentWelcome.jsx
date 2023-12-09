import React, { useState } from 'react';

/*Components*/
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { Title } from './Title/Title';
import { SelectCharacter } from './SelectCharacter/SelectCharacter';
import { StartGame } from './StartGame/StartGame';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

/*Modals*/
import { ModalSelectCharacter } from '../componentsModals/ModalSelectCharacter/ModalSelectCharacter';

export const ComponentWelcome = () => {

  /*-------------local States of this Component---------------------------------*/
  const [openModalCharacter, setOpenModalCharacter] = useState(false);

  /*---------------- component JSX structure ---------------------- */ 
  return (
    <div className='container-welcome'>
      <HeaderComponent />
      <div className="welcome-page">
          <Title />
          <SelectCharacter openModalCharacter = { openModalCharacter } />
          <StartGame 
                openModalCharacter = { openModalCharacter }
                setOpenModalCharacter = { setOpenModalCharacter } />
          <ModalSelectCharacter
                openModalCharacter = { openModalCharacter }
                setOpenModalCharacter = { setOpenModalCharacter } />
      </div>
      <FooterComponent />
    </div>
  )
}
