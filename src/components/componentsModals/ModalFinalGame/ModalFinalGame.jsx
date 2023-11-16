import React from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';

export const ModalFinalGame = 
({  openModalFinal, 
    setOpenModalFinal, 
    characterPlayer,
    characterCom}) => {

  return (
    <>
      {openModalFinal && (
      <div className='modal-final'>
        <h2 className="title">💔 We're Sorry You Lost 💔</h2>
        <div className="img-winner">
          <img src={characterCom.winnerPhoto} alt={characterCom.name + "Winner"} />
        </div>
        <div className="container-buttons">
          <Link to= '/welcome'
                onClick={()=> {setOpenModalFinal(false)}}
                >Go Back To Start</Link>
          <Link>Play Again</Link>
        </div>
      </div>

      )}
    </>
  )
}