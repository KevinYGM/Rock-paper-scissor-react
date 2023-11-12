import React from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';

export const ModalFinalGame = ({ openModalFinal, setOpenModalFinal, characters}) => {

  return (
    <>
      {openModalFinal && (
      <div className='modal-final'>
        <h2 className="title">💔 We're Sorry You Lost 💔</h2>
        <div className="img-winner">
          <img src={characters[1].winnerPhoto} alt={characters[1].name + "Winner"} />
        </div>
        <div className="container-buttons">
          <Link to= '/welcome'
                onClick={()=> {setOpenModalFinal(false)}}
                >Go Back To Start</Link>
          <Link to= '/combat'>Play Again</Link>
        </div>
      </div>

      )}
    </>
  )
}