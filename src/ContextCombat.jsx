import { createContext, useState } from 'react';

/*Images*/
import trebol from './images/interfaz-images/trebol.png';
import backCardPlayer from './images/interfaz-images/card-player.png';
import backCardCom from './images/interfaz-images/card-computer.png';


const ContextCombat = createContext();

const MyProviderCombat = ({ children }) => {

  /*-------------------States Combat-page (Alphabetical Order)-------------------------*/
  const [buttonSpecial, setButtonSpecial] = useState(false);
  const [buttonSpecialCom, setButtonSpecialCom] = useState(false);
  const [comMark, setComMark] = useState(0);
  const [controlRoundsPrev, setControlRoundsPrev] = useState(2);
  const [controlRoundsState, setControlRoundsState] = useState(1);
  const [ctrlActionButtons, setCtrlActionButtons] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [extraRounds, setExtraRounds] = useState(false);
  const [generalPlayCom, setGeneralPlayCom] = useState(undefined);
  const [generalPlayPlayer, setGeneralPlayPlayer] = useState(undefined);
  const [historyItems, setHistoryItems] = useState([]);
  const [imagesPlayCom, setImagesPlayCom] = useState([backCardCom, backCardCom, backCardCom]);
  const [imagesPlayPlayer, setImagesPlayPlayer] = useState([backCardPlayer, backCardPlayer, backCardPlayer]);
  const [interactiveTexts, setInteractiveTexts] = useState(`<p>Let's go for victory, Good Luck!!</p>`);
  const [isActivateCount, setIsActivateCount] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [loading, setLoading] = useState(true);
  const [messageFinal, setMessageFinal] = useState("");
  const [openModalFinal, setOpenModalFinal] = useState(false);
  const [pauseGeneralState, setPauseGeneralState ] = useState(trebol);
  const [playAgainState, setPlayAgainState] = useState(false);
  const [playerMark, setPlayerMark] = useState(0);
  const [pointsRoundCom, setPointsRoundCom] = useState("0");
  const [pointsRoundPlayer, setPointsRoundPlayer] = useState("0");
  const [positivePoint, setPositivePoint] = useState(true);
  const [positivePointCom, setPositivePointCom] = useState(true);
  const [progressLoad, setProgressLoad] = useState(0);
  const [resultComState, setResultComState ] = useState(undefined);
  const [resultState, setResultState ] = useState(undefined);
  const [roundsWithoutAttackSpecialCom, setRoundsWithoutAttackSpecialCom] = useState(0);
  const [roundsWithoutButtonClick, setRoundsWithoutButtonClick] = useState(0);
  const [selectPlay, setSelectPlay] = useState(false);
  const [startAction, setStartAction] = useState(false);
  const [stateCombat, setStateCombat] = useState(true);
  const [winnerCombat, setWinnerCombat] = useState({});
  

  
 return(
    <ContextCombat.Provider 
      value={{ 
      
        /*---------------------States Combat-page-------------------------*/
        buttonSpecialCom, setButtonSpecialCom,
        buttonSpecial, setButtonSpecial,
        comMark, setComMark,
        controlRoundsPrev, setControlRoundsPrev,
        controlRoundsState, setControlRoundsState,
        currentPosition, setCurrentPosition,
        ctrlActionButtons, setCtrlActionButtons,
        extraRounds, setExtraRounds,
        imagesPlayCom, setImagesPlayCom,
        imagesPlayPlayer, setImagesPlayPlayer,
        interactiveTexts, setInteractiveTexts,
        isActivateCount, setIsActivateCount,
        isFirstRender, setIsFirstRender,
        generalPlayCom, setGeneralPlayCom,
        generalPlayPlayer, setGeneralPlayPlayer,
        historyItems, setHistoryItems,
        loading, setLoading,
        messageFinal, setMessageFinal,
        openModalFinal, setOpenModalFinal,
        pauseGeneralState, setPauseGeneralState,
        playerMark, setPlayerMark,
        playAgainState, setPlayAgainState,
        pointsRoundCom, setPointsRoundCom,
        pointsRoundPlayer, setPointsRoundPlayer,
        positivePoint, setPositivePoint,
        positivePointCom, setPositivePointCom,
        progressLoad, setProgressLoad,
        resultComState, setResultComState,
        resultState, setResultState,
        roundsWithoutAttackSpecialCom, setRoundsWithoutAttackSpecialCom,
        roundsWithoutButtonClick, setRoundsWithoutButtonClick,
        selectPlay, setSelectPlay,
        startAction, setStartAction,
        stateCombat, setStateCombat,
        winnerCombat, setWinnerCombat

    }}>{children}</ContextCombat.Provider>
  );
};

export { ContextCombat, MyProviderCombat };

