"use-strict";

const gameBtns = document.querySelectorAll(".circle");
const playingBoard = document.querySelector(".board");
const rulesBtn = document.querySelector(".rules-btn");
const closeModalBtn = document.querySelector(".close-btn");

closeModalBtn.addEventListener("click", function () {
  document.querySelector(".rules-modal").classList.add("hide");
});

rulesBtn.addEventListener("click", function () {
  document.querySelector(".rules-modal").classList.remove("hide");
});

[...gameBtns].forEach((btn) => {
  btn.addEventListener("click", function () {
    const userMove = this.id;
    console.log(userMove);

    playingBoard.classList.add("hide");
  });
});
