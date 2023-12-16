import React, { useContext, useEffect, useState } from 'react';

/*Components*/
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';
import { ContextCombat } from '../../ContextCombat';

/*Modals*/
import { ModalFinalGame } from '../componentsModals/ModalFinalGame/ModalFinalGame';
import { ModalCount } from '../componentsModals/ModalCount/ModalCount';
import { MyGeneralContext } from '../../MyGeneralContext';

/*Sounds*/
import backgroundCombat from '../../sounds/backgroundCombat.mp3';



export const ComponentCombat = () => {

  const { volumeMusic } = useContext(MyGeneralContext);

  const {isActivateCount, messageFinal} = useContext(ContextCombat);

  /*-------------local States and Refs of this Component---------------------------------*/
  const [isHorizontal, setIsHorizontal] = useState(false);

  /*---------------- UseEffects dedicated to design---------------------- */ 
  useEffect(() => {
    /* function to change the rotation of the component.*/
    const handleOrientationChange = () => {
      const { innerWidth, innerHeight } = window;
      const isLandscape = innerWidth > innerHeight || innerHeight - innerWidth < 100;
      setIsHorizontal(isLandscape);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    
    handleOrientationChange();

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

/*-------------Variables of this Component---------------------------------*/
    const backgroundCombatSound = new Audio(backgroundCombat);

/*---------- useEffects and Functions that contribute to the logic of component----------*/

    const playBackgroundCombat = () => {
    backgroundCombatSound.currentTime = 0;
    return backgroundCombatSound.play();
  };

  useEffect(() => {
    /*Background music management function*/
    if(!isActivateCount && messageFinal === ""){

      const playBackgroundMusic = () => {
        if (playBackgroundCombat() !== undefined) {
          // Use a promise to handle the play
          playBackgroundCombat()
          .then(() => {
            // Playback has started successfully
          })
          .catch((error) => {
            console.error('Error when playing:', error);
          });
        }
      };

      backgroundCombatSound.addEventListener('ended', playBackgroundMusic);
      backgroundCombatSound.volume = volumeMusic / 100;

      if(!backgroundCombatSound.paused){
        // Prevents it from playing again if it is already in progress
        return;
      }

      playBackgroundMusic();
  
      return () => {
        backgroundCombatSound.removeEventListener('ended', playBackgroundMusic);
        // Pause and handle the resulting promise
        playBackgroundCombat()
          .then(() => {
            // Playback has started successfully
            backgroundCombatSound.pause();
          })
          .catch((error) => {
            console.error('Error when playing:', error);
          });
      };
    }
     // eslint-disable-next-line 
   }, [isActivateCount, messageFinal, volumeMusic]);




  /*---------------- component JSX structure ---------------------- */ 
    return (
    <div className={isHorizontal ? 'container-combat' : 'container-combat horizontal-layout'}>
      <HeaderComponent />
      <div className='combat-page'>
        <Summary />
        <BattleHistory />
        <PlayBattle />
        <SectionButtonsPlay/>
        <ModalFinalGame/>
        <ModalCount/>
      </div>
      <FooterComponent />
    </div>
    )
  }
