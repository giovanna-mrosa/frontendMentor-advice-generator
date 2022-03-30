import React, { useEffect, useState } from "react";
import api from '../../sevices/api'
import dividerImgDesk from '../../assets/pattern-divider-desktop.svg'
import dividerImgMob from '../../assets/pattern-divider-mobile.svg'
import diceImg from '../../assets/icon-dice.svg'

import './styles.scss'

export function Card(){
  const [advice, setAdvice] = useState()

  async function getAdvice() {
    const response = await api.get('/advice')

    setAdvice(response.data.slip)
  }

  useEffect(() => {
    getAdvice()
  }, [])  

  return (
    <div className="container">
      <div className="card-box">
        <h1 className="title">ADVICE &#x00023; {advice?.id}</h1>
        <p className="quote">{advice?.advice}</p>
        <img src={window.screen.width > 768 ? dividerImgDesk : dividerImgMob} alt="Divider" className="divider" />
        <button onClick={getAdvice} className="dice">
          <img src={diceImg} alt="Dice icon" />
        </button>
      </div>
    </div>
  )
}