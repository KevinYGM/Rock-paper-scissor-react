/*Generals Imports*/
import React, { useContext, useEffect, useState } from 'react';
import { ContextCombat } from '../../ContextCombat';
import { MyGeneralContext } from '../../MyGeneralContext';

/*Components*/
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

/*Modals*/
import { ModalFinalGame } from '../componentsModals/ModalFinalGame/ModalFinalGame';
import { ModalPreview } from '../componentsModals/ModalPreview/ModalPreview';
import { ModalCount } from '../componentsModals/ModalCount/ModalCount';
import { ModalRound16 } from '../componentsModals/ModalRound16/ModalRound16';

/*Sounds*/
import backgroundCombat from '../../sounds/backgroundCombat.mp3';




export const ComponentCombat = () => {

  /*----------Imports from useContext-----------------*/
  const { 
    volumeMusic,
    setCharacterCom,
    setCharacterPlayer,
    setCounterPaper,
    setCounterPaperCom,
    setCounterRock,
    setCounterRockCom,
    setCounterScissor,
    setCounterScissorCom,
    setRecordVictory,
    setRecordLose
    } = useContext(MyGeneralContext);

  const {
    isActivateCount, 
    loading, 
    messageFinal, 
    currentPosition, 
    setCurrentPosition} = useContext(ContextCombat);

  /*-------------local States and Refs of this Component---------------------------------*/
  const [isHorizontal, setIsHorizontal] = useState(false);
  
  
  useEffect(() => {
    /*Modify the orientation when the device is a cell phone so that it is always horizontal*/

  const handleOrientationChange = () => {
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    setIsHorizontal(isLandscape);
  };

  const handleResize = () => {
    handleOrientationChange();
  };

  window.addEventListener('orientationchange', handleOrientationChange);
  window.addEventListener('resize', handleResize);

  handleOrientationChange();

  return () => {
    window.removeEventListener('orientationchange', handleOrientationChange);
    window.removeEventListener('resize', handleResize);
  };
}, []);



/*-------------Variables of this Component---------------------------------*/
    const backgroundCombatSound = new Audio(backgroundCombat);

/*---------- useEffects and Functions that contribute to the logic of component----------*/

useEffect(() => {
  const storedRecordVictory = localStorage.getItem('recordVictory');
  const storedRecordLose = localStorage.getItem('recordLose');
  const storedCharacterPlayer = localStorage.getItem('characterPlayer');
  const storedCharacterCom = localStorage.getItem('characterCom');
  const storedCounterPaper = localStorage.getItem('counterPaper');
  const storedCounterRock = localStorage.getItem('counterRock');
  const storedCounterScissor = localStorage.getItem('counterScissor');
  const storedCounterPaperCom = localStorage.getItem('counterPaperCom');
  const storedCounterRockCom = localStorage.getItem('counterRockCom');
  const storedCounterScissorCom = localStorage.getItem('counterScissorCom');

  storedRecordVictory && (setRecordVictory(parseInt(storedRecordVictory, 10)));
  storedRecordLose && (setRecordLose(parseInt(storedRecordLose, 10)));
  storedCharacterPlayer && setCharacterPlayer(JSON.parse(storedCharacterPlayer));
  storedCharacterCom && setCharacterCom(JSON.parse(storedCharacterCom));
  storedCounterPaper && setCounterPaper(parseInt(storedCounterPaper, 10));
  storedCounterRock && setCounterRock(parseInt(storedCounterRock, 10));
  storedCounterScissor && setCounterScissor(parseInt(storedCounterScissor, 10));
  storedCounterPaperCom && setCounterPaperCom(parseInt(storedCounterPaperCom, 10));
  storedCounterRockCom && setCounterRockCom(parseInt(storedCounterRockCom, 10));
  storedCounterScissorCom && setCounterScissorCom(parseInt(storedCounterScissorCom, 10));

  // eslint-disable-next-line 
}, []);




const playBackgroundCombat = () => {
    return backgroundCombatSound.play();
  };

  useEffect(() => {
    /*Background music management function*/
    if(!isActivateCount && !loading && messageFinal === ""){

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

      backgroundCombatSound.currentTime = currentPosition;

      playBackgroundMusic();
  
      return () => {
        setCurrentPosition((prevPosition) => {
          // Save the current playback position
          const newCurrentPosition = backgroundCombatSound.currentTime;
          return newCurrentPosition !== prevPosition ? newCurrentPosition : prevPosition;
        });

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
        <SectionButtonsPlay />
        <ModalFinalGame />
        <ModalPreview />
        <ModalCount />
        <ModalRound16 />
      </div>
      <FooterComponent />
    </div>
    )
  }
