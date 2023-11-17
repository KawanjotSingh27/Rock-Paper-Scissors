const playerTxt=document.querySelector("#playertxt");
const computerTxt=document.querySelector("#computertxt");
const resultTxt=document.querySelector("#resulttxt")
const playbtns=document.querySelectorAll(".playbtns");
let player;
let computer;
let result;

playbtns.forEach(button=>button.addEventListener("click",()=>{
    player=button.textContent;
    computerTurn();

    playerTxt.textContent=`Player: ${player}`;
    computerTxt.textContent=`Computer: ${computer}`;
    resultTxt.textContent=checkWinner();
}))

function computerTurn(){
    const randNum=Math.floor(Math.random()*3)+1;

    switch(randNum){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER"
            break;
        case 3:
            computer="SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player==computer){
        return("Draw!");
    }
    else if(player=="ROCK"){
        return(computer=="PAPER"? "You Lose!":"You Win!");
    }
    else if(player=="PAPER"){
        return(computer=="SCISSORS"? "You Lose!":"You Win!");
    }
    else if(player=="SCISSORS"){
        return(computer=="ROCK"? "You Lose!":"You Win!");
    }
}