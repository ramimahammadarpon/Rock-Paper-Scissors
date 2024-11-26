let userScore =  0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const disUserScore = document.querySelector("#user-score");
const disCompScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const indexNo = Math.floor(Math.random()*3);
    return options[indexNo];
}
const drawGame = () => {
    msg.innerText = `The game is Draw`;
    msg.style.background = "#081b31";
}
const winGame = (computerChoice, userChoice) => {
    if(userChoice === "rock") {
        if(computerChoice === "scissors"){
            msg.innerText = `You Won!! ${userChoice} beats ${computerChoice} `;
            userScore++;
            disUserScore.innerText = userScore;
            msg.style.background = "green";
        }
        else{
            msg.innerText = `You lost. ${computerChoice} beats ${userChoice} `;
            compScore++;
            disCompScore.innerText = compScore;
            msg.style.background = "red";
        }
    }
    else if(userChoice === "paper") {
        if(computerChoice === "rock"){
            msg.innerText = `You Won!! ${userChoice} beats ${computerChoice} `;
            userScore++;
            disUserScore.innerText = userScore;
            msg.style.background = "green";
        }
        else{
            msg.innerText = `You lost. ${computerChoice} beats ${userChoice} `;
            compScore++;
            disCompScore.innerText = compScore;
            msg.style.background = "red";
        }
    }
    else if(userChoice === "scissors") {
        if(computerChoice === "paper"){
            msg.innerText = `You Won!! ${userChoice} beats ${computerChoice} `;
            userScore++;
            disUserScore.innerText = userScore;
            msg.style.background = "green";
        }
        else{
            msg.innerText = `You lost. ${computerChoice} beats ${userChoice} `;
            compScore++;
            disCompScore.innerText = compScore;
            msg.style.background = "red";

        }
    }
}

const playGame = (userChoice) => {
    console.log("The user choice is",userChoice);
    const computerChoice = genCompChoice();
    console.log("Computer choice is",computerChoice);
    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        winGame(computerChoice,userChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})