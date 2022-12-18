import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvator from './BotAvator/BotAvator';
import BotHeader from './BotHeader/BotHeader';
import Answer from './Answer/Answer';

const config = {

  initialMessages: [createChatBotMessage('How can I Help you ??')],
  botName:"StackBot",
  customComponents :{
    header: (props) => <BotHeader {...props} />,
    botAvatar:(props) => <BotAvator {...props} />,
  },
  customStyles :{
    botMessageBox:{
        backgroundColor:'#1385ae'
    },
    chatButton:{
        backgroundColor:'#1385ae'
    }
  },
  state:{
    ans:''
  },
  
 widgets:[ 
  {
    widgetName: 'answer',
    widgetFunc: (props) => <Answer {...props} />,
    mapStateToProps: ['ans'],
  }
]

}

export default config