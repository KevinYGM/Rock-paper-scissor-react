import React, { useEffect, useState} from 'react';
import './PlayBattle.css';
import frame from '../../../images/interfaz-images/frame-vector.png';


export const PlayBattle = 
({  characterPlayer,
    characterCom,
    imagesPlayPlayer,
    setImagesPlayPlayer,
    imagesPlayCom,
    setImagesPlayCom,
}) => {

  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(()=> {
    //function for mousemove animation in character images.
    const characters = document.querySelectorAll('.character');
    
    characters.forEach((character) => {
      character.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX * 3 - rect.left;
        character.style.setProperty('--x', x + 'deg');
      });
    });
    
    }, []);

    
    useEffect(() => {
      // function that controls the animations of the "Play" sections
    const animationInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesPlayPlayer.length);
      }, 200);
  
      return () => {
        clearInterval(animationInterval);
      };
    }, [imagesPlayPlayer, imagesPlayCom]);




  return (
    <div  className='play-battle-container'>
       {/*--------------Character Player--------------*/}
      <div className="character-player character">
        <img src={characterPlayer.photo} alt={characterPlayer.name} />
      </div> 
      

      {/*--------------Play Zone--------------*/} 
      <div className="play-player play">
        <img src={imagesPlayPlayer[currentImageIndex]} alt="" />
      </div>

      <div className="interactive-up">
        <span>Round</span>
        <span>10</span>
      </div>

      <div className="play-com play">
        <img src={imagesPlayCom[currentImageIndex]} alt="" />
      </div>
      

     {/*--------------Character Com--------------*/} 
      <div className="character-com character">
        <img src={characterCom.photo} alt={characterCom.name} />
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
