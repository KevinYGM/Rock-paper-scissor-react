import React, { useEffect, useState } from 'react';

/*Components*/
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

/*Modals*/
import { ModalFinalGame } from '../componentsModals/ModalFinalGame/ModalFinalGame';
import { ModalCount } from '../componentsModals/ModalCount/ModalCount';


export const ComponentCombat = () => {

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
