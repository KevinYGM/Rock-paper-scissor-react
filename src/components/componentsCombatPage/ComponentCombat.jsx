import React, { useEffect, useState } from 'react';
import { Summary } from './Summary/Summary';
import { BattleHistory } from './BattleHistory/BattleHistory';
import { PlayBattle } from './PlayBattle/PlayBattle';
import { SectionButtonsPlay } from './SectionButtonsPlay/SectionButtonsPlay';
import { ModalFinalGame } from '../componentsModals/ModalFinalGame/ModalFinalGame';
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

import { playsDataPlayer, playsDataCom  } from '../../data/playData';

import scissorPlayer from '../../images/interfaz-images/scissor-play-player.png';
import paperPlayer from '../../images/interfaz-images/paper-play-player.png';
import rockPlayer from '../../images/interfaz-images/rock-play-player.png';
import scissorCom from '../../images/interfaz-images/scissor-play-com.png';
import paperCom from '../../images/interfaz-images/paper-play-com.png';
import rockCom from '../../images/interfaz-images/rock-play-com.png';


export const ComponentCombat = 
({characterPlayer, 
  characterCom
}) => {
  
  /*---------------------states Components-------------------------*/
  const [openModalFinal, setOpenModalFinal] = useState(false);
  
  const [isHorizontal, setIsHorizontal] = useState(false);

  const [imagesPlayPlayer, setImagesPlayPlayer] = useState([rockPlayer, paperPlayer, scissorPlayer]);

  const [imagesPlayCom, setImagesPlayCom] = useState([paperCom, scissorCom, rockCom]);

  
  
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
                imagesPlayPlayer = { imagesPlayPlayer }
                setImagesPlayPlayer = {setImagesPlayPlayer}
                imagesPlayCom = { imagesPlayCom }
                setImagesPlayCom = { setImagesPlayCom }
                />

        <SectionButtonsPlay 
                openModalFinal= { openModalFinal }
                setOpenModalFinal = { setOpenModalFinal }
                setImagesPlayPlayer = {setImagesPlayPlayer}
                setImagesPlayCom = {setImagesPlayCom}
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
