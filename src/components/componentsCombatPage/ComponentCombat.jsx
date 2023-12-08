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

/*Images*/
import trebol from '../../images/interfaz-images/trebol.png';
import backCardPlayer from '../../images/interfaz-images/card-player.png';
import backCardCom from '../../images/interfaz-images/card-computer.png';

/*Data*/
import { playsDataPlayer, playsDataCom  } from '../../data/playData';
import { ModalCount } from '../componentsModals/ModalCount/ModalCount';


export const ComponentCombat = 
({characterPlayer, 
  characterCom,
  counterRock,
  counterPaper,
  counterScissor,
  setCounterRock,
  setCounterPaper,
  setCounterScissor,
  setCounterRockCom,
  setCounterPaperCom,
  setCounterScissorCom,
  counterRockCom,
  counterPaperCom,
  counterScissorCom
}) => {

  /*---------------------states Components-------------------------*/
  const [openModalFinal, setOpenModalFinal] = useState(false);
  
  const [isHorizontal, setIsHorizontal] = useState(false);

  const [imagesPlayPlayer, setImagesPlayPlayer] = useState([backCardPlayer, backCardPlayer, backCardPlayer]);

  const [imagesPlayCom, setImagesPlayCom] = useState([backCardCom, backCardCom, backCardCom]);

  const [generalPlayPlayer, setGeneralPlayPlayer] = useState(undefined);

  const [generalPlayCom, setGeneralPlayCom] = useState(undefined);

  const [playerMark, setPlayerMark] = useState(0);

  const [comMark, setComMark] = useState(0);

  const [controlRoundsState, setControlRoundsState] = useState(1);
  
  const [interactiveTexts, setInteractiveTexts] = useState(`<p>Let's go for victory, Good Luck!!</p>`);

  const [controlRoundsPrev, setControlRoundsPrev] = useState(2);

  const [resultState, setResultState ] = useState(undefined);

  const [resultComState, setResultComState ] = useState(undefined);

  const [pauseGeneralState, setPauseGeneralState ] = useState(trebol);

  const [stateCombat, setStateCombat] = useState(true);

  const [winnerCombat, setWinnerCombat] = useState(null);

  const [messageFinal, setMessageFinal] = useState("");

  const [buttonSpecial, setButtonSpecial] = useState(false);

  const [buttonSpecialCom, setButtonSpecialCom] = useState(false);

  const [historyItems, setHistoryItems] = useState([]);

  const [selectPlay, setSelectPlay] = useState(false);

  const [startAction, setStartAction] = useState(false);

  const [ctrlActionButtons, setCtrlActionButtons] = useState(false);

  const [pointsRoundPlayer, setPointsRoundPlayer] = useState("0");

  const [pointsRoundCom, setPointsRoundCom] = useState("0");

  const [roundsWithoutButtonClick, setRoundsWithoutButtonClick] = useState(0);

  const [roundsWithoutAttackSpecialCom, setRoundsWithoutAttackSpecialCom] = useState(0);

  const [isActivateCount, setIsActivateCount] = useState(true);

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
        
        <Summary  
                characterPlayer = { characterPlayer }
                characterCom = { characterCom }
                playerMark = { playerMark }
                comMark = { comMark }
                />

        <BattleHistory historyItems = { historyItems }/>
                

        <PlayBattle   
                characterPlayer = { characterPlayer }
                characterCom = { characterCom }
                imagesPlayPlayer = { imagesPlayPlayer }
                imagesPlayCom = { imagesPlayCom }
                generalPlayPlayer = { generalPlayPlayer }
                generalPlayCom = { generalPlayCom }
                setPlayerMark = { setPlayerMark }
                setComMark = { setComMark }
                playerMark = { playerMark }
                comMark = { comMark }
                controlRoundsPrev = { controlRoundsPrev }
                controlRoundsState = { controlRoundsState }
                interactiveTexts = { interactiveTexts }
                setInteractiveTexts = { setInteractiveTexts}
                setStateCombat = {setStateCombat}
                setWinnerCombat = { setWinnerCombat }
                setMessageFinal = { setMessageFinal }
                buttonSpecial = { buttonSpecial }
                buttonSpecialCom = {buttonSpecialCom}
                resultState = { resultState}
                setResultState = { setResultState}
                resultComState = { resultComState}
                setResultComState = { setResultComState}
                pauseGeneralState = { pauseGeneralState }
                setPointsRoundPlayer = { setPointsRoundPlayer }
                setPointsRoundCom = { setPointsRoundCom }
                roundsWithoutButtonClick = { roundsWithoutButtonClick }
                roundsWithoutAttackSpecialCom = { roundsWithoutAttackSpecialCom }
                startAction = { startAction }
                
                />

        <SectionButtonsPlay 
                characterCom = { characterCom }
                characterPlayer = { characterPlayer }
                openModalFinal= { openModalFinal }
                setOpenModalFinal = { setOpenModalFinal }
                setImagesPlayPlayer = { setImagesPlayPlayer }
                setImagesPlayCom = { setImagesPlayCom }
                playsDataPlayer = { playsDataPlayer } 
                playsDataCom = { playsDataCom }
                setGeneralPlayPlayer = { setGeneralPlayPlayer }
                setGeneralPlayCom = { setGeneralPlayCom }
                controlRoundsPrev = { controlRoundsPrev }
                setControlRoundsPrev = { setControlRoundsPrev }
                setControlRoundsState = { setControlRoundsState }
                setInteractiveTexts = { setInteractiveTexts }
                setWinnerCombat = { setWinnerCombat }
                setMessageFinal = { setMessageFinal }
                stateCombat={ stateCombat }
                setStateCombat = { setStateCombat }
                setButtonSpecial = { setButtonSpecial }
                setButtonSpecialCom = { setButtonSpecialCom }
                buttonSpecialCom = { buttonSpecialCom }
                buttonSpecial = { buttonSpecial }
                setHistoryItems = { setHistoryItems }
                generalPlayPlayer = { generalPlayPlayer }
                generalPlayCom = { generalPlayCom}
                resultState = {resultState}
                resultComState = {resultComState}
                controlRoundsState = { controlRoundsState }
                pauseGeneralState = { pauseGeneralState }
                setPauseGeneralState = { setPauseGeneralState }
                selectPlay= { selectPlay }
                setSelectPlay= { setSelectPlay }
                startAction = { startAction } 
                setStartAction = { setStartAction }
                pointsRoundPlayer = { pointsRoundPlayer }
                pointsRoundCom = { pointsRoundCom }
                ctrlActionButtons = { ctrlActionButtons }
                setCtrlActionButtons = { setCtrlActionButtons }
                setCounterRock = { setCounterRock } 
                setCounterPaper = { setCounterPaper }
                setCounterScissor = { setCounterScissor }
                counterRock = { counterRock }  
                counterPaper = { counterPaper }  
                counterScissor = { counterScissor }
                setCounterRockCom = { setCounterRockCom } 
                setCounterPaperCom = { setCounterPaperCom }
                setCounterScissorCom = { setCounterScissorCom }
                counterRockCom = { counterRockCom }  
                counterPaperCom = { counterPaperCom }  
                counterScissorCom = { counterScissorCom } 
                roundsWithoutButtonClick = { roundsWithoutButtonClick }
                setRoundsWithoutButtonClick = { setRoundsWithoutButtonClick }  
                roundsWithoutAttackSpecialCom = { roundsWithoutAttackSpecialCom }
                setRoundsWithoutAttackSpecialCom = { setRoundsWithoutAttackSpecialCom }
                isActivateCount = { isActivateCount }
                />

        <ModalFinalGame 
                setOpenModalFinal = { setOpenModalFinal }
                stateCombat = {stateCombat}
                winnerCombat = { winnerCombat }
                messageFinal = { messageFinal }
                />

        <ModalCount
                isActivateCount = { isActivateCount }
                setIsActivateCount = { setIsActivateCount }/>
      </div>
      <FooterComponent />
    </div>
    )
  }
