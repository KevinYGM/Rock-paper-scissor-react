/*Generals Imports*/
import React, { useContext, useEffect } from 'react';
import './ModalPreview.css';
import { MyGeneralContext } from '../../../MyGeneralContext';
import { ContextCombat } from '../../../ContextCombat';

/*Images*/
import vs from '../../../images/interfaz-images/vs.png'



export const ModalPreview = () => {
/*--------------Data imported from useContext------------------*/
  const { characterPlayer, characterCom } = useContext(MyGeneralContext);
  const { setIsActivateCount, loading, setLoading, progressLoad, setProgressLoad } = useContext(ContextCombat);
  

/*UseEffect and functions that Contribuye with the logic of this component*/

  useEffect(() => {
    if(progressLoad < 10){
    const animationInterval = setInterval(() => {
        setProgressLoad((prevIndex) => (prevIndex + 1));
      }, 700);
  
      return () => {
        clearInterval(animationInterval);
      };
    }else{
      setLoading(false);
      setIsActivateCount(true);
    }
    // eslint-disable-next-line
  }, [loading, progressLoad]);



const renderProgressBarSpecial = (reference) => {
    const validReference = Math.min(Math.max(reference, 0), 10);

    const calculatedHeight = validReference * 10 + '%';

    return calculatedHeight;
  };

  
/*---------------- component JSX structure ---------------------- */   
  return (
    <>
      <div className= {`modal-preview ${loading ? 'show' : 'show'}`}>
        <div className="frame-preview">
          <div className="player">
            <span className="name">{characterPlayer.name}</span>
            <img src={characterPlayer.photo} alt="" />
          </div>
          <div className="vs">
            <img src={vs} alt="" />
            <div className="text-progress">Loading...</div>
          </div>
          <div className="com">
            <span className="name">{characterCom.name}</span>
            <img src={characterCom.photo} alt="" />
          </div>
          <div className="bar-charger-container">
            <div className="bar-charger">
              <div  className="bar"
                    style={{width: renderProgressBarSpecial(progressLoad)}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
    
    
  )
}
