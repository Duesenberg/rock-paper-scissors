let computerSelection;
function computerPlay(computerSelection) {
    outputs = ["rock", "paper", "scissors"];
    computerSelection = outputs [Math.floor(Math.random()* outputs.length)];
    return computerSelection;
}

let playerSelection;
let result;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return result = `Tie! You both chose ${playerSelection}`;
    } else {
        return result = 'da dopram';
    }
}