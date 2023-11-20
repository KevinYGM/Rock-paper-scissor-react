import React, { useEffect, useState } from 'react';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';
import { ModalFinalGame } from '../componentsModals/ModalFinalGame/ModalFinalGame';
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

import { playsDataPlayer, playsDataCom  } from '../../data/playData';

export const ComponentCombat = 
({characterPlayer, 
  characterCom
}) => {
  
  /*---------------------states Components-------------------------*/
  const [openModalFinal, setOpenModalFinal] = useState(false);
  
  const [isHorizontal, setIsHorizontal] = useState(false);

  const [imagesPlayPlayer, setImagesPlayPlayer] = useState(playsDataPlayer.map(play => play.photo));

  const [imagesPlayCom, setImagesPlayCom] = useState(playsDataCom.map(play => play.photo));

  const [generalPlayPlayer, setGeneralPlayPlayer] = useState(undefined);

  const [generalPlayCom, setGeneralPlayCom] = useState(undefined);

  const [playerMark, setPlayerMark] = useState(0);

  const [comMark, setComMark] = useState(0);

  
  
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
                playerMark = {playerMark}
                comMark = {comMark}
                />

        <BattleHistory  
                characterPlayer = { characterPlayer }
                characterCom = { characterCom }
                generalPlayPlayer = { generalPlayPlayer }
                generalPlayCom = { generalPlayCom}
                />
                

        <PlayBattle   
                characterPlayer = { characterPlayer }
                characterCom = { characterCom }
                imagesPlayPlayer = { imagesPlayPlayer }
                setImagesPlayPlayer = {setImagesPlayPlayer}
                imagesPlayCom = { imagesPlayCom }
                setImagesPlayCom = { setImagesPlayCom }
                generalPlayPlayer = { generalPlayPlayer }
                generalPlayCom = { generalPlayCom }
                setPlayerMark = { setPlayerMark }
                setComMark = { setComMark }
                />

        <SectionButtonsPlay 
                openModalFinal= { openModalFinal }
                setOpenModalFinal = { setOpenModalFinal }
                setImagesPlayPlayer = {setImagesPlayPlayer}
                setImagesPlayCom = {setImagesPlayCom}
                playsDataPlayer = {playsDataPlayer} 
                playsDataCom = { playsDataCom }
                setGeneralPlayPlayer = {setGeneralPlayPlayer}
                setGeneralPlayCom = {setGeneralPlayCom}
                />

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
