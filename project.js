const Rock = "rock";

const Paper = "paper";

const Scissors = "scissors";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    if (getRandomInt(1, 3) == 1) {
        return Rock
    } else if (getRandomInt(1, 3) == 2) {
        return Paper
    } else {
        return Scissors
    }
}

let playerWins = 0;
let computerWins = 0;
let rounds = 0;

function game() {
    
    if (rounds <=100 && playerWins === 3) {
        return "You've already won the match!"
    } else if (rounds <=100 && computerWins === 3) {
        return "You've already lost the match! You can try reloading and playing again."
    }

    const computerSelection = computerPlay();
    const playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'").toLowerCase();
    if (playerSelection !== Rock && playerSelection !== Paper && playerSelection !== Scissors) {
        console.log("Please input Rock, Paper or Scissors");
        return;   
    }
   
    function playRound(playerSelection, computerSelection) { 
        
        if (playerSelection === Rock && computerSelection === Scissors){
            console.log("You Win this round! Rock beats Scissors");
            return 1
        }  else if (playerSelection === Paper && computerSelection === Rock) {
            console.log("You Win this round! Paper beats Rock");
            return 1
        }  else if (playerSelection === Scissors && computerSelection === Paper) {
            console.log("You Win this round! Scissors beats Paper");
            return 1
        } 
        
        if (playerSelection === Paper && computerSelection === Scissors) {
            console.log("You Lose this round! Scissors beats Paper");
            return -1
        } else if (playerSelection === Scissors && computerSelection === Rock ) {
            console.log("You Lose this round! Rock beats Scissors");
            return -1
        } else if (playerSelection === Rock && computerSelection === Paper) {
            console.log("You Lose this round! Paper beats Rock");
            return -1
        }
        
        console.log("You tied this round! Try again");
        return 0
    }
    rounds++
    let roundResult = playRound(playerSelection, computerSelection);
    switch(roundResult) {
        case 1:
            playerWins++;
            break;
        case -1:
            computerWins++; 
            break;
    }
    if (rounds <= 100 && playerWins === 3) {
        return "You've Won the match, Congratulations!"
    } else if (rounds <= 100 && computerWins === 3) {
        return "You've Lost the match, Try again."
    }
}