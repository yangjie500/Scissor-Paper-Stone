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
    let yourScore = document.querySelector('.hum');
    let hisScore = document.querySelector('.com');
    let modal = document.querySelector('.modal-backdrop');
    let replay = document.querySelector('#again');

    if (yourScore.textContent ===  '5') {
        modal.style.display = 'block';
        modal.nextElementSibling.style.display = 'block';
        modal.nextElementSibling.children[1].textContent = 'YOU WIN!!!';

    } else if (hisScore.textContent === '5') {
        modal.style.display = 'block';
        modal.nextElementSibling.style.display = 'block';
        modal.nextElementSibling.children[1].textContent = 'YOU LOSE!!!';
    }

    replay.addEventListener('click', resetGame);

}

function resetGame() {
    const yourScore = document.querySelector('.hum');
    const hisScore = document.querySelector('.com');
    const modal = document.querySelector('.modal-backdrop');

    yourScore.textContent =  0;
    hisScore.textContent =  0;

    modal.style.display = 'none';
    modal.nextElementSibling.style.display = 'none';

    // Remove Extra Div
    const tempDiv = document.querySelectorAll('.temp');
    for (let i of tempDiv) {
        i.remove();
    }

}

function random(length) {
    return Math.random() * (length - 150)
}

function CreateRandomDiv(result) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const div = document.createElement('div');
    const main = document.querySelector('main');

    div.className = 'temp'
    div.style.cssText = `position: absolute; top: ${random(height)}px; left: ${random(width)}px;
                         color:white; font-size:1.5em; transform: rotate(${random(360)}deg)`
    div.textContent = result;
    main.appendChild(div);
    
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
    
    const group = document.querySelectorAll('.btn-rock, .btn-scissor, .btn-paper');
    for (let i=0; i<group.length; i++) {
        group[i].addEventListener('click', function(e) {
            let playerSelection = e.target.className.substring(4);
            let computerSelection = computerScore.className.split(' ')[1];
            let result = playResult(playerSelection, computerSelection);

            updateScore(result);
            checkWin();

            // Extra
            CreateRandomDiv(result);
        })
    };
})();