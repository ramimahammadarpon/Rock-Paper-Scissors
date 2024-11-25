let userScore =  0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const indexNo = Math.floor(Math.random()*3);
    return options[indexNo];
}

const playGame = (userChoice) => {
    console.log("The user choice is",userChoice);
    const computerChoice = genCompChoice();
    console.log("Computer choice is",computerChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})