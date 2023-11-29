import './App.css';
import React, { useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


/*Components*/
import { ComponentWelcome } from './components/componentsWelcomePage/ComponentWelcome';
import { ComponentCombat } from './components/componentsCombatPage/ComponentCombat';



function App() {

/*--------------------states generals--------------------------- */
  const [characterPlayer, setCharacterPlayer] = useState(null);
  const [characterCom, setCharacterCom] = useState(null);
  const [counterRock, setCounterRock] = useState(0);
  const [counterPaper, setCounterPaper] = useState(0);
  const [counterScissor, setCounterScissor] = useState(0);
  const [counterRockCom, setCounterRockCom] = useState(0);
  const [counterPaperCom, setCounterPaperCom] = useState(0);
  const [counterScissorCom, setCounterScissorCom] = useState(0);

  

  /*---------------- component JSX structure ---------------------- */ 
  return (
    <BrowserRouter basename="/Rock-paper-scissor-react">
      <Routes>
        <Route  path='/' 
                element={<ComponentWelcome
                                  characterPlayer = { characterPlayer }
                                  setCharacterPlayer = { setCharacterPlayer }
                                  setCharacterCom = { setCharacterCom } 
                                  setCounterRock = { setCounterRock } 
                                  setCounterPaper = { setCounterPaper }
                                  setCounterScissor = { setCounterScissor }
                                  setCounterRockCom = { setCounterRockCom } 
                                  setCounterPaperCom = { setCounterPaperCom }
                                  setCounterScissorCom = { setCounterScissorCom } />}   
                                  />

        <Route  path='/combat' 
                element={<ComponentCombat
                                  characterPlayer = { characterPlayer }
                                  characterCom = { characterCom } 
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
                                  counterScissorCom = { counterScissorCom }/>}  
                                  />

        <Route  path='/welcome' 
                element={<ComponentWelcome
                                  characterPlayer = { characterPlayer }
                                  setCharacterPlayer = { setCharacterPlayer }
                                  setCharacterCom = { setCharacterCom } 
                                  setCounterRock = { setCounterRock } 
                                  setCounterPaper = { setCounterPaper }
                                  setCounterScissor = { setCounterScissor }
                                  setCounterRockCom = { setCounterRockCom } 
                                  setCounterPaperCom = { setCounterPaperCom }
                                  setCounterScissorCom = { setCounterScissorCom }/>}     
                                  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
