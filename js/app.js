/*-------------------------------- Constants --------------------------------*/
const ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const suits = ['hearts','spades','diamonds','clubs'];


/*---------------------------- Variables (state) ----------------------------*/
let deck = [];
let players = [];
let deals = [];


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
    setupPlayers(numberPlayers);
    dealCards(0);
    console.log(deck);
    document.querySelector('input').value = '1';

};

function dealCards(playerCard){
    playerCard = (playerCard >= players.length) ? 0 : playerCard;
    console.log(playerCard);
    if(deck.length>0){
        let randIndex = Math.floor(Math.random()*deck.length);
        let card = deck.splice(randIndex, 1)[0];
        deals[playerCard].push(card);
        playerCard++;
        return dealCards(playerCard);
        console.log(deals);

    } else {
        message.textContent = 'Cards have all been dealt!';
        return;
    }

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

function setupPlayers(num){
    players = [];
    deals = [];
    for(let x=0; x < num;x++){
        let div = document.createElement('div');
        div.setAttribute('id','player'+(x+1));
        div.classList.add('player');
        let div1 = document.createElement('div');
        div1.textContent = 'Player ' + (x+1);
        players[x] = document.createElement('div');
        players[x].textContent = 'Cards';
        div.appendChild(div1);
        div.appendChild(players[x]);
        gamePlay.appendChild(div);
        deals.push([]);
        console.log(deals);
        console.log(div);
    }
};