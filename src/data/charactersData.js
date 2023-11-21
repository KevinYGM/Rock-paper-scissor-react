/*-----Import Character: Williams Rock------*/
import williamsRock from '../images/Williams-Rock/Williams-Rock.png';
import williamsRockFace from '../images/Williams-Rock/Williams-Rock-Face.png';
import williamsRockWinner from '../images/Williams-Rock/Williams-Rock-Winner.png';

/*-----Import Character: Scarlett Rock------*/
import scarlettRock from '../images/Scarlett-Rock/Scarlett-Rock.png';
import scarlettRockFace from '../images/Scarlett-Rock/Scarlett-Rock-Face.png';
import scarlettRockWinner from '../images/Scarlett-Rock/Scarlett-Rock-Winner.png';

/*-----Import Character: Melissa Paper------*/
import melissaPaper from '../images/Melissa-Paper/Melissa-Paper.png';
import melissaPaperFace from '../images/Melissa-Paper/Melissa-Paper-Face.png';
import melissaPaperWinner from '../images/Melissa-Paper/Melissa-Paper-Winner.png';

/*-----Import Character: Matthew Paper------*/
import matthewPaper from '../images/Matthew-Paper/Matthew-Paper.png';
import matthewPaperFace from '../images/Matthew-Paper/Matthew-Paper-Face.png';
import matthewPaperWinner from '../images/Matthew-Paper/Matthew-Paper-Winner.png';

/*-----Import Character: James-Scissor------*/
import jamesScissor from '../images/James-Scissor/James-Scissor.png';
import jamesScissorFace from '../images/James-Scissor/James-Scissor-Face.png';
import jamesScissorWinner from '../images/James-Scissor/James-Scissor-Winner.png';

/*-----Import Character: Alisson-Scissor------*/
import alissonScissor from '../images/Alisson-Scissor/Alisson-Scissor.png';
import alissonScissorFace from '../images/Alisson-Scissor/Alisson-Scissor-Face.png';
import alissonScissorWinner from '../images/Alisson-Scissor/Alisson-Scissor-Winner.png';

/*-----Import Elements: Rock, paper and scissor----------*/

import backRock from '../images/interfaz-images/rock.png';
import backPaper from '../images/interfaz-images/paper.png';
import backScissor from '../images/interfaz-images/scissor.png';


export const characters = [
  {
    name: "Williams Rock",
    shortName: "Williams",
    type: "Rock",
    photo: williamsRock,
    facePhoto: williamsRockFace,
    winnerPhoto: williamsRockWinner,
    iconType: "✊🏼",
    imageType: backRock,
    description: "Williams is a Rock type character, every time He wins a round using Rock, you will earn double points."
  },

  {
    name: "Melissa Paper",
    shortName: "Melissa",
    type: "Paper",
    photo: melissaPaper,
    facePhoto: melissaPaperFace,
    winnerPhoto: melissaPaperWinner,
    iconType: "✋🏼",
    imageType: backPaper,
    description: "Melissa is a Paper type character, every time She wins a round using Paper, you will earn double points."
  },

  {
    name: "James Scissor",
    shortName: "James",
    type: "Scissor",
    photo: jamesScissor,
    facePhoto: jamesScissorFace,
    winnerPhoto: jamesScissorWinner,
    iconType: "✌🏼",
    imageType: backScissor,
    description: "James is a Scissors type character, every time He wins a round using Scissors, you will earn double points."
  },

  {
    name: "Scarlett Rock",
    shortName: "Scarlett",
    type: "Rock",
    photo: scarlettRock,
    facePhoto: scarlettRockFace,
    winnerPhoto: scarlettRockWinner,
    iconType: "✊🏼",
    imageType: backRock,
    description: "Scarlett is a Rock type character, every time She wins a round using Rock, you will earn double points."
  },

  {
    name: "Matthew Paper",
    shortName: "Matthew",
    type: "Paper",
    photo: matthewPaper,
    facePhoto: matthewPaperFace,
    winnerPhoto: matthewPaperWinner,
    iconType: "✋🏼",
    imageType: backPaper,
    description: "Matthew is a Paper type character, every time He wins a round using Paper, you will earn double points."
  },

  {
    name: "Alisson Scissor",
    shortName: "Alisson",
    type: "Scissor",
    photo: alissonScissor,
    facePhoto: alissonScissorFace,
    winnerPhoto: alissonScissorWinner,
    iconType: "✌🏼",
    imageType: backScissor,
    description: "Alisson is a Scissors type character, every time She wins a round using Scissors, you will earn double points."
  }
];