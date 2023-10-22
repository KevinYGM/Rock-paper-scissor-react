import './App.css';
import React from 'react';
import { HeaderComponent } from './componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from './componentsGenerals/FooterComponent/FooterComponent';
import { Title } from './componentsWelcomePage/Title/Title';
import { SelectCharacter } from './componentsWelcomePage/SelectCharacter/SelectCharacter';
import { StartGame } from './componentsWelcomePage/StartGame/StartGame';

function App() {
  return (
    <>
      <HeaderComponent />
      <Title />
      <div className="mixt-zone">
        <SelectCharacter />
        <StartGame />
      </div>
      <FooterComponent />
  </>
  );
}

export default App;
