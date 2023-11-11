import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { HeaderComponent } from './components/componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from './components/componentsGenerals/FooterComponent/FooterComponent';
import { ComponentWelcome } from './components/componentsWelcomePage/ComponentWelcome';
import { ComponentCombat } from './components/componentsCombatPage/ComponentCombat';



function App() {

 return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComponentWelcome />} />
          <Route path='/combat' element={<ComponentCombat />} />
          <Route path='/welcome' element={<ComponentWelcome />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </>
  );
}

export default App;
