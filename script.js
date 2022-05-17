let winCount = 0;
let loseCount = 0;
let computerSelection;
let playerSelection;
//function for random computer selection
function computerPlay() {
    let outputs = ["rock", "paper", "scissors"];
    computerSelection = outputs [Math.floor(Math.random()* outputs.length)];
}

//function for playing one round - winCount & loseCount UNREACHABLE
let result;
function playRound(playerSelection, computerSelection) {
    let winCount;
    playerSel = playerSelection.toLowerCase();
    if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return result = `You win! Scissors beats Paper.`;
        winCount += 1;
    } else if ((playerSel === "rock") && (computerSelection === "paper")) {
        return result = `You lose! Paper beats Rock.`;
        loseCount += 1;
    } else if ((playerSel === "rock") && (computerSelection === "scissors")) {
        return result = `You win! Rock beats Scissors.`;
        winCount += 1;
    } else if ((playerSel === "paper") && (computerSelection === "scissors")) {
        return result = `You lose! Scissors beats Paper.`;
        loseCount += 1;
    } else if ((playerSel === "paper") && (computerSelection === "rock")) {
        return result = `You win! Paper beats Rock.`;
        winCount += 1;
    } else if ((playerSel === "scissors") && (computerSelection === "rock")) {
        return result = `You lose! Rock beats Scissors.`;
        loseCount += 1;
    } else {
        selection = playerSel.slice(0,1).toUpperCase() + playerSel.slice(1);
        return result = `Tie! You both chose ${selection}.`;
    }
}

function game() {
    for (i=0; i < 5; i++) {
        playerSelection = prompt('Type Rock, Paper or Scissors:');
        computerPlay();
        playRound(playerSelection, computerSelection);
        alert(result);
    }
    alert(`Result: Win: ${winCount} Lose: ${loseCount}`);
    if (winCount > loseCount) {
        alert('You Win!');
    } else {
        alert ('You Lose!');
    }
}