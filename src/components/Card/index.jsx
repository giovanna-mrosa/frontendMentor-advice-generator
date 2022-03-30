import React from "react";
import dividerImgDesk from '../../assets/pattern-divider-desktop.svg'
import dividerImgMob from '../../assets/pattern-divider-mobile.svg'
import diceImg from '../../assets/icon-dice.svg'

import './styles.scss'

export function Card(){
  return (
    <div className="container">
      <div className="card-box">
        <h1 className="title">ADVICE &#x00023; 117</h1>
        <p className="quote">
          "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        </p>
        <img src={window.screen.width > 768 ? dividerImgDesk : dividerImgMob} alt="Divider" />
        <button className="dice">
          <img src={diceImg} alt="Dice icon" />
        </button>
      </div>
    </div>
  )
}