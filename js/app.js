/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('.message')
const buttons = document.querySelectorAll('button')
const gamePlay = document.querySelector('.gamePlay')
const userPlay = document.querySelector('.userPlay')
const responseEl = document.querySelector('.response')
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(function(item){
    item.addEventListener('click',playGame);
});


/*-------------------------------- Functions --------------------------------*/

function playGame(e){
    let temp = e.target.textContent;
    console.log(temp);
    if (temp === 'Start'){
        startGame();
    }
};
function btnToggle(){
    buttons[0].classList.toggle('hide');
    buttons[1].classList.toggle('hide');
};

function startGame(){
    let numberPlayers = document.querySelector('input').value;
    document.querySelector('input').value = '1';

};