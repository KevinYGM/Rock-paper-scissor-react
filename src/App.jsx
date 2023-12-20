import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { MyProviderCombat } from './ContextCombat';

/*Components*/
import { ComponentWelcome } from './components/componentsWelcomePage/ComponentWelcome';
import { ComponentCombat } from './components/componentsCombatPage/ComponentCombat';


function App() {

  
  /*---------------- component JSX structure ---------------------- */ 
  return (
    <BrowserRouter basename="/Rock-paper-scissor-react">
      <Routes>
        <Route  path='/' 
                element={<ComponentWelcome />} />

        <Route  path='/combat' 
                element={
                  <MyProviderCombat>
                    <ComponentCombat />
                  </MyProviderCombat>
                } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
