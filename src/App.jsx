import './App.css';
import React from 'react';
import { HeaderComponent } from './componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from './componentsGenerals/FooterComponent/FooterComponent';
import { Title } from './componentsWelcomePage/Title/Title';
import { SelectCharacter } from './componentsWelcomePage/SelectCharacter/SelectCharacter';
import { StartGame } from './componentsWelcomePage/StartGame/StartGame';



/*importaciones de personajes*/

import melissaPaper from './images/character-blue-paper.png';
import williamRock from './images/character-yellow-rock.png';
import jamesScissor from './images/character-red-scissor.png';
import backPaper from './images/paper.png';
import backScissor from './images/scissor.png';
import backRock from './images/rock.png';




function App() {

  const characters = [
    {
      name: "William Rock",
      type: "Rock",
      photo: williamRock,
      iconType: "✊🏼",
      imageType: backRock,
      description: "Williams is a Rock type character, every time He wins a round using Rock, you will earn double points."
    },

    {
      name: "Melissa Paper",
      type: "Paper",
      photo: melissaPaper,
      iconType: "✋🏼",
      imageType: backPaper,
      description: "Melissa is a Paper type character, every time She wins a round using Paper, you will earn double points."
    },

    {
      name: "James Scissor",
      type: "Scissor",
      photo: jamesScissor,
      iconType: "✌🏼",
      imageType: backScissor,
      description: "James is a Scissors type character, every time He wins a round using Scissors, you will earn double points."
    }
  ]


  return (
    <>
      <HeaderComponent />
      <div className="main-zone">
        <Title />

        <SelectCharacter
              characters = { characters } />
        <StartGame />
      </div>
      <FooterComponent />
  </>
  );
}

export default App;
