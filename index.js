"use-strict";

const gameBtns = document.querySelectorAll(".circle");
const playingBoard = document.querySelector(".board");
const rulesBtn = document.querySelector(".rules-btn");
const closeModalBtn = document.querySelector(".close-btn");
const matchMoves = document.querySelector(".match-moves");
const playerMoveContainer = document.querySelector(".player-move");
const cpuMoveContainer = document.querySelector(".cpu-move");

const cpuMoves = ["paper", "rock", "scissors"];

closeModalBtn.addEventListener("click", function () {
  document.querySelector(".rules-modal").classList.add("hide");
});

rulesBtn.addEventListener("click", function () {
  document.querySelector(".rules-modal").classList.remove("hide");
});

[...gameBtns].forEach((btn) => {
  btn.addEventListener("click", function () {
    matchMoves.classList.remove("hide");
    playingBoard.classList.add("hide");

    const playerMove = this.id;

    addMove(playerMove, playerMoveContainer);
    setTimeout(addMove, 1000, cpuMove(), cpuMoveContainer);
    setTimeout(declareWinner, 1500);
  });
});

const cpuMove = function () {
  const randomMove = Math.floor(Math.random() * 3);
  return cpuMoves[randomMove];
};

const addMove = function (move, container) {
  const outerCircle = document.createElement("div");
  outerCircle.classList.add("circle");
  outerCircle.classList.add(`circle-${move}`);
  outerCircle.id = move;

  const innerCircle = document.createElement("div");
  innerCircle.classList.add("circle-inner");

  outerCircle.insertAdjacentElement("afterbegin", innerCircle);
  container.insertAdjacentElement("afterbegin", outerCircle);
};

const highlightWinner = function (winner) {
  const div = document.createElement("div");
  div.classList.add("winner");
  winner.insertAdjacentElement("beforeend", div);
};

const declareWinner = function () {
  const playerMove = playerMoveContainer.querySelector(".circle").id;
  const cpuMove = cpuMoveContainer.querySelector(".circle").id;
  let winner = "";

  switch (playerMove + cpuMove) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      winner = "player";
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      winner = "cpu";
      break;

    default:
      winner = "none";
  }

  highlightWinner(winner);

  showMessage(winner);
};

const showMessage = function (winner) {
  const message = document.querySelector(".message");
  const messageText = document.createElement("p");

  if (winner === "player") messageText.textContent = "You win!";
  else
    messageText.textContent =
      winner === "cpu" ? "Computer wins!" : "It's a draw!";

  message.insertAdjacentElement("afterbegin", messageText);
  message.classList.remove("hide");
};
