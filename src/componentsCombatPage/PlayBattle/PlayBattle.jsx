import React, { useEffect, useRef } from 'react';
import './PlayBattle.css';
import frame from '../../images/frame-vector.png';

export const PlayBattle = ({characters, setReferenceHeight}) => {
  const referenceElement = useRef();

  useEffect(() =>{
    if (referenceElement.current){
      setReferenceHeight(referenceElement.current.clientHeight)
    }
  }, [setReferenceHeight]);


  return (
    <div  className='play-battle-container'
          ref={referenceElement}>
            
      <div className="character-player character">
        <img src={characters[0].photo} alt={characters[0].name} />
      </div>
      <div className="play-player play"><span>✌🏼</span></div>
      <div className="play-com play"><span>✋🏼</span></div>
      <div className="character-com character">
        <img src={characters[1].photo} alt={characters[1].name} />
      </div>
      <div className="interactive-section">
        <div className="frame-container">
          <img src={frame} alt="frame" />
        </div>
        <span>You Win 1 Point!!</span>
      </div>
    </div>
  )
}
