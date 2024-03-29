let winCount = 0;
let loseCount = 0;
let tieCount = 0;
let resultCount;
let computerSelection;

//function for random computer selection
function computerPlay() {
    let outputs = ["rock", "paper", "scissors"];
    return computerSelection = outputs [Math.floor(Math.random()* outputs.length)];
}

//function for playing one round
function playRound(playerSelection) {
    computerPlay ();
    if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        result = `Computer chooses Paper, You win!`;
        winCount += 1;
        return result;
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        result = `Computer chooses Paper, You lose!`;
        loseCount += 1;
        return result;
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        result = `Computer chooses Scissors, You win!`;
        winCount += 1;
        return result;
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        result = `Computer chooses Scissors, You lose!`;
        loseCount += 1;
        return result;
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        result = `Computer chooses Rock, You win!`;
        winCount += 1;
        return result;
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        result = `Computer chooses Rock, You lose!`;
        loseCount += 1;
        return result;
    } else {
        selection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1);
        result = (`Tie! You both chose ${selection}.`);
        tieCount += 1;
        return result;
    }
}

//function for string showing score and game result
function scoreCounter (winCount, loseCount, tieCount) {
    let backgrdColor;
    if ((winCount + loseCount + tieCount) < 5) {
        //while game is playing
        resultCount = `Wins: ${winCount} Losses: ${loseCount} Ties: ${tieCount}`;
        return resultCount;
    } else {
        //when 5 rounds finish
        if (winCount > loseCount) return resultCount = "You Win!";
        else if (winCount < loseCount) return resultCount = "You Lose!";
        else return resultCount = "Tie!";
    }
}

//listener for player selection, displaying results
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('button-pressed'); //adding button-pressed class
        playRound(button.id);
        scoreCounter (winCount, loseCount, tieCount);
        if ((winCount + loseCount + tieCount) < 5) {
            //while game is playing

            //displaying result from current round
            const roundResult = document.querySelector('.round-result');
            const res = document.querySelector('.res');
            res.textContent = result;
            //adding border
            res.style.borderBottom = '2px';
            res.style.borderBottomColor = '#5599e7';
            res.style.borderBottomStyle = 'solid';
            
            //score counter
            const scrCounter = document.querySelector('.result');
            const scrCount = document.querySelector('.score-count');
            scrCount.textContent = resultCount;
            scrCount.style.borderBottom = '5px';
            scrCount.style.borderBottomColor = '#5599e7';
            scrCount.style.borderBottomStyle = 'solid';
        } else if ((winCount + loseCount + tieCount) == 5) {
            //at fifth round

            //displaying result from current round
            const roundResult = document.querySelector('.round-result');
            const res = document.querySelector('.res');
            res.textContent = result;
            res.style.fontSize = '18px';

            //display final result
            const scrCounter = document.querySelector('.result');
            const scrCount = document.querySelector('.score-count');
            scrCount.textContent = resultCount;
            scrCount.style.fontSize = '42px';
            scrCount.style.fontWeight = '700';
            if (winCount>loseCount) scrCount.style.backgroundColor = 'green';
            else if (winCount<loseCount) scrCount.style.backgroundColor = 'red';
        } else {
            const roundResult = document.querySelector('.round-result');
            const res = document.querySelector('.res');
            res.textContent = "Game Finished. Press Restart to play again.";
        }
    })
})

//function for removing button-pressed class
function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('button-pressed');
}

//removing button-pressed class after transition end
buttons.forEach((button) => button.addEventListener('transitionend', removeTransition));