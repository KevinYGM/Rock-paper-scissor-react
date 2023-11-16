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

  
  return (
    <BrowserRouter basename="/Rock-paper-scissor-react">
      <Routes>
        <Route  path='/' 
                element={<ComponentWelcome
                                  characterPlayer = { characterPlayer }
                                  setCharacterPlayer = { setCharacterPlayer }
                                  setCharacterCom = { setCharacterCom } />} 
                                  />

        <Route  path='/combat' 
                element={<ComponentCombat
                                  characterPlayer = { characterPlayer }
                                  characterCom = { characterCom } />}
                                  />

        <Route  path='/welcome' 
                element={<ComponentWelcome
                                  characterPlayer = { characterPlayer }
                                  setCharacterPlayer = { setCharacterPlayer }
                                  setCharacterCom = { setCharacterCom } />} 
                                  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
