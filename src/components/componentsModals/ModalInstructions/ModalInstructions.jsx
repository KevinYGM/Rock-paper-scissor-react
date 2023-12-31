import React, { useState } from 'react';
import './ModalInstructions.css';
import { InstructionsRules } from './SectionsInstructions/InstructionsRules';
import { InstructionsExtraRounds } from './SectionsInstructions/InstructionsExtraRounds';
import { InstructionsPowerSpecial } from './SectionsInstructions/InstructionsPowerSpecial';


const InstructionsRulesVar = () => <InstructionsRules />;
const InstructionsExtraRoundsVar = () => <InstructionsExtraRounds />;
const InstructionsPowerSpecialVar = () => <InstructionsPowerSpecial />;


export const ModalInstructions = ({ openModalInstructions }) => {

  const [selectedTab, setSelectedTab] = useState(null);

  const tabComponents = {
    InstructionsRulesVar,
    InstructionsExtraRoundsVar,
    InstructionsPowerSpecialVar,
  };


   const showTab = (tab) => {
    const TabComponent = tabComponents[tab];
    return <TabComponent />;
  };
  

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