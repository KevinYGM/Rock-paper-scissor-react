/*Generals Imports*/
import React, { useState, useEffect, useRef } from 'react';
import './ModalInstructions.css';

/*Components*/
import { InstructionsRules } from './SectionsInstructions/InstructionsRules';
import { InstructionsExtraRounds } from './SectionsInstructions/InstructionsExtraRounds';
import { InstructionsPowerSpecial } from './SectionsInstructions/InstructionsPowerSpecial';


/*Variables*/
const InstructionsRulesVar = () => <InstructionsRules />;
const InstructionsExtraRoundsVar = () => <InstructionsExtraRounds />;
const InstructionsPowerSpecialVar = () => <InstructionsPowerSpecial />;


export const ModalInstructions = ({ openModalInstructions, setOpenModalInstructions }) => {

  /* States and Ref locals of this Component */
  const [selectedTab, setSelectedTab] = useState(null);
  const timerRef = useRef(null);
  const tabComponents = {InstructionsRulesVar, InstructionsExtraRoundsVar, InstructionsPowerSpecialVar,
  };


  /*---------- UseEffects and Functions that contribute to the logic of component-----*/

  const showTab = (tab) => {
    const TabComponent = tabComponents[tab];
    return <TabComponent />;
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById('instructions');

      if (modal && openModalInstructions && !modal.contains(event.target)) {
        setOpenModalInstructions(false);
      }
    };

    timerRef.current = setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 100);

    return () => {
      clearTimeout(timerRef.current);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [openModalInstructions, setOpenModalInstructions]);



  /*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      <div id="instructions" className={`modal-instructions modal-IC ${openModalInstructions ? 'show' : ''}`}>
        <span className="title-instructions modal-IC_title">
          <span>📚</span> Instructions
        </span>
        
        <div className="instructions-content modal-IC_content">
          {selectedTab ? showTab(selectedTab) : <InstructionsRules />}
        </div>

        <div className="container-sections">
          <button onClick={() => setSelectedTab("InstructionsRulesVar")}>General Rules 📐</button>
          <button onClick={() => setSelectedTab("InstructionsExtraRoundsVar")}>Extra Rounds ➕</button>
          <button onClick={() => setSelectedTab("InstructionsPowerSpecialVar")}>Power Special ⚡</button>
        </div>
      </div>
    </>
  );
};