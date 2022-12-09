function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(message = "Enter your choice 'rock', 'paper' or 'scissors'") {
    let choices = ["rock", "paper","scissors"];    
    let computerChoice = choices[getComputerChoice()];
    let userChoice = prompt(message);
    if (userChoice === null || userChoice === "" || (!choices.includes(userChoice.toLowerCase()))) {
        playRound("Error, either Canceled, empty or wrong selection, try again:");
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

function game(rounds = 5) {
    let userScore = 0, computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        if (playRound()) {
            userScore++;
            alert(`You won the round! User: ${userScore} Computer: ${computerScore}`);            
        } else {
            computerScore++;
            alert(`You lost the round! User: ${userScore} Computer: ${computerScore}`);            
        }
    }
    if (userScore === computerScore) {
        alert("It's a tie!");
    } else if (userScore > computerScore) {
        alert("You won the match!");
    } else {
        alert("You lost the match!");
    }
}

window.onload = game();