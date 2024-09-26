const choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
console.log(userScore,typeof userScore);
// To get comp choice
const compChoicesArray = ["rock", "paper", "scissor"];
const genCompChoice = () => {
  let index = Math.floor(Math.random() * 3);
  return compChoicesArray[index];
};
// To get user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Draw game
const drawGame = () => {
  console.log(message.innerText = "Game was Draw. Play again.");
  message.style.backgroundColor = "yellow";

};

// show winner
let userCount = 0;
let compCount = 0;
let showWinner = (userwin) => {
    if (userwin) {
        userCount++;
        userScore.innerText = userCount;
        message.innerText = "You win!";
        message.style.backgroundColor = "green";
    }else{
        compCount++;
        compScore.innerText = compCount;
        message.innerText = "You lose!";
        message.style.backgroundColor = "red";
    }
};

// Game Play
const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice = ", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  }else{
    let userwin = true;
    if (userChoice === "rock") {
        // scissor/paper
        userwin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper") {
        // scissor/rock
        userwin = compChoice === "scissor" ? false : true;
    }else{
        // rock/paper
        userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};
