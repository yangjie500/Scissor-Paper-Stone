let playerSelection 
let computerSelection

function playerPlay() {
    let play = window.prompt("Rock, Paper, Scissor! What would you choose? :")
    return play.toLowerCase()
}
function computerPlay() {
    const plays = ['Scissor', 'Paper', 'Rock'];
    return plays[randomized()].toLowerCase()

}
function randomized() {
    return Math.floor(Math.random()* 3);   
}


function playResult(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
         return("It's a tie!!!");
    } else if ( (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock") ) {
        return("You Lose!!!, Computer has chose " + computerSelection + ' which beats your ' + playerSelection);
    } else {
        return("Computer chose " + computerSelection + " sooooo You Win!!! NOICE~");
    }
}

function game() {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    return playResult(playerSelection, computerSelection);
}


console.log(game())



// for (let i = 1; i < 6; i++) {
//     console.log(game())
// }


