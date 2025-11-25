let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Same choice, let's play again");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Same choice, let's play again");
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Same choice, let's play again");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`Computer's choice was ${computerChoice}`);
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`Computer's choice was ${computerChoice}`);
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`Computer's choice was ${computerChoice}`);
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    } else {
        console.log(`Computer's choice was ${computerChoice}`);
        console.log("You win!!");
        humanScore += 1;
    }
}

// 

const playGame = function () {

	for (let i = 1; i <= 5; i++) {
        const getComputerChoice = function () {
            let gamesArray = ["rock", "paper", "scissors"];
            let randomChoice = Math.floor(Math.random() * gamesArray.length);
            return gamesArray[randomChoice];
        }; // This function randomly selects the computer's choice between 

        const getHumanChoice = function () {
            let choice = prompt("Enter your game choice between (rock, paper & scissors):");
            return choice;
        }; // This function asks for the choice of the player

        const humanSelection = getHumanChoice(); // Saves the result of the getHumanChoice function
        const computerSelection = getComputerChoice(); // Saves the result of the getComputerChoice function

        console.log(playRound(humanSelection, computerSelection))
        console.log(`Your score is ${humanScore}`);
        console.log(`Computer's score is ${computerScore}`);
	}
};

console.log(playGame());

