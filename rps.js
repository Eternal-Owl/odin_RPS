//scope:
// Game of rock paper scissors in which the player is prompted to enter a value and is against a computer
// a full game will last 5 rounds


// Function for computer result
let computerChoice;

function getComputerChoice() {
    computerChoice = Math.floor((Math.random() * 3)+1 );
    console.log(computerChoice);
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
getComputerChoice()

//Function for Human choices
    // Prompt for choices
    // Capture response and store in variable
    // then initiate logic check (next function)



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



//Debug -- Print
console.log(computerChoice);

