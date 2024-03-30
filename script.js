const choices = ["rock", "paper", "scissors"];

function getComputerChoice() 
{
    let comp_choice = choices[(Math.floor(Math.random() * choices.length))];
    return comp_choice
}

function getUserChoice()
{
    let user_choice;
    do 
    {
        user_choice = prompt("Choose rock, paper or scissors").toLowerCase();
    }while (!choices.includes(user_choice));
    return user_choice;
}

function playRound(playerSelection, computerSelection)
{
    if (computerSelection == "rock" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "scissors")
        return "Draw";
    else if (computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || computerSelection == 'paper' && playerSelection == 'scissors')
        return "Win!";
    else
        return "Lose!";
}

function playGame()
{
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 1; i <= 5; i++) 
    {
        const computerSelection = getComputerChoice();
        const playerSelection = getUserChoice();
        console.log(`round ${i} - Computer - ${computerSelection} || Player - ${playerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        if (result == 'Lose!')
            computerScore += 1;
        else if(result == 'Win!')
            playerScore += 1;
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Final score: Computer: ${computerScore} || Player: ${playerScore}`);
}
playGame();