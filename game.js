let choices = ["rock", "paper", "scissors"]

let localPlay;

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

let playerImage = document.getElementById("playerImg")
let cpuImage = document.getElementById("cpuImg")
let resultMessage = document.getElementById("message")

let scorePlayer = 0
let scoreCPU = 0
let playerPoints = document.getElementById("pScore")
let cpuPoints = document.getElementById("cScore")

/** Event Listener **/

rock.onclick = function(){
    playerImage.src =  "./images/rock.png"
    localPlay = choices[0]
    shoot();
}

paper.onclick = function(){
    playerImage.src =  "./images/paper.png"
    localPlay = choices[1]
    shoot();
}

scissors.onclick = function(){
    playerImage.src =  "./images/scissors.png"
    localPlay = choices[2]
    shoot();
}

/** Computer Random Selection  **/
function cpuPlay(){
    cpuChoice = choices[Math.floor(Math.random()*choices.length)];
    return cpuChoice
}

/** Game Conditions, comparing results **/
function gameConditions(){
    // DRAW
    if (localPlay === cpuChoice){
        resultMessage.style.color = "#e0c933"
        resultMessage.textContent = "Draw"
    // ROCK
    } else if (localPlay === choices[0] && cpuChoice === choices[1]){
        scoreCPU = scoreCPU + 1
        cpuPoints.textContent = scoreCPU;
        resultMessage.style.color = "#c64949"
        resultMessage.textContent = "You lost this round!"
        //cpu
    } else if (localPlay === choices[0] && cpuChoice === choices[2]){
        scorePlayer = scorePlayer + 1
        playerPoints.textContent = scorePlayer;
        resultMessage.style.color = "#a7f442"
        resultMessage.textContent = "You won this round!"
        //player

    // PAPER
    } else if (localPlay === choices[1] && cpuChoice === choices[0]){
        scorePlayer = scorePlayer + 1
        playerPoints.textContent = scorePlayer;
        resultMessage.style.color = "#a7f442"
        resultMessage.textContent = "You won this round!"
        //player
    } else if (localPlay === choices[1] && cpuChoice === choices[2]){
        scoreCPU = scoreCPU + 1
        cpuPoints.textContent = scoreCPU;
        resultMessage.style.color = "#c64949"
        resultMessage.textContent = "You lost this round!"
        //cpu

    // SCISSORS
    } else if (localPlay === choices[2] && cpuChoice === choices[0]){
        scoreCPU = scoreCPU + 1
        cpuPoints.textContent = scoreCPU;
        resultMessage.style.color = "#c64949"
        resultMessage.textContent = "You lost this round!"
        //cpu
    } else if (localPlay === choices[2] && cpuChoice === choices[1]){
        scorePlayer = scorePlayer+ 1
        playerPoints.textContent = scorePlayer;
        resultMessage.style.color = "#a7f442"
        resultMessage.textContent = "You won this round!"
        //player
    // DEBUG
    } else {
        console.log("not working")
    }
}

/** Event driven functions **/

function shoot(){
    console.log("local play = " + localPlay)
    cpuPlay();
    gameConditions();
    console.log("cpu play = " + cpuChoice)
    imageChanger(); 
    console.log("Player score: " + scorePlayer)
    console.log("Cpu score: " + scoreCPU)

}

function imageChanger(){
    if (cpuChoice === choices[0]){
        cpuImage.src = "./images/rock.png"
    } else if (cpuChoice === choices[1]) {
        cpuImage.src = "./images/paper.png"
    } else if (cpuChoice === choices[2]) {
        cpuImage.src = "./images/scissors.png"
    }


}
