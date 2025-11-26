const computerResult = document.querySelector(".computerResult span");
const humanResult = document.querySelector(".humanResult span");
const resultContainer = document.querySelector(".gameResult");
const button = document.querySelectorAll(".btn");
const gameStatus = document.querySelector(".gameStatus");

let humanScore = 0;
let computerScore = 0;

button.forEach((btn) => {
	btn.addEventListener("click", () => {
		let humanSelection;
		const computerSelection = getComputerChoice();

		// RESET
		gameStatus.textContent = " ";

		if (btn.classList.contains("rock")) {
			humanSelection = btn.textContent.toLowerCase();
		} else if (btn.classList.contains("paper")) {
			humanSelection = btn.textContent.toLowerCase();
		} else {
			humanSelection = btn.textContent.toLowerCase();
		}
		console.log(humanSelection);

		playRound(humanSelection, computerSelection);
		computerResult.textContent = computerScore;
		humanResult.textContent = humanScore;

		if (humanScore === 5 || computerScore === 5) {
			btn.parentElement.parentElement.style.display = "none";
		}

		if (humanScore === 5) {
			gameStatus.textContent = `You won.`;
			gameStatus.style.fontSize = "27px";
		}

		if (computerScore === 5) {
			gameStatus.textContent = "Computer won.";
			gameStatus.style.fontSize = "27px";
		}
	});
});

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		gameStatus.textContent = "Same choice, let's play again";
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
}
