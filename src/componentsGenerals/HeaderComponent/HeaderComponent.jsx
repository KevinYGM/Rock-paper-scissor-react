import React from 'react'
import './HeaderComponent.css';
import { RxCrumpledPaper } from "react-icons/rx";

export const HeaderComponent = () => {
  return (
    <header className='header'>
      <span className='brand'>KYGM APP</span>
      <span>🪨✂️<RxCrumpledPaper /></span>
      <span className='configuration'>⚙️</span>
    </header>
  )
}
