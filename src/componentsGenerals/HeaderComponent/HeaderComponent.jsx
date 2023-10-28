import React from 'react'
import './HeaderComponent.css';

export const HeaderComponent = () => {
  return (
    <header className='header'>

      <span className='brand'>KYGM APP</span>

      <div className='emoji-container'>
        <span className="emoji emoji-rock" data-emoji="🪨" data-emoji-hover="✊🏼"></span>
        <span className="emoji emoji-paper" data-emoji="📄" data-emoji-hover="✋🏼"></span>
        <span className="emoji emoji-scissor" data-emoji="✂️" data-emoji-hover="✌🏼"></span>
      </div>
      
      <span className='configuration'>⚙️</span>
    </header>
  )
}
