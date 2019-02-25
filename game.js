/** Game Variables **/
let choices = ["rock", "paper", "scissors"];
let localPlay;
let scorePlayer = 0;
let scoreCPU = 0;
let roundNumber = 1;
/** Weapons buttons = localPlay**/
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
/** Choices Display Image**/
let playerImage = document.getElementById("playerImg");
let cpuImage = document.getElementById("cpuImg");
/** Round result messsage and Game result message (modal)**/
let resultMessage = document.getElementById("message");
let endMessage = document.getElementById("endMessage");
/** Score and Round Numbers**/
let playerPoints = document.getElementById("pScore");
let cpuPoints = document.getElementById("cScore");
let round = document.getElementById("roundNumber");
/** Reset  **/
let resetPage = document.getElementById("reset");
let resetBtn = document.getElementById("resetTxt");
/** Event Listener **/
rock.onclick = function() {
	playerImage.src = "./images/rock.png"
	localPlay = choices[0]
	shoot();
};
paper.onclick = function() {
	playerImage.src = "./images/paper.png"
	localPlay = choices[1]
	shoot();
};
scissors.onclick = function() {
	playerImage.src = "./images/scissors.png"
	localPlay = choices[2]
	shoot();
};
/** Computer Random Selection  **/
function cpuPlay() {
	cpuChoice = choices[Math.floor(Math.random() * choices.length)];
	return cpuChoice
};
/** Game Conditions, comparing results **/
function gameConditions() {
	// DRAW
	if (localPlay === cpuChoice) {
		draw();
		// ROCK
	} else if (localPlay === choices[0] && cpuChoice === choices[1]) {
		loose();
	} else if (localPlay === choices[0] && cpuChoice === choices[2]) {
		win();
		// PAPER
	} else if (localPlay === choices[1] && cpuChoice === choices[0]) {
		win();
	} else if (localPlay === choices[1] && cpuChoice === choices[2]) {
		loose();
		// SCISSORS
	} else if (localPlay === choices[2] && cpuChoice === choices[0]) {
		loose();
	} else if (localPlay === choices[2] && cpuChoice === choices[1]) {
		win();
		// DEBUG
	} else {
		console.log("not working")
	}
};
/***** Html Content Change *****/
/** Images **/
function imageChanger() {
	if (cpuChoice === choices[0]) {
		cpuImage.src = "./images/rock.png"
	} else if (cpuChoice === choices[1]) {
		cpuImage.src = "./images/paper.png"
	} else if (cpuChoice === choices[2]) {
		cpuImage.src = "./images/scissors.png"
	}
};
/** Result **/
function win() {
	scorePlayer = scorePlayer + 1
	playerPoints.textContent = scorePlayer;
	resultMessage.style.color = "#a7f442"
	resultMessage.textContent = "You won this round!"
	resultMessage.style.transition = "all 0.5s"
};

function loose() {
	scoreCPU = scoreCPU + 1
	cpuPoints.textContent = scoreCPU;
	resultMessage.style.color = "#c64949"
	resultMessage.textContent = "You lost this round!"
	resultMessage.style.transition = "all 0.5s"
};

function draw() {
	resultMessage.style.color = "#e0c933"
	resultMessage.textContent = "Draw"
	resultMessage.style.transition = "all 0.5s"
};
/** Round Checker **/
function roundCounter() {
	if (scorePlayer >= 2) {
		endMessage.textContent = "You Won The Game!"
		endMessage.style.color = "#a7f442"
		showModal();
	} else if (scoreCPU >= 2) {
		endMessage.textContent = "You Lost The Game!"
		endMessage.style.color = "#c64949"
		showModal();
	}
};
/** Game Reset function through Modal ***/
function showModal() {
	resetPage.style.display = "block";
};
resetBtn.onclick = function() {
	gameReset();
	resetPage.style.display = "none";
};

function gameReset() {
	roundNumber = 1;
	round.textContent = roundNumber;
	scoreCPU = 0;
	cpuPoints.textContent = scoreCPU;
	scorePlayer = 0;
	playerPoints.textContent = scorePlayer;
	resultMessage.innerHTML = "&nbsp;"
	playerImage.src = "./images/user.png"
	cpuImage.src = "./images/cpu.png"
};
/** main function **/
function shoot() {
	cpuPlay();
	gameConditions();
	imageChanger();
	roundNumber++
	round.textContent = roundNumber;
	roundCounter();
};
