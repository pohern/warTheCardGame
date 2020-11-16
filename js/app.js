/*-------------------------------- Constants --------------------------------*/
const ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
const suits = ['hearts','spades','diamonds','clubs']


/*---------------------------- Variables (state) ----------------------------*/
let deck = []


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
        btnToggle();
        startGame();
    }
};
function btnToggle(){
    buttons[0].classList.toggle('hide');
    buttons[1].classList.toggle('hide');
};

function startGame(){
    let numberPlayers = document.querySelector('input').value;
    buildDeck();
    console.log(deck);
    document.querySelector('input').value = '1';

};
function buildDeck(){
    deck = [];
    for(let i=0; i<suits.length; i++){
        for(let j=0;j<ranks.length;j++){
            let card = {};
            card.suit = suits[i];
            card.rank = ranks[j];
            card.value = (j + 1);
            deck.push(card);
        }
    }
}