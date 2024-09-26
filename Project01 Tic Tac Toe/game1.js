let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

// Winning pattern array
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Reset the game
const resetGame = (() => {
    turn = true;
    for(let box of boxes){
        box.innerText = "";
        box.classList.remove("disabled");
    }
    msgContainer.classList.add("hide");
    enableBoxes();
});

// Enable boxes
const enableBoxes = (() => {
    for(let box of boxes){
        box.classList.remove("disabled");
    }
});

// Desible boxes
const desibleBoxes = (() => {
    for(let box of boxes){
        box.classList.add("disabled");
    }
});

// Insert x, o alternative one times only
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "o";
      turn = false;
    } else {
      box.innerText = "x";
      turn = true;
    }
    box.classList.add("disabled");
    checkWinner();
  });
});
// To show winner
const showWinner = (winner) => {
    msg.innerText = `Congraculation!\n winner is ${winner}`;
    msgContainer.classList.remove("hide");
    desibleBoxes();
};

// To check winner
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val ===pos3val) {
            showWinner(pos1val);
        }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);















