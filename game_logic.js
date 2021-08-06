function computerPlay() {
    const plays = ['Scissor', 'Paper', 'Rock'];
    return plays[randomized()].toLowerCase()

}
function randomized() {
    return Math.floor(Math.random()* 3);   
}


function playResult(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
         return ("tie");
    } else if ( (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock") ) {
        return ("lose");
    } else {
        return ("win");
    }
}

function resetChoice(humanOrComputerScore) {
    if (['rock', 'scissor', 'paper'].includes(Array.from(humanOrComputerScore.classList)[1])) {
        humanOrComputerScore.classList.remove(humanOrComputerScore.classList[1]);
    }
}

function updateScore(result) {
    let yourScore = document.querySelector('.hum')
    let hisScore = document.querySelector('.com')
    if (result === 'tie') {
        return ;
    } else if (result === 'win') {
        yourScore.textContent = (parseInt(yourScore.textContent) + 1 ).toString();
    } else {
        hisScore.textContent = (parseInt(hisScore.textContent) + 1 ).toString();
    }
}

function checkWin() {
    let yourScore = document.querySelector('.hum')
    let hisScore = document.querySelector('.com')

    if (yourScore.textContent ===  '5') {
        console.log('You win');
    } else if (hisScore.textContent === '5') {
        console.log('You lose');
    }
}

(function game() {
    const rock = document.querySelector('.btn-rock');
    const paper = document.querySelector('.btn-paper');
    const scissor = document.querySelector('.btn-scissor');
    const humanScore = document.querySelector('.display-human');
    const computerScore = document.querySelector('.display-computer');

    rock.addEventListener('click', function() {
        resetChoice(humanScore);
        humanScore.classList.add('rock');
        resetChoice(computerScore)
        computerScore.classList.add(computerPlay());
    })
    scissor.addEventListener('click', function() {
        resetChoice(humanScore);
        humanScore.classList.add('scissor');
        resetChoice(computerScore)
        computerScore.classList.add(computerPlay());
    })
    paper.addEventListener('click', function() {
        resetChoice(humanScore);
        humanScore.classList.add('paper');
        resetChoice(computerScore)
        computerScore.classList.add(computerPlay());
    })
    
    const group = document.querySelectorAll('button');
    for (let i=0; i<group.length; i++) {
        group[i].addEventListener('click', function(e) {
            let playerSelection = e.target.className.substring(4);
            let computerSelection = computerScore.className.split(' ')[1];
            let result = playResult(playerSelection, computerSelection);
            updateScore(result);
            checkWin();
        })
    }
})();






