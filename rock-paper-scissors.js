const result = document.querySelector('#result');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Score: Player 0 - Computer 0';
result.appendChild(content);

let playerScore = 0;
let computerScore = 0; 

function computerPlay() {
  		let choice = random(3)

  		if(choice == 0) {
  	 		return 'Rock';
  		} 
  		else if (choice == 1) {
  			return 'Paper';
  		}
  		else if (choice == 2) {
  			return 'Scissors';
  		}
  	}

  	function playRound(playerSelection, computerSelection) {

  		playerSelection = playerSelection.toLowerCase();

  		if(playerSelection == 'rock') {
  			if(computerSelection == 'Rock') {
  				
  			}
  			else if(computerSelection == 'Paper') {
  				computerScore++;
          content.textContent = 'Score: Player ' + playerScore + ' - Computer ' + computerScore;
  			}
  			else {
          playerScore++;
  				content.textContent = 'Score: Player ' + playerScore + ' - Computer ' + computerScore;
  			}
  		}

  		if(playerSelection == 'paper') {
  			if(computerSelection == 'Rock') {
  				playerScore++;
          content.textContent = 'Score: Player ' + playerScore + ' - Computer ' + computerScore;
  			}
  			else if(computerSelection == 'Paper') {
  			}
  			else {
  				computerScore++;
          content.textContent = 'Score: Player ' + playerScore + ' - Computer ' + computerScore;
  			}
  		}

  		if(playerSelection == 'scissors') {
  			if(computerSelection == 'Rock') {
  				computerScore++;
          content.textContent = 'Score: Player ' + playerScore + ' - Computer ' + computerScore;
  			}
  			else if(computerSelection == 'Paper') {
  				playerScore++;
          content.textContent = 'Score: Player ' + playerScore + ' - Computer ' + computerScore;
  			}
  			else {
  			}
  		}
  	}

  	function game() {
  		let playerScore = 0;
  		let computerScore = 0;

  		

  			let playerSelection = prompt("Choose one: Rock, Paper, or Scissors");

  			let result = playRound(playerSelection, computerPlay());

  			if(result.includes('win')) {
  				playerScore++;
  			}
  			else if (result.includes('lose')) {
  				computerScore++;
  			}

  			
  		

  		if(playerScore > computerScore) {
  			console.log('You win! The final score is ' + playerScore + ' - ' + computerScore);
  		} else if (computerScore > playerScore) {
  			console.log('You lose! The final score is ' + computerScore + ' - ' + playerScore);
  		} else {
  			console.log('It\'s a tie!');
  		}
  	}

  	//returns a random number between 0 and the given number
  	function random(number) {
  		return Math.floor(Math.random() * number);
  	}

    //button actions
    let rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
      playRound('rock', computerPlay());
    });

    let paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
      playRound('paper', computerPlay());
    });

    let scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
      playRound('scissors', computerPlay());
    });
  	