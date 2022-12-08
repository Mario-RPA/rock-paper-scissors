function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function round() {
    let choices = ["rock", "paper","scissors"];    
    let computerChoice = choices[getComputerChoice()];
    let userChoice = prompt("Enter your choice 'rock', 'paper' or 'scissors'");
    if (userChoice === null || userChoice === "" || (!choices.includes(userChoice.toLowerCase()))) {
        round();
    } else if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return false;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return true;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return true;
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return false;
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return false;
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return true;
    }
}

window.onload = round();