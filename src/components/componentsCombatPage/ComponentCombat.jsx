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

/*Sounds*/
import backgroundCombat from '../../sounds/backgroundCombat.mp3';



export const ComponentCombat = () => {

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


  useEffect(() => {
    /*Background music management function*/
    if(!isActivateCount && messageFinal === ""){
      const backgroundCombatSound = new Audio(backgroundCombat);

      backgroundCombatSound.volume = 0.1;
  
      const restartBackgroundMusic = () => {
        backgroundCombatSound.currentTime = 0;
        backgroundCombatSound.play();
      };
  
      backgroundCombatSound.addEventListener('ended', restartBackgroundMusic);
  
      backgroundCombatSound.play();
  
      return () => {
        backgroundCombatSound.removeEventListener('ended', restartBackgroundMusic);
        backgroundCombatSound.pause();
      };
    }
   }, [isActivateCount, messageFinal]);



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
