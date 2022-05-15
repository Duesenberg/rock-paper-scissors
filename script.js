//function for random computer selection
let computerSelection;
function computerPlay() {
    let outputs = ["rock", "paper", "scissors"];
    computerSelection = outputs [Math.floor(Math.random()* outputs.length)];
}

//function for playing one round - NEED TO MAKE FUNCTION BRING UP PROMPT FOR PLAYERSELECT
let playerSelection;
let result;
function playRound(playerSelection, computerSelection) {
    playerSel = playerSelection.toLowerCase();
    if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return result = `You win! Scissors beats Paper.`;
    } else if ((playerSel === "rock") && (computerSelection === "paper")) {
        return result = `You lose! Paper beats Rock.`;
    } else if ((playerSel === "rock") && (computerSelection === "scissors")) {
        return result = `You win! Rock beats Scissors.`;
    } else if ((playerSel === "paper") && (computerSelection === "scissors")) {
        return result = `You lose! Scissors beats Paper.`;
    } else if ((playerSel === "paper") && (computerSelection === "rock")) {
        return result = `You win! Paper beats Rock.`;
    } else if ((playerSel === "scissors") && (computerSelection === "rock")) {
        return result = `You lose! Rock beats Scissors.`;
    } else {
        selection = playerSel.slice(0,1).toUpperCase() + playerSel.slice(1);
        return result = `Tie! You both chose ${selection}.`;
    }
}

//