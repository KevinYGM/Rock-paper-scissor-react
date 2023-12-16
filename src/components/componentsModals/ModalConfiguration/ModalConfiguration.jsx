import React, { useContext } from 'react';
import './ModalConfiguration.css';
import { MyGeneralContext } from '../../../MyGeneralContext';


export const ModalConfiguration = ({ openModalConfiguration }) => {

/*--------------Data imported from useContext-------------------------*/
const { adjustVolume,
        adjustVolumeMusic,
        volumeMusic,
        volumeSounds
      } = useContext(MyGeneralContext);

/*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      <div className={`modal-configuration modal-IC ${openModalConfiguration ? 'show' : ''}`}>
        <span className="title-configuration modal-IC_title">
          <span>⚙️</span>
          configuration
        </span>
      
        <div className="configuration-content modal-IC_content">
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
        </div>    
      </div>
    </>
  );
};
