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
const winGame = (computerChoice, userChoice, userWin) => {
    if(userWin) {
        msg.innerText = `Congratulations!! You won, ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        disUserScore.innerText = userScore;
       
    }
    else {
        msg.innerText = `You Lost, ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        disCompScore.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    const computerChoice = genCompChoice();
    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = computerChoice === "scissors"? true:false;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "rock"? true:false;
        }
        else if(userChoice === "scissors") {
            userWin = computerChoice === "paper"? true:false; 
        }
        winGame(computerChoice, userChoice, userWin);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})