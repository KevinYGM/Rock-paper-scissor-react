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
import { ModalRound16 } from '../componentsModals/ModalRound16/ModalRound16';



export const ComponentCombat = () => {

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

  const {isActivateCount, messageFinal} = useContext(ContextCombat);

  /*-------------local States and Refs of this Component---------------------------------*/
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

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
        <ModalCount />
        <ModalRound16 />
      </div>
      <FooterComponent />
    </div>
    )
  }
