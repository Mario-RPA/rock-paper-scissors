const choices = ["rock", "paper","scissors"]; 
const matches = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0],
];
let userScore = 0;
let computerScore = 0;
const resultMessage = document.querySelector(".result-message");
const userScoreDOM = document.querySelector("h1.user-score")
const userChoiceDOM = document.querySelector("h1.user-choice")
const computerScoreDOM = document.querySelector("h1.computer-score")
const computerChoiceDOM = document.querySelector("h1.computer-choice")

function calculateRoundResults(results) {
    if (results === 1) {
        userScore++;
        resultMessage.textContent = "You won this round!";
        userScoreDOM.textContent = userScore;
    } else if (results === 2) {
        computerScore++;
        resultMessage.textContent = "Oh no!";
        computerScoreDOM.textContent = computerScore;
    } else if (results === 0) {
        resultMessage.textContent = "It's a tie! Try again!";
    }
}

function displayChoices(userChoice, computerChoice) {
    console.log(choiceTranslator(userChoice));
    userChoiceDOM.textContent = choiceTranslator(userChoice);
    computerChoiceDOM.textContent = choiceTranslator(computerChoice);
}

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function choiceTranslator(choice) {
    return choices[choice].charAt().toUpperCase() + choices[choice].slice(1);
}

function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    userChoice = choices.indexOf(userChoice);
    calculateRoundResults(matches[userChoice][computerChoice]);
    displayChoices(userChoice, computerChoice)
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", e => playRound(e.target.id)));