import React from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';

export const ModalFinalGame = ({ openModalFinal, setOpenModalFinal }) => {

  return (
    <>
      {openModalFinal && (
      <div className='modal-final'>
        <span>We're Sorry You Lost</span>
        <Link to= '/welcome'
              onClick={()=> {setOpenModalFinal(false)}}
              >Go back to start</Link>
      </div>

      )}
    </>
  )
}