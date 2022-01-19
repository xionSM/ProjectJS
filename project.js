const Rock = "rock";

const Paper = "paper";

const Scissors = "scissors";


let playerSelection = '';

const body = document.querySelector("body");
    
const container = document.createElement("div");
body.appendChild(container)
container.classList.add("container")

const button1 = document.createElement("button");
button1.textContent = Rock;
button1.classList.add("btn")

const button2 = document.createElement("button");
button2.textContent = Paper;
button2.classList.add("btn")

const button3 = document.createElement("button");
button3.textContent = Scissors;
button3.classList.add("btn")

container.appendChild(button1)
container.appendChild(button2)
container.appendChild(button3)

const buttons = document.querySelectorAll(".btn");
console.log(buttons)

buttons.forEach(button => button.addEventListener("click", playRound))


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


function playRound(e) { 
    const computerSelection = computerPlay();
    
    let playerSelection = e.target.textContent;
    rounds++
    if (rounds <= 100 && playerWins === 5) {
        results.textContent = "You've won the match! Congratulations!"
        return
    } else if (rounds <= 100 && computerWins === 5) {
        results.textContent = "You've lost! Try playing again."
        return
    } else {
        
    }
    if (playerSelection === Rock && computerSelection === Scissors){
        results.textContent = "You Win this round! Rock beats Scissors";
        playerWins++
    }  else if (playerSelection === Paper && computerSelection === Rock) {
        results.textContent = "You Win this round! Paper beats Rock";
        playerWins++
    }  else if (playerSelection === Scissors && computerSelection === Paper) {
        results.textContent = "You Win this round! Scissors beats Paper";
        playerWins++
    } else if(playerSelection === Paper && computerSelection === Scissors) {
        results.textContent = "You Lose this round! Scissors beats Paper";
        computerWins++
    } else if (playerSelection === Scissors && computerSelection === Rock ) {
        results.textContent = "You Lose this round! Rock beats Scissors";
        computerWins++
    } else if (playerSelection === Rock && computerSelection === Paper) {
        results.textContent = "You Lose this round! Paper beats Rock";
        computerWins++
    } else {
        results.textContent = "You tied this round! Try again";
    }
    
    standings.textContent = `You - ${playerWins} --- Computer Wins - ${computerWins} / Round ${rounds}`
    
    
}


let results = document.createElement("div");
results.classList.add('results');
body.appendChild(results)
results.textContent = "";

let standings = document.createElement("div");
standings.classList.add("standing")
body.appendChild(standings)

