const choiceRock = document.querySelector("#rock");
const choicePaper = document.querySelector("#paper");
const choiceScissors = document.querySelector("#scissors");
const playerChoice = document.querySelector(".playerChoice");
const displayInstruction = document.querySelector(".instruction");

const showBtn = document.querySelector(".showbtn");
const layoutInstruction = document.querySelector(".layout");

const playerScore = document.querySelector(".playerscore");
const computerScore = document.querySelector(".computerscore");

const computerChoice = document.querySelector(".computerChoice");
const finalStatment = document.querySelector(".printout");

let choices = ["rock", "paper", "scissors"];

let cScore = 0;
let pScore = 0;

showBtn.addEventListener("click", (e) => {
  e.preventDefault();
  layoutInstruction.classList.replace("show", "layout");
});

displayInstruction.addEventListener("click", (e) => {
  e.preventDefault();
  layoutInstruction.classList.replace("layout", "show");
});

choiceRock.addEventListener("click", (e) => {
  e.preventDefault();
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  finalStatment.classList.remove("lose", "win");

  if (randomChoice === "rock") {
    playerChoice.textContent = "Rock";
    computerChoice.textContent = "Rock";
    finalStatment.textContent = "Draw!";
  } else if (randomChoice === "scissors") {
    playerChoice.textContent = "Rock";
    computerChoice.textContent = "Scissors";
    finalStatment.textContent = "You win!";
    finalStatment.classList.add("win");
    pScore++;
    playerScore.textContent = pScore;
  } else {
    playerChoice.textContent = "Rock";
    computerChoice.textContent = "Paper";
    finalStatment.textContent = "You lose!";
    finalStatment.classList.add("lose");
    cScore++;
    computerScore.textContent = cScore;
  }
});

choicePaper.addEventListener("click", (e) => {
  e.preventDefault();

  let randomChoice = choices[Math.floor(Math.random() * 3)];
  finalStatment.classList.remove("lose", "win");

  if (randomChoice === "rock") {
    playerChoice.textContent = "Paper";
    computerChoice.textContent = "Rock";
    finalStatment.textContent = "You win!";
    finalStatment.classList.add("win");
    pScore++;
    playerScore.textContent = pScore;
  } else if (randomChoice === "scissors") {
    playerChoice.textContent = "Paper";
    computerChoice.textContent = "Scissors";
    finalStatment.textContent = "You lose!";
    finalStatment.classList.add("lose");

    cScore++;
    computerScore.textContent = cScore;
  } else {
    playerChoice.textContent = "Paper";
    computerChoice.textContent = "Paper";
    finalStatment.textContent = "Draw!";
  }
});

choiceScissors.addEventListener("click", (e) => {
  e.preventDefault();
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  finalStatment.classList.remove("lose", "win");

  if (randomChoice === "rock") {
    playerChoice.textContent = "Scissors";
    computerChoice.textContent = "Rock";
    finalStatment.textContent = "You lose!";
    finalStatment.classList.add("lose");
    cScore++;
    computerScore.textContent = cScore;
  } else if (randomChoice === "scissors") {
    playerChoice.textContent = "Scissors";
    computerChoice.textContent = "Scissors";
    finalStatment.textContent = "Draw!";
  } else {
    playerChoice.textContent = "Scissors";
    computerChoice.textContent = "Paper";
    finalStatment.textContent = "You win!";
    finalStatment.classList.add("win");
    pScore++;
    playerScore.textContent = pScore;
  }
});

// let personArray = [
//   {
//     name: "Alex",
//     age: 30,
//     product: "Bucket",
//     price: 10,
//   },
//   {
//     name: "Bruce",
//     age: 40,
//     product: "Chicken",
//     price: 30,
//   },
//   {
//     name: "Alice",
//     age: 12,
//     product: "Toy",
//     price: 50,
//   },
//   {
//     name: "Lizz",
//     age: 34,
//     product: "Book",
//     price: 40,
//   },
// ];

// const getPrice = personArray
//   .map((el) => {
//     return el.price;
//   })
//   .reduce((pre, cur) => {
//     return pre + cur;
//   });

// console.log(getPrice);
