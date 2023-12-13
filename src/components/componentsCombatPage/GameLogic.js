import tie from '../../images/interfaz-images/icon-tie.png';
import victory from '../../images/interfaz-images/icon-victory.png';
import lose from '../../images/interfaz-images/icon-lose.png';

export const gameLogic = (
  generalPlayPlayer,
  generalPlayCom,
  buttonSpecial,
  buttonSpecialCom,
  characterPlayer,
  characterCom,
  setPlayerMark,
  setComMark,
  setResultState,
  setResultComState,
  setPointsRoundPlayer,
  setPointsRoundCom,
  setInteractiveTexts
) => {

 
  /*------------- Cases where the computer wins----------------------*/
    
  if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✌🏼" ){
    if(!buttonSpecialCom){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 2));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+2");
        setInteractiveTexts(`<p>lost round!! Scissor cut Paper and ${characterCom.shortName} is a scissor type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
      }else if(characterCom.iconType !== generalPlayCom){
        setComMark((prevMark) => (prevMark + 1));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+1");
        setInteractiveTexts(`<p>Bad Luck!! Scissor cut Paper and ${characterCom.shortName} has won <span class="pcom">1 point!!</span></p>`);
      }
    }else if(buttonSpecialCom){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 4));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+4");
        setInteractiveTexts(`<p><span class="pcom">Super Attack!!</span> Scissor cut Paper and ${characterCom.shortName} is a scissor type, ${characterCom.shortName} has won <span class="pcom">4 points!!</span></p>`);
      }else if(characterCom.iconType !== generalPlayCom){
        setComMark((prevMark) => (prevMark + 3));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+3");
        setInteractiveTexts(`<p>Special Attack!! Scissor cut Paper and ${characterCom.shortName} has won <span class="pcom">3 point!!</span></p>`);
      }
    }
  }

  if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✋🏼" ){
    if(!buttonSpecialCom){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 2));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+2");
        setInteractiveTexts(`<p>lost round!! paper covers rock and ${characterCom.shortName} is a paper type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
      }else if(characterCom.iconType !== generalPlayCom){
        setComMark((prevMark) => (prevMark + 1));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+1");
        setInteractiveTexts(`<p>Bad Luck!! paper covers rock and ${characterCom.shortName} has won <span class="pcom">1 point!!</span></p>`);
      }
    }else if(buttonSpecialCom){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 4));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+4");
        setInteractiveTexts(`<p><span class="pcom">Super Attack!!</span> paper covers rock and ${characterCom.shortName} is a paper type, ${characterCom.shortName} has won <span class="pcom">4 points!!</span></p>`);
      }else if(characterCom.iconType !== generalPlayCom){
        setComMark((prevMark) => (prevMark + 3));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+3");
        setInteractiveTexts(`<p><span class="pcom">Special Attack!!</span> paper covers rock and ${characterCom.shortName} has won <span class="pcom">3 point!!</span></p>`);
      }
    }
  }

  if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✊🏼" ){
    if(!buttonSpecialCom){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 2));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+2");
        setInteractiveTexts(`<p>lost round!! rock step scissors and ${characterCom.shortName} is a rock type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
      }else if(characterCom.iconType !== generalPlayCom){
        setComMark((prevMark) => (prevMark + 1));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+1");
        setInteractiveTexts(`<p>Bad Luck!! rock step scissors and ${characterCom.shortName}
        has won <span class="pcom">1 point!!</span></p>`);
      }
    }else if(buttonSpecialCom){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 4));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+4");
        setInteractiveTexts(`<p><span class="pcom">Super Attack!!</span> rock step scissors and ${characterCom.shortName} is a rock type, ${characterCom.shortName} has won <span class="pcom">4 points!!</span></p>`);
      }else if(characterCom.iconType !== generalPlayCom){
        setComMark((prevMark) => (prevMark + 3));
        setResultState(lose);
        setResultComState(victory);
        setPointsRoundPlayer("0");
        setPointsRoundCom("+3");
        setInteractiveTexts(`<p><p><span class="pcom">Special Attack!!</span> rock step scissors and ${characterCom.shortName}
        has won <span class="pcom">3 point!!</span></p>`);
      }
    }
  }

/*------------- Cases where the Player wins------------------------ */

  if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✌🏼" ){
    if(!buttonSpecial){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 2));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+2");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p>Excellent!! rock step scissors and ${characterPlayer.shortName} is a rock type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
      }else if(characterPlayer.iconType !== generalPlayPlayer) {
        setPlayerMark((prevMark) => (prevMark + 1));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+1");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p>Very Good!! rock step scissors and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
      }
    }else if(buttonSpecial){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 4));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+4");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p><span class="pplayer">Super Attack!!</span> rock step scissors and ${characterPlayer.shortName} is a rock type, ${characterPlayer.shortName} has won <span class="pplayer">4 points!!</span></p>`);
      }else if(characterPlayer.iconType !== generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 3));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+3");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p><span class="pplayer">Special Attack!!</span> rock step scissors and ${characterPlayer.shortName} has won <span class="pplayer">3 point!!</span></p>`);
      }
    }
  }


  if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✊🏼" ){
    if(!buttonSpecial){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 2));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+2");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p>Excellent!! paper covers rock and ${characterPlayer.shortName} is a paper type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
      }else if(characterPlayer.iconType !== generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 1));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+1");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p>Very Good!! paper covers rock and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
      }
    }else if(buttonSpecial){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 4));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+4");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p><span class="pplayer">Super Attack!!</span> paper covers rock and ${characterPlayer.shortName} is a paper type, ${characterPlayer.shortName} has won <span class="pplayer">4 points!!</span></p>`);
      }else if(characterPlayer.iconType !== generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 3));
        setPointsRoundPlayer("+3");
        setPointsRoundCom("0");
        setResultState(victory);
        setResultComState(lose);
        setInteractiveTexts(`<p><span class="pplayer">Special Attack!!</span> paper covers rock and ${characterPlayer.shortName} has won <span class="pplayer">3 point!!</span></p>`);
      }
    }
  }


  if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✋🏼" ){
    if(!buttonSpecial){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 2));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+2");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p>Excellent!! Scissor cut Paper and ${characterPlayer.shortName} is a scissor type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
      }else if(characterPlayer.iconType !== generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 1));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+1");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p>Very Good!! Scissor cut Paper and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
      }
    }else if(buttonSpecial){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 4));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+4");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p><span class="pplayer">Super Attack!!</span> Scissor cut Paper and ${characterPlayer.shortName} is a scissor type, ${characterPlayer.shortName} has won <span class="pplayer">4 points!!</span></p>`);
      }else if(characterPlayer.iconType !== generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 3));
        setResultState(victory);
        setResultComState(lose);
        setPointsRoundPlayer("+3");
        setPointsRoundCom("0");
        setInteractiveTexts(`<p><span class="pplayer">Special Attack!!</span> Scissor cut Paper and ${characterPlayer.shortName} has won <span class="pplayer">3 point!!</span></p>`);
      }
    }
  }


/*------------- Cases where there is a tie------------------------ */

  if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✊🏼" ){
    setResultState(tie);
    setResultComState(tie);
    setPointsRoundPlayer("0");
    setPointsRoundCom("0");
    setInteractiveTexts(`<p>Rocks crash into each other, Nobody Wins!!</p>`);
  }

  if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✋🏼" ){
    setResultState(tie);
    setResultComState(tie);
    setPointsRoundPlayer("0");
    setPointsRoundCom("0");
    setInteractiveTexts(`<p>Denied effect of both papers, It's a Tie!!</p>`);
  }

  if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✌🏼" ){
    setResultState(tie);
    setResultComState(tie);
    setPointsRoundPlayer("0");
    setPointsRoundCom("0");
    setInteractiveTexts(`<p>The scissors try to cut themselves without success, It's a Tie!!</p>`);
  }
};