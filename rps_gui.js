
const compContent = document.querySelector('.computer-inputs p');
let bot_img = document.querySelector('.bot-img');

let computerChoice = () => {     

    let computerChoice;
    const result = Math.floor(Math.random()*3)+1;

    if(result === 1){
    bot_img.src = './imgs/rock.png';
    computerChoice = "rock";
    compContent.textContent = 'Computer Chose ROCK';

    }
else if(result === 2){
    computerChoice = "paper";
    compContent.textContent = 'Computer Chose PAPER'
    bot_img.src = './imgs/paper.png';

    }
else{
    computerChoice = "scissors";
    compContent.textContent = 'Computer Chose SCISSORS'
    bot_img.src = './imgs/scissors.png';

    }


    return computerChoice;
}


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let getPlayerChoice;

let player_img = document.querySelector('.player-fist');

function playerAction(e){
    let action = e.target.className;

    switch(action){
        case 'rock':
            player_img.src = './imgs/rock.png';
            getPlayerChoice = 'rock'
            return(getPlayerChoice);
            
        
        case 'paper':
            player_img.src = './imgs/paper.png';
            getPlayerChoice = 'paper'
            return(getPlayerChoice);
            
        case 'scissors':
            player_img.src = './imgs/scissors.png';
            getPlayerChoice = 'scissors'
            return(getPlayerChoice);
    }
}

function runGame(){
        
    let getComputerChoice = computerChoice();

if(getComputerChoice === "rock"){
    if(getPlayerChoice === "paper"){
        return('player');
    }
    else if(getPlayerChoice === "scissors"){
        return('computer');
    }
    else{
        return('tie');
    }
}
else if(getComputerChoice === "paper"){
    if(getPlayerChoice === "scissors"){
        return('player');
    }
    else if(getPlayerChoice === "rock"){
        return('computer');
    }
    else{
        return('tie');
    }
}
else if(getComputerChoice === "scissors"){
    if(getPlayerChoice === "rock"){
        return('player');
    }
    else if(getPlayerChoice === "paper"){
        return('computer');
    }
    else{
        return('tie');
    }
}

}

let countComputer = 0;
let countPlayer = 0;


function checkWinner(){
    if(countComputer>=3 || countPlayer>=3){

        if(countComputer > countPlayer){
            pointCount.classList.remove('player-round','comp-round','tie-round');
            pointCount.classList.add('comp-round');

            setTimeout(() => {alert("You have lost!");},2000);
            }
        else if(countComputer < countPlayer){

            pointCount.classList.remove('player-round','comp-round','tie-round');
            pointCount.classList.add('player-round');

            setTimeout(() => {alert("You have won!");},900);
            }
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

    }
}


const playerPoints = document.querySelector('.player .points');
const compPoints = document.querySelector('.computer .points');
const pointCount = document.querySelector('.point-count');



function playRound(e){

        playerAction(e);


        let round = runGame();
        if(round==='player'){
            countPlayer+=1;
            playerPoints.textContent = countPlayer;
            pointCount.textContent = "You win this round!";
            pointCount.classList.remove('player-round','comp-round','tie-round');
            void pointCount.offsetWidth; 
            pointCount.classList.add('player-round');
            


            }
        else if(round==='computer'){
            countComputer+=1;
            compPoints.textContent = countComputer;
            pointCount.textContent = "You lose this round!";
            pointCount.classList.remove('player-round','comp-round','tie-round');
            void pointCount.offsetWidth; 
            pointCount.classList.add('comp-round');
            
            }
        else if(round==='tie'){
            pointCount.textContent = "It's a tie this round!";
            pointCount.classList.remove('player-round','comp-round','tie-round');
            void pointCount.offsetWidth; 
            pointCount.classList.add('tie-round');
            
            
        }
    checkWinner();

}


rock.addEventListener('click',playRound); 
paper.addEventListener('click',playRound); 
scissors.addEventListener('click',playRound); 

