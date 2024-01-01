/*Generals Imports*/
import { createContext, useState } from 'react';

/*Data*/
import { playsDataPlayer, playsDataCom  } from './data/playData';
import { characters } from './data/charactersData';


const MyGeneralContext = createContext();


const MyProviderContext = ({ children }) => {

   /*------------------States Generals (Alphabetical Order)------------------------ */
   const [characterCom, setCharacterCom] = useState({});
   const [characterPlayer, setCharacterPlayer] = useState({});
   const [counterPaper, setCounterPaper] = useState(0);
   const [counterPaperCom, setCounterPaperCom] = useState(0);
   const [counterRock, setCounterRock] = useState(0);
   const [counterRockCom, setCounterRockCom] = useState(0);
   const [counterScissor, setCounterScissor] = useState(0);
   const [counterScissorCom, setCounterScissorCom] = useState(0);
   const [recordVictory, setRecordVictory] = useState(0);
   const [recordLose, setRecordLose] = useState(0);
   const [userIsActive, setUserIsActive] = useState(false);
   const [volumeSounds, setVolumeSounds] = useState(50);
   const [volumeMusic, setVolumeMusic] = useState(50);

  /*------------------Functions Generals------------------------------------------ */
 
 
   const adjustVolume = (newVolume) => {
     setVolumeSounds(newVolume);
   };
 
   const adjustVolumeMusic = (newVolumeMusic) => {
     setVolumeMusic(newVolumeMusic);
   } 
 

  /*--------------------Sounds Generals (Alphabetical Order)--------------------------- */
 
  return(
    <MyGeneralContext.Provider 
      value={{ 
      /*----------------------Data (Alphabetical Order)------------------------------------*/
        characters,
        playsDataCom,
        playsDataPlayer, 
      /*--------------------States Generals (Alphabetical Order)--------------------------- */
        characterCom, setCharacterCom,
        characterPlayer, setCharacterPlayer,
        counterPaper, setCounterPaper,
        counterPaperCom, setCounterPaperCom,
        counterRock, setCounterRock,
        counterRockCom, setCounterRockCom,
        counterScissor, setCounterScissor,
        counterScissorCom, setCounterScissorCom,
        recordLose, setRecordLose,
        recordVictory, setRecordVictory,
        userIsActive, setUserIsActive,
        volumeSounds, setVolumeSounds,
        volumeMusic, setVolumeMusic,

        /* Functions */

        adjustVolume, adjustVolumeMusic
      
    }}>{children}</MyGeneralContext.Provider>
  );
};

export { MyGeneralContext, MyProviderContext };

