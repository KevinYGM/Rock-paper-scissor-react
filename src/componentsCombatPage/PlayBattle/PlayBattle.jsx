import React, { useEffect, useState} from 'react';
import './PlayBattle.css';
import frame from '../../images/frame-vector.png';
import scissorPlayer from '../../images/scissor-play-player.png';
import paperPlayer from '../../images/paper-play-player.png';
import rockPlayer from '../../images/rock-play-player.png';
import scissorCom from '../../images/scissor-play-com.png';
import paperCom from '../../images/paper-play-com.png';
import rockCom from '../../images/rock-play-com.png';

export const PlayBattle = ({ characters }) => {
  const [images, setImages] = useState([rockPlayer, paperPlayer, scissorPlayer]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesCom, setImagesCom] = useState([scissorCom, rockCom, paperCom]);


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
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 200);
  
      return () => {
        clearInterval(animationInterval);
      };
    }, [images, imagesCom]);




  return (
    <div  className='play-battle-container'>
       {/*--------------Character Player--------------*/}
      <div className="character-player character">
        <img src={characters[0].photo} alt={characters[0].name} />
      </div> 
      

      {/*--------------Play Zone--------------*/} 
      <div className="play-player play">
        <img src={images[currentImageIndex]} alt="" />
      </div>

      <div className="interactive-up">
        <span>Round</span>
        <span>10</span>
      </div>

      <div className="play-com play">
        <img src={imagesCom[currentImageIndex]} alt="" />
      </div>
      

     {/*--------------Character Com--------------*/} 
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
