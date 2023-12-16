import React, { useState, useEffect, useContext } from 'react';
import { MyGeneralContext } from '../../MyGeneralContext';

/*Components*/
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { Title } from './Title/Title';
import { SelectCharacter } from './SelectCharacter/SelectCharacter';
import { StartGame } from './StartGame/StartGame';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

/*Modals*/
import { ModalSelectCharacter } from '../componentsModals/ModalSelectCharacter/ModalSelectCharacter';

/*Music*/
import backgroundWelcome from '../../sounds/backgroundWelcome.mp3';


export const ComponentWelcome = () => {

   /*--------------Data imported from useContext-------------------------*/
   const { userIsActive, volumeMusic } = useContext(MyGeneralContext);

  /*-------------local States of this Component---------------------------------*/
  const [openModalCharacter, setOpenModalCharacter] = useState(false);

  
/*-------------Variables of this Component---------------------------------*/
  
  const backgroundWelcomeSound = new Audio(backgroundWelcome);


/*---------- useEffects and Functions that contribute to the logic of component----------*/


  const playBackgroundWelcome = () => {
  backgroundWelcomeSound.currentTime = 1;
  return backgroundWelcomeSound.play();
};

useEffect(() => {
  /*Background music management function*/
  if (userIsActive) {
    const playBackgroundMusic = () => {
      if (playBackgroundWelcome() !== undefined) {
        // Use a promise to handle the play
        playBackgroundWelcome()
          .then(() => {
            // Playback has started successfully
          })
          .catch((error) => {
            console.error('Error when playing:', error);
          });
      }
    };

    backgroundWelcomeSound.addEventListener('ended', playBackgroundMusic);
    backgroundWelcomeSound.volume = volumeMusic / 100;

    if (!backgroundWelcomeSound.paused) {
      // Prevents it from playing again if it is already in progress
      return;
    }

    playBackgroundMusic();

    return () => {
      backgroundWelcomeSound.removeEventListener('ended', playBackgroundMusic);
      // Pause and handle the resulting promise
      playBackgroundWelcome()
        .then(() => {
          // Playback has started successfully
          backgroundWelcomeSound.pause();
        })
        .catch((error) => {
          console.error('Error when playing:', error);
        });
    };
  }
  // eslint-disable-next-line 
}, [userIsActive, volumeMusic ]);



  /*---------------- component JSX structure ---------------------- */ 
  return (
    <div className='container-welcome'>
      <HeaderComponent />

      <div className="welcome-page">
          <Title />
          <SelectCharacter 
                openModalCharacter = { openModalCharacter } />
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
