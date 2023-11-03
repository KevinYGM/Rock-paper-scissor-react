import React, { useEffect, useState } from 'react'
import './ComponentCombat.css';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { characters } from '../data/charactersData';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';


export const ComponentCombat = () => {
  const [referenceHeight, setReferenceHeight] = useState(null);

  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setAnchoPantalla(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (anchoPantalla < 700) {
      document.body.classList.add('rotar-pantalla');
    } else {
      document.body.classList.remove('rotar-pantalla');
    }
  }, [anchoPantalla]);


return (
    <>
      <div className='combat-page'>
        
        <Summary />
        <BattleHistory referenceHeight={referenceHeight} />

        <PlayBattle characters= { characters } 
                    setReferenceHeight={setReferenceHeight}/>

        <SectionButtonsPlay characters= { characters }/>
      </div>
      
    </>
  )
}
