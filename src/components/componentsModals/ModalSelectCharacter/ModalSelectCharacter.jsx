import React, { useContext } from 'react';
import './ModalSelectCharacter.css';
import { Link } from 'react-router-dom';
import { MyGeneralContext } from '../../../MyGeneralContext';

export const ModalSelectCharacter = ({openModalCharacter, setOpenModalCharacter}) => {

  /*--------------Data imported from MyContext-------------------------*/
  const { characters, 
          characterPlayer,
          setCharacterCom,
          setCounterRockCom,
          setCounterPaperCom,
          setCounterScissorCom } = useContext(MyGeneralContext);


/*----------functions that contribute to the logic of this Component---------------*/

  const selectCharacterCom = () =>{
    const availablesCharacters = characters.filter((p) => p !== characterPlayer);
    const randomCharacter = availablesCharacters[Math.floor(Math.random() * availablesCharacters.length)];
    setCharacterCom(randomCharacter);
    setCounterRockCom(randomCharacter.powerRock);
    setCounterPaperCom(randomCharacter.powerPaper);
    setCounterScissorCom(randomCharacter.powerScissor);
  }


 /*---------------- component JSX structure ---------------------- */   
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
