function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(message = "Enter your choice 'rock', 'paper' or 'scissors'") {
    let choices = ["rock", "paper","scissors"];    
    let computerChoice = choices[getComputerChoice()];
    let userChoice = prompt(message);
    if (userChoice === null || userChoice === "" || (!choices.includes(userChoice.toLowerCase()))) {
        return playRound("Error: either canceled, empty or wrong selection, try again:");
    } else if (userChoice === computerChoice) {
        return playRound("Tie! Try again!");
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return [false, userChoice, computerChoice];
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return [true, userChoice, computerChoice];
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return [true, userChoice, computerChoice];
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return [false, userChoice, computerChoice];
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return [false, userChoice, computerChoice];
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return [true, userChoice, computerChoice];
    }
}

function game(rounds = 5) {
    let userScore = 0, computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        let roundResults = playRound();
        if (roundResults[0]) {
            userScore++;
            alert(`You won the round!\n\nUser ${userScore} - ${computerScore} Computer\n\nUser chose: ${roundResults[1]}\nComputer chose: ${roundResults[2]}`);            
        } else {
            computerScore++;
            alert(`You lost the round!\n\nUser ${userScore} - ${computerScore} Computer\n\nUser chose: ${roundResults[1]}\nComputer chose: ${roundResults[2]}`);
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