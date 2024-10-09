//scope:
// Game of rock paper scissors in which the player is prompted to enter a value and is against a computer
// a full game will last 5 rounds


// Function for computer result
let computerChoice;

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

//Function for Human choices
let humanChoice;

function getHumanChoice() {
    // collect response from human
    humanChoice = prompt("Enter your desired play");
    // set to lowercase for comparison
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

// Play Game Function for 5 rounds

function playGame() {
    // Declare Score Variables
    let playerScore = 0;
    let computerScore = 0;

    //Counts number of rounds
    let roundNumber = 0;

    // Function for play round
    function playRound(human,computer) {
        roundNumber += 1;

        //Capture responses
        getHumanChoice();
        getComputerChoice();
        

        // Debug values 
        console.log(`Human: ${humanChoice}`);
        console.log(`Computer: ${computerChoice}`);
        console.log(`Round: ${roundNumber}`);

    // Checks if human answer is valid
    if (humanChoice != 'rock' && humanChoice != 'scissors' && humanChoice != 'paper') {
        console.log ("Invalid Choice");

    // Decides Round winner
    } else {
            switch (humanChoice) {
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
            }
        } 
    }

    // Calls PlayRound Function
    while (roundNumber <5 ) {
        playRound()
    }
    //Displays Final Score
    console.log(`The scores are player: ${playerScore} and computer: ${computerScore}`);

    // Display winner text
    if (playerScore > computerScore) {
        console.log("Congrats you win!");
    } else if (playerScore < computerScore) {
        console.log("The computer beat you");
    } else {
        console.log ("It is a tie");
    }
}
playGame();






//Function for deciding winner
// Need to determine who wins what 
// Rock beats scissors
// scissors beats paper
// paper beats rock
// if values === then the round is a draw


//score keeping function
    // define variables for:
        // Human Score
        // Computer Score
        //Return Scores H - C


// need to start next round

//Running the functions
    // player function
    // game outcome function
    //score keeper function
    //reset game 


//Debug -- Print
// console.log(`Human: ${humanChoice}`);
// console.log(`Computer: ${computerChoice}`);