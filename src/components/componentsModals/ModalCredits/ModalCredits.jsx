import React, { useState } from 'react';
import './ModalCredits.css'
import { CreditsCreator } from './SectionsCredits/CreditsCreator';
import { CreditsCharacters } from './SectionsCredits/CreditsCharacters';
import { CreditsSounds } from './SectionsCredits/CreditsSounds';


const creditsCreatorVar = () => <CreditsCreator />;
const creditsCharacterVar = () => <CreditsCharacters />;
const creditsSoundsVar = () => <CreditsSounds />;


export const ModalCredits = ({openModalCredits}) => {

  const [selectedTab, setSelectedTab] = useState(null);

  const tabComponents = {
    creditsCreatorVar,
    creditsCharacterVar,
    creditsSoundsVar
  };

  const showTab = (tab) => {
    const TabComponent = tabComponents[tab];
    return <TabComponent />;
  };


  return(
    <div className={`modal-credits modal-IC ${openModalCredits ? 'show' : ''}`}>
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