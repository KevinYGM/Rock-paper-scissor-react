import React, { useEffect } from 'react';
import './ModalSelectCharacter.css';
import { Link } from 'react-router-dom';

export const ModalSelectCharacter = 
({  characters, 
    characterPlayer,
    setCharacterCom,
    openModalCharacter,
    setOpenModalCharacter
}) => {

  const selectCharacterCom = () =>{
    const availablesCharacters = characters.filter((p) => p !== characterPlayer);
    const randomCharacter = availablesCharacters[Math.floor(Math.random() * availablesCharacters.length)];
    setCharacterCom(randomCharacter);
  }

  // useEffect(() => {
  //   console.log(characterPlayer);
  // }, [characterPlayer]);

  return (
    <>
      {openModalCharacter && (
      <div className='modal-select-character'>
        <div className="title-modal">
          <span>⚔️</span>
          <span>Selected Character</span>
        </div>
        <div className="img-selected-character">
          <img src={characterPlayer.photo} alt={ characterPlayer.name } />
        </div>
        <div className='name-modal-character'>
          {characterPlayer.name}
        </div>
        <div className="container-buttons">
          <Link to= '/combat'
                onClick= { selectCharacterCom }
              >Confirm</Link>

          <Link onClick= {()=>{setOpenModalCharacter(false)}}
              >Back</Link>
        </div>
      </div>
      )} 
    </>
  )
}
