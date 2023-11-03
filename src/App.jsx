import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { HeaderComponent } from './componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from './componentsGenerals/FooterComponent/FooterComponent';
import { ComponentWelcome } from './componentsWelcomePage/ComponentWelcome';
import { ComponentCombat } from './componentsCombatPage/ComponentCombat';



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
