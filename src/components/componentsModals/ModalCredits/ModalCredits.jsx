/*Generals Imports*/
import React, { useState, useEffect, useRef } from 'react';
import './ModalCredits.css'

/*Components*/
import { CreditsCreator } from './SectionsCredits/CreditsCreator';
import { CreditsCharacters } from './SectionsCredits/CreditsCharacters';
import { CreditsSounds } from './SectionsCredits/CreditsSounds';

/*Variables*/
const creditsCreatorVar = () => <CreditsCreator />;
const creditsCharacterVar = () => <CreditsCharacters />;
const creditsSoundsVar = () => <CreditsSounds />;


export const ModalCredits = ({openModalCredits, setOpenModalCredits}) => {

  /* States and Ref locals of this Component */
  const [selectedTab, setSelectedTab] = useState(null);
  const timerRef = useRef(null);

  const tabComponents = { creditsCreatorVar, creditsCharacterVar, creditsSoundsVar };

/*---------- UseEffects and Functions that contribute to the logic of component-----*/
  const showTab = (tab) => {
    const TabComponent = tabComponents[tab];
    return <TabComponent />;
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById('credits');
  
      if (modal && openModalCredits && !modal.contains(event.target)) {
        setOpenModalCredits(false);
      }
    };
  
    timerRef.current = setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 100);
  
    return () => {
      clearTimeout(timerRef.current);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [openModalCredits, setOpenModalCredits]);



 /*---------------- component JSX structure ---------------------- */
  return(
    <div id='credits' className={`modal-credits modal-IC ${openModalCredits ? 'show' : ''}`}>
       <span className="title-credits modal-IC_title">
          <span>🏅</span> Credits
        </span> 

        <div className="credits-content modal-IC_content">
          {selectedTab ? showTab(selectedTab) : <CreditsCreator />}
        </div>

        <div className="container-sections">
          <button onClick={() => setSelectedTab("creditsCreatorVar")}>Developer 👨🏾‍💻</button>
          <button onClick={() => setSelectedTab("creditsSoundsVar")}>Sounds 🎵</button>
          <button onClick={() => setSelectedTab("creditsCharacterVar")}>Others ➕</button>
        </div>
    </div>
  );
}