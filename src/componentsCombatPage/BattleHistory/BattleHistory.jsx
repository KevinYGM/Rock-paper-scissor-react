import React, { useState, useEffect, useRef } from 'react';
import './BattleHistory.css';
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from "react-icons/ri";

export const BattleHistory = ({ referenceHeight }) => {
  const [visible, setVisible] = useState(false); //state to control the effect of moving from the section

  const toggleDiv = () => {
    setVisible(!visible);
  }

  const absoluteElementRef = useRef();

  useEffect(() => {
    if(absoluteElementRef.current && referenceHeight ){
      absoluteElementRef.current.style.height = `${referenceHeight}px`;
    }
  })

  return (
     <div className={`battle-history ${visible ? 'visible' : ''}`}
          ref={absoluteElementRef}>
      <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aliquid quaerat esse quisquam sequi, reiciendis laborum quo animi illum nostrum minima cum aperiam earum accusantium fuga veniam temporibus? Consectetur, vitae?
      </div>
      <div className="tab" onClick={toggleDiv}>
        <span className="visible-tab">{visible ? <RiArrowLeftDoubleFill /> : <RiArrowRightDoubleFill /> }</span>
      </div>
    </div>
  );
}
