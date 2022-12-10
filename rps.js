const choices = ["rock", "paper","scissors"]; 
const matches = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0],
];
function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function choiceTranslator(choice) {
    return choices[choice].charAt().toUpperCase() + choices[choice].slice(1);
}

function scoreboard(userChoice, computerChoice, userScore, computerScore) {
    return `\n\nUser ${userScore} - ${computerScore} Computer\n\nUser chose: ${choiceTranslator(userChoice)}\nComputer chose: ${choiceTranslator(computerChoice)}`;
}

function playRound(message = "Enter your choice 'rock', 'paper' or 'scissors'") {
    let computerChoice = getComputerChoice();
    let userChoice = prompt(message);
    if (userChoice === null || userChoice === "" || (!choices.includes(userChoice.toLowerCase()))) {
        return playRound("Error: either canceled, empty or wrong selection, try again:");
    } else if (choices.indexOf(userChoice) === computerChoice) {
        return playRound("Tie! Try again!");
    } else {
        userChoice = choices.indexOf(userChoice);
        return [matches[userChoice][computerChoice], userChoice, computerChoice];
    }
}

function game(rounds = 5) {
    let userScore = 0, computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        let roundResults = playRound();
        if (roundResults[0] === 1) {
            userScore++;
            alert(`You won the round! ${scoreboard(roundResults[1], roundResults[2], userScore, computerScore)}`);
        } else if (roundResults[0] === 2) {
            computerScore++;
            alert(`You lost the round! ${scoreboard(roundResults[1], roundResults[2], userScore, computerScore)}`);
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