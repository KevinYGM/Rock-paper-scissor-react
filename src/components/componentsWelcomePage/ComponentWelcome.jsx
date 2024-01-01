/*Generals Imports*/
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
   const { setRecordLose, setRecordVictory, userIsActive, volumeMusic } = useContext(MyGeneralContext);

  /*-------------local States of this Component---------------------------------*/
  const [openModalCharacter, setOpenModalCharacter] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  
/*-------------Variables of this Component---------------------------------*/
  
  const backgroundWelcomeSound = new Audio(backgroundWelcome);


/*---------- useEffects and Functions that contribute to the logic of component----------*/


  const playBackgroundWelcome = () => {
    return backgroundWelcomeSound.play();
};

useEffect(() => {
  /* Background music management function */
  if (userIsActive) {

    const playBackgroundMusic = () => {
      if (playBackgroundWelcome() !== undefined) {
        // Use a promise to handle the playback
        playBackgroundWelcome()
          .then(() => {
            // Playback has started successfully
          })
          .catch((error) => {
            console.error('Error when playing:', error);
          });
      }
    };

    // Add an event listener to detect the end of the welcome music and play the background music
    backgroundWelcomeSound.addEventListener('ended', playBackgroundMusic);
    backgroundWelcomeSound.volume = volumeMusic / 100;

    // If the background music is already playing, avoid playing it again
    if (!backgroundWelcomeSound.paused) {
      return;
    }

    // Restore the playback position
    backgroundWelcomeSound.currentTime = currentPosition;

    // Start playing the background music
    playBackgroundMusic();

    // Clean up the effect (when the component unmounts or when userIsActive or volumeMusic changes)
    return () => {
      // Use the state update function to avoid concurrency issues
      setCurrentPosition((prevPosition) => {
        // Save the current playback position
        const newCurrentPosition = backgroundWelcomeSound.currentTime;
        return newCurrentPosition !== prevPosition ? newCurrentPosition : prevPosition;
      });

      // Remove the event listener to prevent memory leaks
      backgroundWelcomeSound.removeEventListener('ended', playBackgroundMusic);

      // Pause the background music and handle the resulting promise
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
}, [userIsActive, volumeMusic]);




/*Effect to load RecordVictory AND RecordLose from localStorage */

useEffect(() => {
  const storedRecordVictory = localStorage.getItem('recordVictory');
  const storedRecordLose = localStorage.getItem('recordLose');

// If there are values ​​in localStorage, we set them as initial states
  storedRecordVictory && (setRecordVictory(parseInt(storedRecordVictory, 10)));
  storedRecordLose && (setRecordLose(parseInt(storedRecordLose, 10)));

  // eslint-disable-next-line 
}, [])




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
