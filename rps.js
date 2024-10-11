// Function for computer result
let computerChoice;
let playerChoice;

// Set scores
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor((Math.random() * 3)+1 );
    switch (computerChoice) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        case 3:
            computerChoice ='paper';
            break;
        }
        return computerChoice;
    }

// Function for play round
function playRound() {

    getComputerChoice();
    

    // Debug values 
    console.log(`Human: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);

    // Checks if human answer is valid
    if (playerChoice != 'rock' && playerChoice != 'scissors' && playerChoice != 'paper') {
        console.log ("Invalid Choice");

    // Decides Round winner
    } else {
            switch (playerChoice) {
                case "rock":
                    switch (computerChoice) {
                        case "rock": 
                            console.log('It is a tie');
                            break;
                        case "scissors":
                            console.log('You win. Rock beats scissors');
                            playerScore += 1;
                            break;
                        case "paper":
                            console.log ('You lose. Paper beats rock.')
                            computerScore += 1;
                            break;
                    }
                    break;
                case "scissors":
                    switch (computerChoice) {
                        case "scissors": 
                            console.log('It is a tie');
                            break;
                        case "rock":
                            console.log('You lose. Rock beats scissors');
                            computerScore += 1;
                            break;
                        case "paper":
                            console.log ('You win. Scissors beats rock.')
                            playerScore += 1;
                            break;
                    }   
                    break;
                case "paper":
                    switch (computerChoice) {
                        case "paper": 
                            console.log('It is a tie');
                            break;
                        case "rock":
                            console.log('You win. Paper beats rock');
                            playerScore += 1;
                            break;
                        case "scissors":
                            console.log ('You lose. Scissors beats paper.')
                            computerScore += 1;
                            break;
                    }   
                    break;
            } } 
} // end function for play round

// Listening for start game button
const startGame = document.getElementById('playRound');

startGame.addEventListener('click', function() {
    // Adjusting header text
    const header = document.querySelector('h1.mainHeader');
    header.textContent = "Select an option!"
    // Remove start Button
    const removeStart = document.querySelectorAll(`button`);
    removeStart.forEach(button => button.remove());

    // Create option buttons
    const container = document.querySelector('.buttonContainer');
    const rpsButtonLabels = [`Rock`,`Paper`,`Scissors`];

    rpsButtonLabels.forEach((label) => {
        const rpsButtons = document.createElement(`button`);

        rpsButtons.textContent = label;
        container.appendChild(rpsButtons);
    })
    



// listen for response

// on response -> set based  on button text




});

