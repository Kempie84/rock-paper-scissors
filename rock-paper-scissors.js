//Declare computer choice variable of type string default value ""
let computerChoice = "";
//Declare user choice variable of type string default value ""
let humanChoice = "";
/*Function getComputerChoice() will generate computer choice of rock, paper or scissors 
and store it in computer choice variable, using math.random to generate random choice */
function getComputerChoice(){
    //generate a random number and assign it to randomNumber variable
    let randomNumber = Math.random();
    // convert randomNumber to rock, paper or scissors
    if (randomNumber <= 0.333) {
        return "rock";
    } else if (randomNumber >= 0.666) {
        return "scissors";
    } else {
        return "paper";
    }
};

/*Function getHumanChoice() will get the choice of rock, paper or scissors using a prompt:
"Choose your weapon! (only rock, paper or scissors)". Store choice in user choice variable */
function getHumanChoice() {
    return prompt("Choose your weapon: rock, paper or scissors?t").toLowerCase();
}
// Declare humanScore variable type int default value 0
let humanScore = 0;
// Declare computerScore variable type int default value 0
let computerScore = 0;
/* Create function playRound that compares the choices of Human and Computer,
it takes two parameters as arguments(humanChoice and computerChoice), 
stores the choices in new constant.*/

//compare choices and declare a winner using console.log
//Increment winners score by 1 */
function playRound(computerChoice, humanChoice){
    switch(humanChoice + computerChoice) {
        case "rockrock":
            console.log("You both chose rock, it's a tie!");
            break;
        case "paperpaper":
            console.log("You both chose paper, it's a tie!");
            break;
        case "scissorsscissors":
            console.log("You both chose scissors, it's a tie!");
            break;
        case "rockscissors":
            console.log("You Win! Rock beats scissors.");
            humanScore += 1;
            break;
        case "rockpaper":
            console.log("You Lose! Paper beats Rock.");
            computerScore +=1;
            break;
        case "paperrock":
            console.log("You Win! Paper beats rock.");
            humanScore += 1;
            break;
        case "paperscissors":
            console.log("You Lose! Scissors beat paper.");
            computerScore += 1;
            break;
        case "scissorspaper":
            console.log("You Win! Scissors beat paper.");
            humanScore += 1;
            break;
        case "scissorsrock":
            console.log("You Lose! Rock beats scissors");
            computerScore += 1;
            break;
    };
};





// Create function playGame()

//It contains function playRound() and the score variables

//It plays five rounds using a for loop. */
const playGame = function(choice) {
    computerChoice = getComputerChoice();
    humanChoice = choice.toLowerCase();

    playRound(computerChoice, humanChoice);
    
    const playerScoreBoard = document.querySelector("#playerScore");
    playerScoreBoard.textContent = `${humanScore}`;

    const computerScoreBoard = document.querySelector("#computerScore");
    computerScoreBoard.textContent = `${computerScore}`;
};

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});