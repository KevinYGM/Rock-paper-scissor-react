import React from 'react'
import vecteezy from '../../../../images/credits-images/vecteezy.png'
import fotor from '../../../../images/credits-images/fotor.png'
import canva from '../../../../images/credits-images/canva.webp'

export const CreditsCharacters = () => {
  return (
    <div className='credits-characters section-credits'>
      <h3>Design Characters:</h3>
      <a href="https://www.fotor.com/" target="_blank" rel="noreferrer"><img src={fotor} alt="" /></a>

      <h3>Design Of Some Elements:</h3>
      <a href="https://www.canva.com/" target="_blank" rel="noreferrer"><img src={canva} alt="" /></a>

      <h3>Imported Items:</h3>
      <a href="https://es.vecteezy.com/" target="_blank" rel="noreferrer"><img src={vecteezy} alt="" /></a>
    </div>
  )
}
