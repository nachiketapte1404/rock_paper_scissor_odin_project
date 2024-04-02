const choices = ["rock", "paper", "scissors"]; // choices for computer
let computerScore = 0; // to keep track of computer score
let playerScore = 0; // to keep track of player score
let i = 1; // to keep track of number of rounds
let play_continuation = document.getElementById("play_continuation");
let choice = document.getElementById("choice");
let final_result = document.getElementById("final_result");

// constants for event listeners
const button_rock = document.getElementById("rock");
const button_paper = document.getElementById("paper");
const button_scissors = document.getElementById("scissors");
const button_reset = document.getElementById("reset");
button_rock.addEventListener("click", function () {
    playGame("rock");
});


button_paper.addEventListener("click", function () {
    playGame("paper");
});


button_scissors.addEventListener("click", function () {
    playGame("scissors");
});


button_reset.addEventListener("click", function () {
    reset_count();
})


function getComputerChoice() {
    let comp_choice = choices[(Math.floor(Math.random() * choices.length))];
    return comp_choice
}

function getUserChoice() {
    let user_choice;
    do {
        user_choice = prompt("Choose rock, paper or scissors").toLowerCase();
    } while (!choices.includes(user_choice));
    return user_choice;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "scissors")
        return "Draw";
    else if (computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || computerSelection == 'paper' && playerSelection == 'scissors')
        return "Win!";
    else
        return "Lose!";
}

function check_score() {
    if (computerScore == 5 || playerScore == 5)
        return true;
    return false;
}

function playGame(playerSelection) {
    if (check_score() == false) {
        const computerSelection = getComputerChoice();
        choice.innerHTML += `<br><br>round ${i} - Computer - ${computerSelection} || Player - ${playerSelection}`;
        let result = playRound(playerSelection, computerSelection);
        if (result == 'Lose!')
            computerScore += 1;
        else if (result == 'Win!')
            playerScore += 1;
        choice.innerHTML += '<br>' + playRound(playerSelection, computerSelection) + `<br> Round ${i} score: Computer: ${computerScore} || Player: ${playerScore}`;
        i++;
        if (computerScore == 5 || playerScore == 5)
            final_result.innerHTML = (computerScore == 5) ? "You Lost the 5 match game!" : "You Won the 5 match game!";
    }
    else {
        play_continuation.innerHTML = "You have finished the game!\nPlease press reset to start a new game"
    }
}

function reset_count() {
    computerScore = 0;
    playerScore = 0;
    i = 1;
    choice.innerHTML = "";
    final_result.innerHTML = "";
    play_continuation.innerHTML = "";
}
