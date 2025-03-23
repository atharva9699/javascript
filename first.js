let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    console.log("Game was a Draw.");
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31"; // Fixed missing #
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreDisplay.innerText = userScore;
        console.log(`You Win! ${userChoice} beats ${compChoice}`);
        msg.innerText = `You Win! 🎉 ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreDisplay.innerText = compScore;
        console.log(`You Lose! ${compChoice} beats ${userChoice}`);
        msg.innerText = `You Lose! 😢 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice:", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
