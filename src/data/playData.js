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
    icon: "✊🏼"
  },

  {
    name: "Paper Player",
    photo: paperPlayer,
    icon: "✋🏼"
  },

  {
    name: "Scissor Player",
    photo: scissorPlayer,
    icon: "✌🏼"
  }
];


export const playsDataCom = 
(counterRockCom, counterPaperCom, counterScissorCom) => ([
  {
    name: "Scissor Com",
    photo: scissorCom,
    icon: "✌🏼",
    counter: counterScissorCom,
  },
  
  {
    name: "Rock Com",
    photo: rockCom,
    icon: "✊🏼",
    counter: counterRockCom,
  },

  {
    name: "Paper Com",
    photo: paperCom,
    icon: "✋🏼",
    counter: counterPaperCom,
  }
]);