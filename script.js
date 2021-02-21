// define Rock, Paper, Scissors as viable options
// User vs Computer
// define variable user input *prompt?
// define the variable that the computer uses
// Use `alert()`, `confirm()`, and `prompt()` methods
// last step, computers selection at random


// user choices

// Define variables
const options = ["Rock", "Paper", "Scissors"];
var isGameOver = false
var userChoice
var computerChoice = "Rock"
var playerWins = 0;
var computerWins = 0;


// Generate random option

var numOption
var numChoice

function randomNum() {
    numOption = Math.floor(Math.random() * 3);
    return numOption;
};
function randomChoice(){
    randomNum()
    computerChoice = options[numOption];
    return computerChoice;
};

function playerPrompt() {
    prompt("Please Choose Rock, Paper, Or Scissors");
}


function gameStart() {
    var gameStart = prompt("Do you Want To Play a Game of Rock, Paper, Scissors?");
    if(gameStart === "y") {
        playerPrompt();
    } else if (gameStart === "n") {
        isGameOver = true;
        alert("Game Is Over, Goodbye");
        return
    } else {
        alert("That is not a Valid Repsonse");
    }

}

while (isGameOver === false) {
    gameStart();
}
