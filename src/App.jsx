import './App.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { ComponentWelcome } from './components/componentsWelcomePage/ComponentWelcome';
import { ComponentCombat } from './components/componentsCombatPage/ComponentCombat';



function App() {

  const [characterPlayer, setCharacterPlayer] = useState(0);
  const [characterCom, setCharacterCom] = useState(0);

  
  return (
    <BrowserRouter basename="/Rock-paper-scissor-react">
      <Routes>
        <Route  path='/' 
                element={<ComponentWelcome
                                  characterPlayer = { characterPlayer }
                                  setCharacterPlayer = { setCharacterPlayer }
                                  characterCom = { characterCom }
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
                                  characterCom = { characterCom }
                                  setCharacterCom = { setCharacterCom } />} 
                                  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
