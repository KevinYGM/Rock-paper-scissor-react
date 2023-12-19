import React, { useContext } from 'react';
import './ModalSelectCharacter.css';
import { Link } from 'react-router-dom';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*Sounds*/
import confirmCharacterSound from '../../../sounds/confirmCharacter.mp3';



export const ModalSelectCharacter = ({ openModalCharacter, setOpenModalCharacter }) => {

  /*--------------Data imported from MyContext-------------------------*/
  const { characters, 
          characterPlayer,
          volumeSounds,
          setCharacterCom,
          setCounterRockCom,
          setCounterPaperCom,
          setCounterScissorCom } = useContext(MyGeneralContext);


/*----------functions that contribute to the logic of this Component---------------*/

  const selectCharacterCom = () =>{
    const audioConfirmCharacter = new Audio(confirmCharacterSound);
    audioConfirmCharacter.currentTime = 0;
    audioConfirmCharacter.volume = volumeSounds / 100;
    audioConfirmCharacter.play();

    const availablesCharacters = characters.filter((p) => p !== characterPlayer);
    const randomCharacter = availablesCharacters[Math.floor(Math.random() * availablesCharacters.length)];
    setCharacterCom(randomCharacter);
    localStorage.setItem('characterCom', JSON.stringify(randomCharacter));
    setCounterRockCom(randomCharacter.powerRock);
    localStorage.setItem('counterRockCom', randomCharacter.powerRock.toString());
    setCounterPaperCom(randomCharacter.powerPaper);
    localStorage.setItem('counterPaperCom', randomCharacter.powerPaper.toString());
    setCounterScissorCom(randomCharacter.powerScissor);
    localStorage.setItem('counterScissorCom', randomCharacter.powerScissor.toString());
  }


 /*---------------- component JSX structure ---------------------- */   
 return (
    <>
      <div className= {`modal-select-character ${openModalCharacter ? 'show' : ''}`}>
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
    </>
  );
};
