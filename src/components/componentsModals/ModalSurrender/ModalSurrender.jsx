import React from 'react';
import { Link } from 'react-router-dom';
import './ModalSurrender.css';


export const ModalSurrender = ({ 
  characterCom,
  openModalSurrender, 
  setOpenModalSurrender, 
  setOpenModalFinal,
  setWinnerCombat,
  setMessageFinal,
  setStateCombat
}) => {

  const surrender = () => {
    setWinnerCombat(characterCom);
    setMessageFinal("🏳️ YOU GAVE UP 🏳️");
    setOpenModalFinal(true);
    setOpenModalSurrender(false);
    setStateCombat(false);
  }

  return (
    <>
      {openModalSurrender && 
        (<div className="modal-surrender modal-IC">
            <strong className="title-surrender">
              <strong>🏳️</strong>
              Surrender
            </strong>
            <div className="content-surrender">
              <p>Are you sure you want to give up?</p>
              <div className="container-buttons-surrender">
                <Link className="surrender-yes surrender-button"
                      onClick={surrender}>
                        Yes
                </Link>
                <Link className="surrender-no surrender-button"
                        onClick={()=> {setOpenModalSurrender(false)}}>
                  No
                </Link>
              </div>
            </div>
          </div>)
        }
    </> 
  )
}
