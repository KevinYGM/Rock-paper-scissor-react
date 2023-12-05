import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';

export const ModalFinalGame = 
({  setOpenModalFinal, 
    stateCombat,
    winnerCombat,
    messageFinal
  }) => {

    /*------States of Component-----------*/
  const [showModalFinal, setShowModalFinal] = useState(false);

  useEffect(() => {
    if (!stateCombat) {
      const timeoutId = setTimeout(() => {
        setShowModalFinal(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [stateCombat]);


   /*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      {showModalFinal && (
      <div className={`modal-final ${!stateCombat ? 'show' : ''}`}>
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