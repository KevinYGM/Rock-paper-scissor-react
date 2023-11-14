import React from 'react'
import { Title } from './Title/Title';
import { SelectCharacter } from './SelectCharacter/SelectCharacter';
import { StartGame } from './StartGame/StartGame';
import { characters } from '../../data/charactersData';
import { HeaderComponent } from '../componentsGenerals/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../componentsGenerals/FooterComponent/FooterComponent';

export const ComponentWelcome = 
({characterPlayer, 
  setCharacterPlayer}) => {

  return (
    <div className='container-welcome'>
      <HeaderComponent />
      <div className="welcome-page">
          <Title />

          <SelectCharacter
                characters = { characters }
                characterPlayer = { characterPlayer }
                setCharacterPlayer = { setCharacterPlayer } />
                
          <StartGame
                characters = { characters }
                characterPlayer = { characterPlayer } />
      </div>
      <FooterComponent />
    </div>
  )
}
