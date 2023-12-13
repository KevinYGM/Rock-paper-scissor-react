import React, { useState, useEffect } from 'react';

/*Components*/
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { Title } from './Title/Title';
import { SelectCharacter } from './SelectCharacter/SelectCharacter';
import { StartGame } from './StartGame/StartGame';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

/*Modals*/
import { ModalSelectCharacter } from '../componentsModals/ModalSelectCharacter/ModalSelectCharacter';

/*Sounds*/
import backgroundWelcome from '../../sounds/backgroundWelcome.mp3';

export const ComponentWelcome = () => {

  /*-------------local States of this Component---------------------------------*/
  const [openModalCharacter, setOpenModalCharacter] = useState(false);



  useEffect(() => {
    /*Background music management function*/
    const backgroundWelcomeSound = new Audio(backgroundWelcome);

    backgroundWelcomeSound.volume = 0.2;

    const restartBackgroundMusic = () => {
      backgroundWelcomeSound.currentTime = 0;
      backgroundWelcomeSound.play();
    };

    backgroundWelcomeSound.addEventListener('ended', restartBackgroundMusic);

    backgroundWelcomeSound.play();

    return () => {
      backgroundWelcomeSound.removeEventListener('ended', restartBackgroundMusic);
      backgroundWelcomeSound.pause();
    };
  }, []);



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
