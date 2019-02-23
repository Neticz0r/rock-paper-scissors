let choices = ["rock", "paper", "scissors"]
let localPlay = "rock"
let cpuChoice;
let scorePlayer = 0;
let scoreCPU = 0;

function cpuPlay(){
    cpuChoice = choices[Math.floor(Math.random()*choices.length)];
    return cpuChoice
}

function gameConditions(){
    cpuPlay();
    if (localPlay === cpuChoice){
        console.log("draw")
    // ROCK
    } else if (localPlay === choices[0] && cpuChoice === choices[1]){
        console.log("Cpu Wins")
        return scoreCPU = scoreCPU + 1
    } else if (localPlay === choices[0] && cpuChoice === choices[2]){
        console.log("Player Wins")
        return scorePlayer = scorePlayer + 1
    // PAPER
    } else if (localPlay === choices[1] && cpuChoice === choices[0]){
        console.log("Player Wins")
        return scorePlayer = scorePlayer + 1
    } else if (localPlay === choices[1] && cpuChoice === choices[2]){
        console.log("Cpu Wins")
        return scoreCPU = scoreCPU + 1
    // SCISSORS
    } else if (localPlay === choices[2] && cpuChoice === choices[0]){
        console.log("Cpu Wins")
        return scoreCPU = scoreCPU + 1
    } else if (localPlay === choices[2] && cpuPlay === choices[1]){
        console.log("Player Wins")
        return scorePlayer = scorePlayer+ 1
    // DEBUG
    } else {
        console.log("not working")
    }
}

function game(){
    for (i = 0; i < 5; i++){
        gameConditions();
        }   
}

game();
console.log("Player score: " + scorePlayer)
console.log("Cpu score: " + scoreCPU)

