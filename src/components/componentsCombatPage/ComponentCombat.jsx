import React, { useEffect, useState } from 'react';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { characters } from '../../data/charactersData';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';
import { ModalFinalGame } from '../componentsModals/ModalFinalGame/ModalFinalGame';
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';


export const ComponentCombat = 
      (characterPlayer) => {
  
  const [openModalFinal, setOpenModalFinal] = useState(false);
  
  const [isHorizontal, setIsHorizontal] = useState(false);
  
    useEffect(() => {
      const handleOrientationChange = () => {
        const { innerWidth, innerHeight } = window;
        const isLandscape = innerWidth > innerHeight || innerHeight - innerWidth < 100;
        setIsHorizontal(isLandscape);
      };
  
      // Agrega un listener para el cambio de orientación
      window.addEventListener('orientationchange', handleOrientationChange);
  
      // Llama a la función al cargar la página para establecer la orientación inicial
      handleOrientationChange();
  
      // Limpia el listener cuando el componente se desmonta
      return () => {
        window.removeEventListener('orientationchange', handleOrientationChange);
      };
    }, []);


    return (
    <div className={isHorizontal ? 'container-combat' : 'container-combat horizontal-layout'}>
      <HeaderComponent />
      <div className='combat-page'>
        
        <Summary  characters= { characters }
                  characterPlayer = { characterPlayer }
                  />

        <BattleHistory  characters= { characters } 
                        characterPlayer = { characterPlayer }
                    />

        <PlayBattle   characters= { characters } 
                      characterPlayer = { characterPlayer }
                    />

        <SectionButtonsPlay 
                characters= { characters }
                openModalFinal= { openModalFinal }
                setOpenModalFinal = { setOpenModalFinal }/>

        <ModalFinalGame 
                openModalFinal = { openModalFinal }
                setOpenModalFinal = { setOpenModalFinal }
                characters= { characters }
                />
      </div>
      <FooterComponent />
    </div>
    )
  }
