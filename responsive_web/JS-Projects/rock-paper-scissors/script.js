const options = ['Rock', 'Paper', 'Scissors'];

const getRandomComputerResult = () => {
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

const hasPlayerWonTheRound = (playerChoice, computerChoice) => {
    if(playerChoice === "Rock" & computerChoice === "Scissors"){
        return true;
    }
    if(playerChoice === "Scissors" & computerChoice === "Paper"){
        return true;
    }
    if(playerChoice === "Paper" & computerChoice === "Rock"){
        return true;
    }
    return false;
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if(hasPlayerWonTheRound(userOption, computerResult)){
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if(userOption === computerResult){
    return `It's a tie! Both chose ${userOption}`;
  } else{
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

const showResults = (userOption) => {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    if(playerScore === 3){
      winnerMsgElement.innerText = "Player has won the game!";
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    } else if(computerScore === 3){
      winnerMsgElement.innerText = "Computer has won the game!";
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
}

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

rockBtn.addEventListener("click", () => {
  showResults('Rock');
});

paperBtn.addEventListener("click", () => {
  showResults('Paper');
});

scissorsBtn.addEventListener("click", () => {
  showResults('Scissors');
})

const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", () => {
  resetGame();
});