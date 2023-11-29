import React from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';

export const ModalFinalGame = 
({  setOpenModalFinal, 
    stateCombat,
    winnerCombat,
    messageFinal
  }) => {


   /*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      {!stateCombat && (
      <div className='modal-final'>
        <h2 className="title">{ messageFinal }</h2>
        <div className="img-winner">
          <img src={winnerCombat.winnerPhoto} alt={winnerCombat.name + "Winner"} />
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
  )}