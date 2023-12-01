/*-----------------------Images Play-----------------------------------*/
import scissorPlayer from '../images/interfaz-images/scissor-play-player.png';
import paperPlayer from '../images/interfaz-images/paper-play-player.png';
import rockPlayer from '../images/interfaz-images/rock-play-player.png';
import scissorCom from '../images/interfaz-images/scissor-play-com.png';
import paperCom from '../images/interfaz-images/paper-play-com.png';
import rockCom from '../images/interfaz-images/rock-play-com.png';

export const playsDataPlayer = [
  {
    name: "Rock Player",
    photo: rockPlayer,
    icon: "✊🏼",
    alternativeIcon: "🪨",
    nameType: "rock"
  },

  {
    name: "Paper Player",
    photo: paperPlayer,
    icon: "✋🏼",
    alternativeIcon: "📄",
    nameType: "paper"
  },

  {
    name: "Scissor Player",
    photo: scissorPlayer,
    icon: "✌🏼",
    alternativeIcon: "✂️",
    nameType: "scissor"
  }
];


export const playsDataCom = 
(counterRockCom, counterPaperCom, counterScissorCom) => ([
  {
    name: "Scissor Com",
    photo: scissorCom,
    icon: "✌🏼",
    alternativeIcon: "✂️",
    nameType: "scissor",
    counter: counterScissorCom
  },
  
  {
    name: "Rock Com",
    photo: rockCom,
    icon: "✊🏼",
    alternativeIcon: "🪨",
    nameType: "rock",
    counter: counterRockCom
  },

  {
    name: "Paper Com",
    photo: paperCom,
    icon: "✋🏼",
    alternativeIcon: "📄",
    nameType: "paper",
    counter: counterPaperCom
  }
]);