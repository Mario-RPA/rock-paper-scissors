function getComputerChoice() {
    let choices = ["Rock", "Paper","Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

window.onload = getComputerChoice();