import melissaPaper from '../images/character-blue-paper.png';
import williamRock from '../images/character-yellow-rock.png';
import jamesScissor from '../images/character-red-scissor.png';
import backPaper from '../images/paper.png';
import backScissor from '../images/scissor.png';
import backRock from '../images/rock.png';


export const characters = [
  {
    name: "William Rock",
    type: "Rock",
    photo: williamRock,
    iconType: "✊🏼",
    imageType: backRock,
    description: "Williams is a Rock type character, every time He wins a round using Rock, you will earn double points."
  },

  {
    name: "Melissa Paper",
    type: "Paper",
    photo: melissaPaper,
    iconType: "✋🏼",
    imageType: backPaper,
    description: "Melissa is a Paper type character, every time She wins a round using Paper, you will earn double points."
  },

  {
    name: "James Scissor",
    type: "Scissor",
    photo: jamesScissor,
    iconType: "✌🏼",
    imageType: backScissor,
    description: "James is a Scissors type character, every time He wins a round using Scissors, you will earn double points."
  }
]