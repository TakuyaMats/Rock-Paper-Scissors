// define Rock, Paper, Scissors as viable options
const options = ["Rock", "Paper", "Scissors"];
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
// User vs Computer
// define variable user input *prompt?
// define the variable that the computer uses
// Use `alert()`, `confirm()`, and `prompt()` methods
// last step, computers selection at random
