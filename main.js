//make a function 
function computerPlay() {
    let randomNum = Math.floor(Math.random() * Math.floor(3))
    if (randomNum === 0) {
        return "rock"
    } else if (randomNum === 1) {
        return "paper"
    } else if (randomNum === 2)
        return "scissors"
}
function game(playRound) {
    //make a loop that will run playRound 5 times, keep and return the score.
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
            return 'You win, rock beats scissors.';
        } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
            return 'You lose, Paper beats rock.'
        } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'rock') {
            return 'You tied.'
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
            return 'You win, paper beats rock.'
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
            return 'You lose, Scissors beats paper.'
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'paper') {
            return 'You tied.'
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
            return 'You win, scissors beats paper.'
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
            return 'You lose, rock beats scissors.'
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'scissors') {
            return 'You tied.'
        }
    }
    console.log(playRound(playerSelection, computerSelection))
}

const playerSelection = window.prompt('Rock, paper, scissors?');
const computerSelection = computerPlay()
console.log('player picked ' + playerSelection)
console.log('computer picked ' + computerSelection)

console.log(game())
//console.log(playRound(playerSelection, computerSelection))