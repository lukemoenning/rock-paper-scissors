
game();

function game() {
    let userInput;

    for (i=0; i<5; i++) {
        userInput = prompt("Rock, Paper, or Scissors?", "...");
        alert(playRound(userInput.toLowerCase(), getComputerChoice()));
    }
}

function playRound(playerChoice, computerChoice) {

    // rock 
    if (playerChoice == "rock" && computerChoice == "scissors") {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return `You lose. ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice == "rock" && computerChoice == "rock") {
        return "Tie!";
    } 

    // paper 
    else if (playerChoice == "paper" && computerChoice == "rock") {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return `You lose. ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        return "Tie!";
    }

    // scissors
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return `You lose. ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
        return "Tie!";
    }

    return "Invalid round";
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3 + 1);
    console.log(computerChoice);
    switch (computerChoice) {
        case 1:
            return "rock";
            break;
        case 2: 
            return "paper";
            break;
        case 3: 
            return "scissors";
            break;
        default:
            return "Invalid computer choice";
            break;
    }
}

