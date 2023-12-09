import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ModalSurrender.css';
import { MyGeneralContext } from '../../../MyGeneralContext';
import { ContextCombat } from '../../../ContextCombat';


export const ModalSurrender = ({ openModalSurrender, setOpenModalSurrender }) => {

  /*--------------Data imported from useContext-------------------------*/
  const { characterCom } = useContext(MyGeneralContext);

  const { setOpenModalFinal,
          setWinnerCombat,
          setMessageFinal,
          setStateCombat} = useContext(ContextCombat);

  /*------------------State for the Component---------------------------------- */
  const [showModalSurrender, setShowModalSurrender] = useState(false);

/*-----------Functions that contribute to the logic of this Component-------------------- */

  const surrender = () => {
    setWinnerCombat(characterCom);
    setMessageFinal("🏳️ YOU GAVE UP 🏳️");
    setOpenModalFinal(true);
    setOpenModalSurrender(false);
    setStateCombat(false);
  }

  /*---------- useEffects that contribute to the Design and Effects of this Component----------*/

  useEffect(() => {
    if (openModalSurrender) {
      const timeoutId = setTimeout(() => {
        setShowModalSurrender(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [openModalSurrender]);


/*---------------- component JSX structure ---------------------- */  
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
