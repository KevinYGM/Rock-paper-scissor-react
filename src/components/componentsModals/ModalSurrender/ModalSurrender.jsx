import React from 'react';
import { Link } from 'react-router-dom';
import './ModalSurrender.css';


export const ModalSurrender = ({ 
  openModalSurrender, 
  setOpenModalSurrender, 
  setOpenModalFinal }) => {

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
                      onClick={()=> {
                            setOpenModalFinal(true);
                            setOpenModalSurrender(false)}}>
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
