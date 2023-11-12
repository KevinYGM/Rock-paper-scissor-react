import React, { useEffect, useState } from 'react';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { characters } from '../../data/charactersData';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';
import { ModalFinalGame } from '../componentsModals/ModalFinalGame/ModalFinalGame';


export const ComponentCombat = () => {


  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    // function to activate screen rotation
    if (widthScreen < 700) {
      document.body.classList.add('rotate-screen');
    } else {
      document.body.classList.remove('rotate-screen');
    }
  }, [widthScreen]);


  const [openModalFinal, setOpenModalFinal] = useState(false);




return (
      <div className='combat-page'>
        
        <Summary characters= { characters } />
        <BattleHistory characters= { characters } />

        <PlayBattle characters= { characters } />

        <SectionButtonsPlay 
                characters= { characters }
                setOpenModalFinal = { setOpenModalFinal }/>

        <ModalFinalGame 
                openModalFinal = { openModalFinal }
                setOpenModalFinal = { setOpenModalFinal }
                characters= { characters }
                />
      </div>
    )
  }
