"strict mode";

///////////////////// variables
const message = document.querySelector(".instructions");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highScore");
const secretNumber = document.querySelector(".secret-number");
const background = document.querySelector(".container");
const checkBTN = document.querySelector(".check");
const againBTN = document.querySelector(".btn__1");
///////////////////////
//////GameOver function/
const gameOver = function () {
  message.textContent = "You lost 💀 ";
  background.style.backgroundColor = "#f85a75";
  playing = false;
};
////////////////////
//////Game Logic////
const gameLogic = function () {
  //guard clause
  if (playing === true) {
    //////////////

    const guess = +document.querySelector(".guess").value;

    //case 1: no input
    if (!guess || guess <= 0) {
      message.textContent = " Invalid input 😥";
    }
    //case 2: if guess === secretnumber
    else if (guess === secretNumber.value) {
      message.textContent = "🎉 CORRECT! 😁";
      secretNumber.textContent = secretNumber.value;
      secretNumber.style.padding = "3rem 12rem;";
      background.style.backgroundColor = "green";
      //set new highScore
      if (+score.textContent > +highScore.textContent) {
        highScore.textContent = score.textContent;
      }
    }
    //case 3: if guess<secretnumber
    else if (guess < secretNumber.value && guess !== 0) {
      message.textContent = "Too low, try again...❌";
      score.textContent--;

      //if score =0, you lose

      if (score.textContent == 0) gameOver();
    }
    //case 4: if guess>secretNumber
    else if (guess > secretNumber.value && guess !== 0) {
      message.textContent = "Too high, try again...❌";
      score.textContent--;
      //if score =0, you lose
      if (score.textContent == 0) {
        gameOver();
      }
    }
  }
};
//////////////////////////////
//////////////////////////////
let playing = true;

// Assign randomNumber to secret Number
let randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);
secretNumber.value = randomNum;

console.log(secretNumber.value);

////////////////////////////
//add check button click functionality
checkBTN.addEventListener("click", gameLogic);

//add check button 'enter' functionality
const guess = document.querySelector(".guess");
guess.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    gameLogic();
  }
});
////////////////////////////

//again button functionality
againBTN.addEventListener("click", function () {
  // reset score
  score.textContent = 20;
  //reset message
  message.textContent = "Start guessing...";
  // background color,
  background.style.backgroundColor = "#222";
  //hide secret number
  secretNumber.textContent = "?";
  //new secret number
  let randomNum = Math.floor(Math.random() * 20) + 1;
  console.log(randomNum);
  secretNumber.value = randomNum;
  // reset width/padding of secret number
  secretNumber.style.padding = "3rem 8rem;";
  //remove input value
  document.querySelector(".guess").value = "";
  //set playing= true;
  playing = true;
});
