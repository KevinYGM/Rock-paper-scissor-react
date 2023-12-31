import React from 'react'

import socialMedia from '../../../../images/credits-images/social-medias.png'

import tech from '../../../../images/credits-images/techs.png'

export const CreditsCreator = () => {

  const scrollToSection = () => {
    const element = document.getElementById('social-media');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='credits-creator section-credits'>
      <h3>Kevin González Montenegro </h3>

      <p>Frontend Developer specialized in React.js, for more information, if you are connected from a computer or tablet, check my links available at the bottom of this page.</p>

      <img className='social' onClick={scrollToSection} src={socialMedia} alt="" />

      <h3>Technologies In This Project:</h3>
      <img src={tech} alt="" />

      <h3>Start Year Of This Project:</h3>
      <p className='year'>2023</p>
      
    </div>
  )
}
