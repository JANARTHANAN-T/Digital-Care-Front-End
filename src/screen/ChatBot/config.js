import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Our Medical Bot",
  initialMessages: [
    createChatBotMessage(`Hello... How may I help you?`)
  ],
};

export default config;