//function for random computer selection
let computerSelection;
function computerPlay(computerSelection) {
    outputs = ["rock", "paper", "scissors"];
    computerSelection = outputs [Math.floor(Math.random()* outputs.length)];
    return computerSelection;
}

//function for playing one round - NEED TO MAKE FUNCTION BRING UP PROMPT FOR PLAYERSELECT
let playerSelection;
let result;
function playRound(playerSelection, computerSelection) {
    playerSel = playerSelection.toLowerCase();
    computerSel = computerSelection.toLowerCase();
    if ((playerSelection === "scissors") && (computerSel === "paper")) {
        return result = `You win! Scissors beats Paper.`;
    } else if ((playerSel === "rock") && (computerSel === "paper")) {
        return result = `You lose! Paper beats Rock.`;
    } else if ((playerSel === "rock") && (computerSel === "scissors")) {
        return result = `You win! Rock beats Scissors.`;
    } else if ((playerSel === "paper") && (computerSel === "scissors")) {
        return result = `You lose! Scissors beats Paper.`;
    } else if ((playerSel === "paper") && (computerSel === "rock")) {
        return result = `You win! Paper beats Rock.`;
    } else if ((playerSel === "scissors") && (computerSel === "rock")) {
        return result = `You lose! Rock beats Scissors.`;
    } else {
        selection = playerSel.slice(0,1).toUpperCase() + playerSel.slice(1);
        return result = `Tie! You both chose ${selection}.`;
    }
}

//