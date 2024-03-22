const options = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";
function getComputerChoice() {
    computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "It's a draw!";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper")) {
        return "Paper beats Rock. You Lose.";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors")) {
        return "Rock beats Scissors. You Win!";
    } else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "rock")) {
        return "Paper beats Rock. You Win!";
    } else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")) {
        return "Scissors beats Paper. You Lose.";
    } else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        return "Rock beats Scissors. You Lose.";
    } else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
        return "Scissors beats Paper. You Win!";
    }
}
function playerRock() {
	playerSelection = "rock";
	computerSelection = getComputerChoice();
	document.getElementById("game-results").innerText = playRound(playerSelection,computerSelection);
}
function playerPaper() {
	playerSelection = "paper";
	computerSelection = getComputerChoice();
	document.getElementById("game-results").innerText = playRound(playerSelection,computerSelection);
}
function playerScissors() {
	playerSelection = "scissors";
	computerSelection = getComputerChoice();
	document.getElementById("game-results").innerText = playRound(playerSelection,computerSelection);
}
