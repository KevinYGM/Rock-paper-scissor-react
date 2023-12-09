import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';
import { ContextCombat } from '../../../ContextCombat';

export const ModalFinalGame = 
() => {

  /*--------------Data imported from MyContext-------------------------*/
  const { setOpenModalFinal, 
          stateCombat,
          winnerCombat,
          messageFinal } = useContext(ContextCombat);

  /*------Local States of this Component-----------*/
  const [showModalFinal, setShowModalFinal] = useState(false);

  
  /*---------- useEffects that contribute to the Design and Effects of this Component----------*/
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