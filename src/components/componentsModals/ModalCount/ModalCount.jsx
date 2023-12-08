import React, {useState, useEffect} from 'react';
import './ModalCount.css';

/*Sounds*/
import countSound from '../../../sounds/three-two-one.mp3';

export const ModalCount = ({isActivateCount, setIsActivateCount}) => {

  const initialCount = ["3", "2", "1", "FIGHT!", "FINISH"];


  const [currentCountIndex, setCurrentCountIndex] = useState(0);



  useEffect(() => {
    if(isActivateCount){
      const animationInterval = setInterval(() => {
        setCurrentCountIndex((prevIndex) => (prevIndex + 1) % initialCount.length);
      }, 1000);

      const audio = new Audio(countSound);
      audio.play();
    
      return () => {
        clearInterval(animationInterval);
      };
    }; 
// eslint-disable-next-line 
  }, [isActivateCount]);


  useEffect(() => {
    initialCount[currentCountIndex] === "FINISH" && (setIsActivateCount(false));
  // eslint-disable-next-line 
  },[currentCountIndex]);
  
  return (
    <>
      {isActivateCount && (
        <div className='modal-count'>
          <span>{initialCount[currentCountIndex]}</span>
        </div>)}
    </>
  )
}
