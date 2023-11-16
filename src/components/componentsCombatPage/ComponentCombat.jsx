import React, { useEffect, useState } from 'react';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';
import { ModalFinalGame } from '../componentsModals/ModalFinalGame/ModalFinalGame';
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

export const ComponentCombat = 
({characterPlayer, 
  characterCom
}) => {
  
  /*---------------------states Components-------------------------*/
  const [openModalFinal, setOpenModalFinal] = useState(false);
  
  const [isHorizontal, setIsHorizontal] = useState(false);
  
    
  
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


    return (
    <div className={isHorizontal ? 'container-combat' : 'container-combat horizontal-layout'}>
      <HeaderComponent />
      <div className='combat-page'>
        
        <Summary  
                characterPlayer = { characterPlayer }
                characterCom = { characterCom }
                />

        <BattleHistory  
                characterPlayer = { characterPlayer }
                characterCom = { characterCom }
                />

        <PlayBattle   
                characterPlayer = { characterPlayer }
                characterCom = { characterCom }
                />

        <SectionButtonsPlay 
                openModalFinal= { openModalFinal }
                setOpenModalFinal = { setOpenModalFinal }/>

        <ModalFinalGame 
                openModalFinal = { openModalFinal }
                setOpenModalFinal = { setOpenModalFinal }
                characterPlayer = { characterPlayer }
                characterCom = { characterCom }
                />
      </div>
      <FooterComponent />
    </div>
    )
  }
