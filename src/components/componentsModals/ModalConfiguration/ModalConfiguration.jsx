import React, { useContext, useState } from 'react';
import './ModalConfiguration.css';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*Sounds*/
import paperRecord from '../../../sounds/handle-paper.mp3';


export const ModalConfiguration = ({ openModalConfiguration }) => {

/*--------------Data imported from useContext-------------------------*/
const { adjustVolume,
        adjustVolumeMusic,
        setRecordLose,
        setRecordVictory,
        volumeMusic,
        volumeSounds
      } = useContext(MyGeneralContext);

 /*-------------local States and Refs of this Component----------------------*/

 const [restartRecord, setRestartRecord] = useState(false);


/*---------- Function that contribute to the logic of component----------*/

const restartRecordFunction = () => {
  const audioPaper = new Audio(paperRecord);
  audioPaper.current = 0;
  audioPaper.volume = volumeSounds / 100;
  audioPaper.play();
  setRestartRecord(false);
  setRecordVictory(0);
  setRecordLose(0);
  localStorage.setItem('recordVictory', '0');
  localStorage.setItem('recordLose', '0');
};


/*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      <div className={`modal-configuration modal-IC ${openModalConfiguration ? 'show' : ''}`}>
        <span className="title-configuration modal-IC_title">
          <span>⚙️</span>
          configuration
        </span>
      
        <div className="configuration-content modal-IC_content">
          <span className="audio-control">Audio Configuration</span>
          <div className="control-sound-container">
            <h2 className="name-audio name-music">Music 🎵</h2>
            <div className="container-range range-music">
              <input
                type="range"
                min="0"
                max="100"
                value={volumeMusic}
                onChange={(e) => adjustVolumeMusic(e.target.value)}
              />
              </div>
             <div className="number-volume volume-music">{volumeMusic + "%"}</div>
            
            
            <h2 className="name-audio name-sounds">Sounds 🔊</h2>
            <div className="container-range range-sounds">
              <input
                type="range"
                min="0"
                max="100"
                value={volumeSounds}
                onChange={(e) => adjustVolume(e.target.value)}
              />
            </div>
            <div className="number-volume volume-sounds">{volumeSounds + "%"}</div>
          </div>
          {!restartRecord ?
          (<>
              <span className="restart-record"> Record Configuration</span>
              <button 
                  className="btn-restart-record"
                  onClick={() => {setRestartRecord(true); 
                                  console.log(restartRecord)}}>Restart Record</button>
                              </>)
          :
          (<>
            <span className="restart-record"> Are You Sure?</span>
            <div className="container-btn-record">
              <button 
                  className="btn-confirm-yes"
                  onClick={ restartRecordFunction }>Yes, Restart</button>
              <button 
                  className="btn-confirm-no"
                  onClick={() => {setRestartRecord(false)}}>No, Go Back</button>
            </div>
                            </>)}
        </div>    
      </div>
    </>
  );
};
