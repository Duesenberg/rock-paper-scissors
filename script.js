let winCount = 0;
let loseCount = 0;
let nonValidInput = 0;
let computerSelection;
let playerSelection;

//function for random computer selection
function computerPlay() {
    let outputs = ["rock", "paper", "scissors"];
    computerSelection = outputs [Math.floor(Math.random()* outputs.length)];
}

//function for playing one round
function playRound(playerSelection, computerSelection) {
    playerSel = playerSelection.toLowerCase();
    if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        result = `Computer chooses Paper.\n\nYou win! Scissors beats Paper.`;
        winCount += 1;
    } else if ((playerSel === "rock") && (computerSelection === "paper")) {
        result = `Computer chooses Paper.\n\nYou lose! Paper beats Rock.`;
        loseCount += 1;
    } else if ((playerSel === "rock") && (computerSelection === "scissors")) {
        result = `Computer chooses Scissors.\n\nYou win! Rock beats Scissors.`;
        winCount += 1;
    } else if ((playerSel === "paper") && (computerSelection === "scissors")) {
        result = `Computer chooses Scissors.\n\nYou lose! Scissors beats Paper.`;
        loseCount += 1;
    } else if ((playerSel === "paper") && (computerSelection === "rock")) {
        result = `Computer chooses Rock.\n\nYou win! Paper beats Rock.`;
        winCount += 1;
    } else if ((playerSel === "scissors") && (computerSelection === "rock")) {
        result = `Computer chooses Rock.\n\nYou lose! Rock beats Scissors.`;
        loseCount += 1;
    } else if (playerSel === computerSelection) {
        selection = playerSel.slice(0,1).toUpperCase() + playerSel.slice(1);
        result = (`Tie! You both chose ${selection}.`);
    } else {
        result = (`Invalid input. Please choose either Rock, Paper or Scissors.`);
        nonValidInput += 1;
    }
}

//function for playing the whole game
function game() {
    for (i=0; i < 5; i++) {
        playerSelection = prompt('Type Rock, Paper or Scissors:');
        computerPlay();
        playRound(playerSelection, computerSelection);
        alert(result);
    }
    alert(`Result: Win: ${winCount} Lose: ${loseCount} Invalid inputs: ${nonValidInput}`);
    if (winCount > loseCount) {
        alert('You Win!');
    } else if (winCount === loseCount) {
        alert ('Tie!');
    } else {
        alert ('You Lose!');
    }
    winCount = 0;
    loseCount = 0;
    if (confirm('Want to play again?') === true) {
        game ();
    } else {
        alert ("Game Over!");
    }
}

//function that brings up prompt for playing game
function wantToPlay() {
    if (confirm('Want to play Rock, Paper, Scissors?') === true) {
        game ();
    } else {
        alert ("Wimp!");
    }
}

wantToPlay();