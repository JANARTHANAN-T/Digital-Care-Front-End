import React from 'react'
import './BotHeader.css'
import logo from '../../../assert/image/robot.svg'
const BotHeader = () => {
  return (
    <div className='bot-header'>
        <p>Digital Care Bot </p>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default BotHeader