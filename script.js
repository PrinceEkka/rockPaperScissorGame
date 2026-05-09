let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#comp-score");

let drawGame = ()=>{
    msg.innerText= "Game is Draw";
    msg.style.backgroundColor = "#081b31";
}

let showWinner = (userWin, userChoice, compChoice) => {

    
    if(userWin){
        userScore ++;
        us.innerText = userScore;
        msg.innerText = `You Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        cs.innerText= compScore;
        msg.innerText = `You Loose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const gemCompChoice = () =>{
    const options=["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    const compChoice = gemCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice === "rock"){
           userWin= compChoice === "paper" ? false : true ;
        }else if(userChoice ==="paper"){
           userWin= compChoice === "rock" ? true : false;
        }else if (userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    

};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

