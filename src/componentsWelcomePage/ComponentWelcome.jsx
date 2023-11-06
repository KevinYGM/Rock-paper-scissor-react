import React from 'react'
import { Title } from './Title/Title';
import { SelectCharacter } from './SelectCharacter/SelectCharacter';
import { StartGame } from './StartGame/StartGame';
import { characters } from '../data/charactersData';

export const ComponentWelcome = () => {
  return (
    <div className="welcome-page">
        <Title />

        <SelectCharacter
              characters = { characters } />
              
        <StartGame />
    </div>
  )
}
