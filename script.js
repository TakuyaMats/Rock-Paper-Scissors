// define Rock, Paper, Scissors as viable options
// User vs Computer
// define variable user input *prompt?
// define the variable that the computer uses
// Use `alert()`, `confirm()`, and `prompt()` methods
// last step, computers selection at random


// user choices
var userChoice = prompt("Do you want to pick Rock, Paper, or Scissors");

const options = ["R", "P", "S"];
var computerChoice = randomChoice();
var numOption
var numChoice


// Generate random option
function randomNum() {
    numOption = Math.floor(Math.random() * 3);
    return numOption;
};
function randomChoice(){
    randomNum()
    computerChoice = options[numOption];
    return computerChoice;
};

var playerWins=0;
var computerWins=0;

if (userChoice === "R" && computerChoice === "S"){
    alert("You win!");
    playerWins++
} else if (userChoice === "R" && computerChoice === "P") {
    alert("Computer wins!");
    computerWins++
} else if (userChoice === "P" && computerChoice === "R") {
    alert("You win!")
    playerWins++
} else if (userChoice === "P" && computerChoice === "S") {
    alert("Computer wins!")
    computerWins++
} else if (userChoice === "S" && computerChoice === "P") {
    alert("You win!")
    playerWins++
} else if (userChoice === "S" && computerChoice === "R"){
    alert("Computer wins!")
    computerWins++
}

if (window.confirm("Do you want to replay the game?")) {
    window.open("Refresh the page to try again!");
  }

var isGameOver = false
