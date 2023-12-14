import React from 'react';
import './ModalConfiguration.css';


export const ModalConfiguration = ({ openModalConfiguration }) => {

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
            <audio /*ref={bgMusicRef}*/ src="ruta_de_tu_musica_de_fondo.mp3" autoPlay loop />
            <div className="container-range range-music">
              <input
                type="range"
                min="0"
                max="100"
              // {bgMusicVolume}
              // onChange={handleBgMusicVolumeChange}
              />
              </div>
             <div className="number-volume volume-music">0</div>
            
            
            <h2 className="name-audio name-sounds">Sounds 🔊</h2>
            <audio /*ref={gameSoundsRef}*/ src="ruta_de_tus_sonidos_de_juego.mp3" autoPlay />
            <div className="container-range range-sounds">
              <input
                type="range"
                min="0"
                max="100"
                // value={gameSoundsVolume}
                // onChange={handleGameSoundsVolumeChange}
              />
            </div>
            <div className="number-volume volume-sounds">0</div>
          </div>
        </div>    
      </div>
    </>
  );
};
