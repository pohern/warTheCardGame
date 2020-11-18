/*-------------------------------- Constants --------------------------------*/
const ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const suits = ['hearts','spades','diams','clubs'];


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
    // console.log(temp);
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
    makeCards();
    document.querySelector('input').value = '1';
};

function showCard(element,card) {
    console.log(card);
    if(card != undefined){
        element.style.backgroundColor = 'cornflowerblue';
        let html1 = card.rank + '<br>&' + card.suit + ';';
        let html2 = card.rank + '&' + card.suit + ';';
        let div = document.createElement('div');
        div.classList.add('card');
        if (card.suit ==='diams'){
            div.classList.add('diamonds')
        }
        if (card.suit ==='hearts'){
            div.classList.add('hearts')
        }
        if (card.suit ==='clubs'){
            div.classList.add('clubs')
        }
        if (card.suit ==='spades'){
            div.classList.add('spades')
        }
        // if(card.suit === 'hearts' || card.suit === 'diams'){
        //     div.classList.add('red');
        // };

        let cardTop = document.createElement('span');
        cardTop.innerHTML = html2;
        cardTop.classList.add('small');
        div.appendChild(cardTop);

        let cardBottom = document.createElement('span');
        cardBottom.innerHTML = html1;
        cardBottom.classList.add('big');
        div.appendChild(cardBottom);
        element.appendChild(div);

        console.log(div);
    }
};

function makeCards(){
    let tempHolder =[];
    let currentWinner = {
        'high':null,
        'player':null
    }
    let war = [];
    for(let x=0;x<players.length;x++){
        let card = deals[x].shift();
        if(currentWinner.high == card.value){
            // console.log('tie');
            if (war.length == 0){
                war.push(
                    {'player':currentWinner.player,
                     'card':currentWinner.card
            });
            war.push({
                'player':x,
                'card':card
            })
            }
        }
        if(!currentWinner.high || currentWinner.high < card.value){
            currentWinner.high = card.value;
            currentWinner.player = x;
            currentWinner.card = card;
        }
        tempHolder.push(card);
        showCard(players[x],card);
    }
    //!!!WAR!!!
    console.log(currentWinner);
    console.log(tempHolder);
    updater(currentWinner.player, tempHolder);
};
//!!!Giving the winner the cards won that round
function updater(winner, tempHolder){
    players[winner].style.backgroundColor = 'green'
   // !!!Randomizes Cards before being put into winners hand
    console.log(tempHolder)
    tempHolder.sort(function(){
        return .5 - Math.random();
    })
    console.log(tempHolder);


    for(let record of tempHolder){
        deals[winner].push(record);
    }
    responseEl.innerHTML += `Player ${(winner + 1)} won ${tempHolder.length} cards
    `;

};

function dealCards(playerCard){
    playerCard = (playerCard >= players.length) ? 0 : playerCard;
    // console.log(playerCard);
    if(deck.length>0){
        let randIndex = Math.floor(Math.random()*deck.length);
        let card = deck.splice(randIndex, 1)[0];
        deals[playerCard].push(card);
        playerCard++;
        return dealCards(playerCard);
        // console.log(deals);
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
};

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
        // console.log(deals);
        // console.log(div);
    }
};