import React from 'react'
import './ChatBot.css'
import Chatbot from 'react-chatbot-kit'
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import 'react-chatbot-kit/build/main.css';
import chatbot from '../../assert/image/chatbot.png'


function ChatBot() {
  return (
    <div className='container'>
    <div className='row my-4 d-flex align-items-center '>
        <div className="col-md-6">
            <img src={chatbot} alt=""  className='bot-img img-fluid'/>
            <p className='fs-5 text-center m-4'>Here is our<span className='text-primary fw-bold'> Medical bot</span> We will guide you in any way...</p> 
        </div>
          <div className="col-md-6 d-flex justify-content-center">
              <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
          </div>
        </div>
    </div>
  )
}

export default ChatBot