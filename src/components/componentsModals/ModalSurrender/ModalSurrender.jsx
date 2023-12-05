import React, { useEffect, useState } from 'react';
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

  /*------------------State for the Component---------------------------------- */
  const [showModalSurrender, setShowModalSurrender] = useState(false);

/*------------------Functions for the Component---------------------------------- */

  const surrender = () => {
    setWinnerCombat(characterCom);
    setMessageFinal("🏳️ YOU GAVE UP 🏳️");
    setOpenModalFinal(true);
    setOpenModalSurrender(false);
    setStateCombat(false);
  }

  /*------------------UseEffect for the Component Design---------------------------------- */

  useEffect(() => {
    if (openModalSurrender) {
      const timeoutId = setTimeout(() => {
        setShowModalSurrender(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [openModalSurrender]);

  return (
    <>
      {showModalSurrender && 
        (<div className={`modal-IC modal-surrender ${openModalSurrender ? 'show' : ''}`}>
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
                        onClick={()=> {setOpenModalSurrender(false)
                                      setShowModalSurrender(false)
                                      }}>
                  No
                </Link>
              </div>
            </div>
          </div>)
        }
    </> 
  )
}
