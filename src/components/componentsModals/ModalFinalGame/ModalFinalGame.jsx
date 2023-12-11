import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';
import { ContextCombat } from '../../../ContextCombat';


export const ModalFinalGame = () => {

  /*--------------Data imported from MyContext-------------------------*/
  const { setOpenModalFinal, 
          stateCombat,
          winnerCombat,
          messageFinal } = useContext(ContextCombat);
          

/*---------------- component JSX structure ---------------------- */ 
  return (
    <>
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
    </>
  );
};