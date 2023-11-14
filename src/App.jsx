import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { ComponentWelcome } from './components/componentsWelcomePage/ComponentWelcome';
import { ComponentCombat } from './components/componentsCombatPage/ComponentCombat';



function App() {




  // basename="/Rock-paper-scissor-react" (para despliegue en gh-pages)
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ComponentWelcome />} />
        <Route path='/combat' element={<ComponentCombat />} />
        <Route path='/welcome' element={<ComponentWelcome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
