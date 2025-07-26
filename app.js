let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".btn");

const draw = () => {
    let result = document.querySelector(".result");
    result.innerHTML = "It's a draw!";
    result.style.backgroundColor = "rgb(19,19,19)";
        result.style.border = "rgb(19,19,19)";
}

const result = (userWin, userChoice, compChoice) => {
    let result = document.querySelector(".result");
    if(userWin) {
        result.innerHTML = `Congratulation, You win! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        result.style.border = "green";
    } else {
        result.innerHTML = `Computer wins! ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "red";
        result.style.border = "red";
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        let me = document.querySelector(".user-score");
        me.textContent = ++userScore;
    } else {
        let comp = document.querySelector(".comp-score");
        comp.textContent = ++compScore;
    }
    result(userWin, userChoice, compChoice);
}

const winner = ((userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        draw();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }   
})    

const compChoice = (() => {
    let arr = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
});

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const computerChoice = compChoice(userChoice);
        compChoice(userChoice);
        winner(userChoice, computerChoice);
    })
})