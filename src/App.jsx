import './App.css';
import React, { useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { ComponentWelcome } from './components/componentsWelcomePage/ComponentWelcome';
import { ComponentCombat } from './components/componentsCombatPage/ComponentCombat';



function App() {

  // useEffect(() => {
  //   console.log(characterCom);
  // }, [characterCom]);

/*--------------------states generals--------------------------- */
  const [characterPlayer, setCharacterPlayer] = useState(null);
  const [characterCom, setCharacterCom] = useState(null);
  const [counterRock, setCounterRock] = useState(0);
  const [counterPaper, setCounterPaper] = useState(0);
  const [counterScissor, setCounterScissor] = useState(0);

  
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
                                  setCounterScissor = { setCounterScissor } />}   
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
                                  counterScissor = { counterScissor } />}  
                                  />

        <Route  path='/welcome' 
                element={<ComponentWelcome
                                  characterPlayer = { characterPlayer }
                                  setCharacterPlayer = { setCharacterPlayer }
                                  setCharacterCom = { setCharacterCom } 
                                  setCounterRock = { setCounterRock } 
                                  setCounterPaper = { setCounterPaper }
                                  setCounterScissor = { setCounterScissor }/>}     
                                  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
