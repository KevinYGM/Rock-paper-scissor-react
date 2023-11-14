import './App.css';
import React, { useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { ComponentWelcome } from './components/componentsWelcomePage/ComponentWelcome';
import { ComponentCombat } from './components/componentsCombatPage/ComponentCombat';



function App() {

  const [characterPlayer, setCharacterPlayer] = useState(0);


  return (
    <BrowserRouter basename="/Rock-paper-scissor-react">
      <Routes>
        <Route  path='/' 
                element={<ComponentWelcome
                                  characterPlayer = { characterPlayer }
                                  setCharacterPlayer = { setCharacterPlayer } />} />

        <Route  path='/combat' 
                element={<ComponentCombat
                                  characterPlayer = { characterPlayer }/>}
                                   />

        <Route  path='/welcome' 
                element={<ComponentWelcome
                                  characterPlayer = { characterPlayer }
                                  setCharacterPlayer = { setCharacterPlayer }/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
