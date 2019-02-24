let choices = ["rock", "paper", "scissors"]
let localPlay = "paper"
let cpuChoice;
let scorePlayer = 0
let scoreCPU = 0
let playerPoints = document.getElementById("pScore")
let cpuPoints = document.getElementById("cScore")

function cpuPlay(){
    cpuChoice = choices[Math.floor(Math.random()*choices.length)];
    return cpuChoice
}

function gameConditions(){
    // DRAW
    if (localPlay === cpuChoice){
        console.log("draw")

    // ROCK
    } else if (localPlay === choices[0] && cpuChoice === choices[1]){
        scoreCPU = scoreCPU + 1
        return cpuPoints.textContent = scoreCPU;
        //cpu
    } else if (localPlay === choices[0] && cpuChoice === choices[2]){
        scorePlayer = scorePlayer + 1
        return playerPoints.textContent = scorePlayer;
        //player

    // PAPER
    } else if (localPlay === choices[1] && cpuChoice === choices[0]){
        scorePlayer = scorePlayer + 1
        return playerPoints.textContent = scorePlayer;
        //player
    } else if (localPlay === choices[1] && cpuChoice === choices[2]){
        scoreCPU = scoreCPU + 1
        return cpuPoints.textContent = scoreCPU;
        //cpu

    // SCISSORS
    } else if (localPlay === choices[2] && cpuChoice === choices[0]){
        scoreCPU = scoreCPU + 1
        return cpuPoints.textContent = scoreCPU;
        //cpu
    } else if (localPlay === choices[2] && cpuChoice === choices[1]){
        scorePlayer = scorePlayer+ 1
        return playerPoints.textContent = scorePlayer;
        //player
    // DEBUG
    } else {
        console.log("not working")
    }
}

function shoot(){
    cpuPlay();
    gameConditions();
    console.log(cpuChoice)
    imageChanger(); 
    console.log("Player score: " + scorePlayer)
    console.log("Cpu score: " + scoreCPU) 
}

function imageChanger(){
    let cpuImage = document.getElementById("cpuImg")
    if (cpuChoice === choices[0]){
        cpuImage.src = "./images/rock.png"
    } else if (cpuChoice === choices[1]) {
        cpuImage.src = "./images/paper.png"
    } else if (cpuChoice === choices[2]) {
        cpuImage.src = "./images/scissors.png"
    }
}