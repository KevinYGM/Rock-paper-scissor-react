/*-----Import Character: Williams Rock------*/
import williamRock from '../images/character-yellow-rock.png';
import faceWilliamsRock from '../images/Williams-face.png';
import backRock from '../images/rock.png';
/*-----Import Character: Melissa Paper------*/
import melissaPaper from '../images/character-blue-paper.png';
import faceMelissaFace from '../images/Melissa-face.png';
import backPaper from '../images/paper.png';
/*-----Import Character: James Scissor------*/
import jamesScissor from '../images/character-red-scissor.png';
import faceJamesScissor from '../images/James-face.png';
import backScissor from '../images/scissor.png';


export const characters = [
  {
    name: "William Rock",
    type: "Rock",
    photo: williamRock,
    facePhoto: faceWilliamsRock,
    iconType: "✊🏼",
    imageType: backRock,
    description: "Williams is a Rock type character, every time He wins a round using Rock, you will earn double points."
  },

  {
    name: "Melissa Paper",
    type: "Paper",
    photo: melissaPaper,
    facePhoto: faceMelissaFace,
    iconType: "✋🏼",
    imageType: backPaper,
    description: "Melissa is a Paper type character, every time She wins a round using Paper, you will earn double points."
  },

  {
    name: "James Scissor",
    type: "Scissor",
    photo: jamesScissor,
    facePhoto: faceJamesScissor,
    iconType: "✌🏼",
    imageType: backScissor,
    description: "James is a Scissors type character, every time He wins a round using Scissors, you will earn double points."
  }
]