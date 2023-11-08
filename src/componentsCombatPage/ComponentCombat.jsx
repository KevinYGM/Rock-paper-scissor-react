import React, { useEffect, useState } from 'react';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { characters } from '../data/charactersData';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';


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


return (
      <div className='combat-page'>
        
        <Summary characters= { characters } />
        <BattleHistory characters= { characters } />

        <PlayBattle characters= { characters } />

        <SectionButtonsPlay characters= { characters }/>
      </div>
    )
  }
