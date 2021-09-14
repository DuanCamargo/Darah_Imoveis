import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./components/options";
import {FaRobot} from 'react-icons/fa'
import { FaUserAlt} from 'react-icons/fa'


const config = {
  botName: "Robot Ôh de casa",
  lang: "pt-br",
  customComponents: {
   
   
   header: () => <div style={{backgroundColor:"rgb(208 200 200)", padding: "5px", color: "#000", textAlign:"center" }}>Robot Ôh de casa</div>,
  
   botAvatar: (props) => <FaRobot {...props} style={{ width:"25px", height: "30px", borderRadius:"50%"}}/>,
  
   userAvatar: (props) => <FaUserAlt {...props} style={{ width:"25px",marginLeft:"10px", height: "30px", borderRadius:"50%"}} />,
  
 },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#f2be38",
    },
  },
  initialMessages: [
    createChatBotMessage(`Olá tudo bem?`, {
    }),
    createChatBotMessage(`Serei o seu assistente virtual da Ôh de casa, selecione qual das alternativas abaixo lhe ajudaria :D`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
     
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;