let humanScore = 0;
let computerScore = 0;

function playGame() {
	for (let i = 1; i <= 5; i++) {
		const humanSelection = getHumanChoice(); // Saves the result of the getHumanChoice function
		const computerSelection = getComputerChoice(); // Saves the result of the getComputerChoice function

		playRound(humanSelection, computerSelection);
	}
	console.log('Your final score is: ', humanScore);
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log("Same choice, let's play again");
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		console.log("You lose! Paper beats Rock");
		computerScore += 1;
	} else if (humanChoice === "scissors" && computerChoice === "rock") {
		console.log("You lose! Rock beats Scissors");
		computerScore += 1;
	} else if (humanChoice === "paper" && computerChoice === "scissors") {
		console.log("You lose! Scissors beats Paper");
		computerScore += 1;
	} else {
		console.log("You win!!");
		humanScore += 1;
	}
} // This holds the logic for each round of the game

function getComputerChoice() {
	let gamesArray = ["rock", "paper", "scissors"];
	let randomChoice = Math.floor(Math.random() * gamesArray.length);
	return gamesArray[randomChoice];
}  // This function randomly selects for the computer's choice

// function getHumanChoice() {
// 	let choice = prompt(
// 		"Enter your game choice between (rock, paper & scissors):"
// 	);
// 	return choice.toLowerCase();
// } // This function asks for the choice of the player and makes it lower case

playGame(); // Calls the playGame function
