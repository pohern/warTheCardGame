/*-------------------------------- Constants --------------------------------*/
const ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const suits = ['hearts','spades','diams','clubs'];
const quotes = [];
/*---------------------------- Variables (state) ----------------------------*/
let deck = [];
let players = [];
let deals = [];
let round = 0;
let inPlay = false;
let total = 0;
let laughing = new Audio('/audio/laughing.mp3');
/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
const flipBtn = document.getElementById('flip');
const gamePlay = document.querySelector('.gamePlay');
const userPlay = document.querySelector('.userPlay');
const responseEl = document.querySelector('.response');
const totalRounds = document.getElementById('totalCount');
const input1 = document.getElementById('adding');
const jokes = document.getElementById('jokesButton');
const container = document.getElementById('containerDiv');
message.style.color = 'white';
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(function(item){
    item.addEventListener('click',playGame);
});

flipBtn.addEventListener('click', addition);

jokes.addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        let newQuote = {}
        newQuote['artist'] = data[0].setup
        newQuote['quote'] = data[0].punchline
        quotes.push(newQuote)
        render()
    })
    .catch((err) => {
        console.log(err)
    })
});
jokes.addEventListener('click',function(){
    laughing.play()
});
/*-------------------------------- Functions --------------------------------*/
function appendDiv (quote, artist, idx){
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `
                        <div class="jokeCard h-100" id="${quote.toLowerCase()}">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${artist}</p>
                                    <footer class="blockquote-footer">${quote}</footer>
                                </blockquote>
                            </div>
                            <button id = 'delButton' class='btn1' onClick={deleteQuote(${idx})}>X</button>
                        </div>    
                        `
    container.appendChild(newDiv)
};

function deleteQuote(idx) {
    quotes.splice(idx, 1)
    render()
};

function render() {
    container.innerHTML = ""
    quotes.forEach((quote, idx) => {
      appendDiv(quote["quote"], quote["artist"], idx)
    })
};

function addition(){
    let input2 = totalRounds.value
    result = parseInt(input1.value) + parseInt(input2)
    totalRounds.value = result
};

function playGame(e){
    let temp = e.target.textContent;
    if (temp === 'Start'){
        message.style.color = 'black';
        btnToggle();
        startGame(); 
    }
    if (temp == 'Flip'){
        let tempRuns = document.querySelector('input').value;
        responseEl.innerHTML = '';
        round = 0;
        for (let x = 0; x < tempRuns; x++){
            if(inPlay){
                message.innerHTML = `You played ${(x+1)} turns`;
                makeCards();
            }
        }
    }
};

function btnToggle(){
    buttons[0].classList.toggle('hide');
    buttons[1].classList.toggle('hide');
};

function startGame(){
    inPlay = true;
    gamePlay.innerHTML = '';
    let numberPlayers = document.querySelector('input').value;
    buildDeck();
    setupPlayers(numberPlayers);
    dealCards(0);
    makeCards();
    document.querySelector('input').value = '1';
};

function showCard(element,card) {
    if(card != undefined){
        element.style.backgroundColor = 'rgb(24, 98, 236)';
        let div = document.createElement('div');
        div.classList.add('card');
        if (card.suit ==='diams'){
            div.classList.add('diamonds')
            if (card.rank === 'A'){
                div.classList.add('A')
            }
            if (card.rank === 'K'){
                div.classList.add('K')
            }
            if (card.rank === 'Q'){
                div.classList.add('Q')
            }
            if (card.rank === 'J'){
                div.classList.add('J')
            }
            if (card.rank === 10){
                div.classList.add('r10')
            }
            if (card.rank === 9){
                div.classList.add('r09')
            }
            if (card.rank === 8){
                div.classList.add('r08')
            }
            if (card.rank === 7){
                div.classList.add('r07')
            }
            if (card.rank === 6){
                div.classList.add('r06')
            }
            if (card.rank === 5){
                div.classList.add('r05')
            }
            if (card.rank === 4){
                div.classList.add('r04')
            }
            if (card.rank === 3){
                div.classList.add('r03')
            }
            if (card.rank === 2){
                div.classList.add('r02')
            }
        }
        if (card.suit ==='hearts'){
            div.classList.add('hearts')
            if (card.rank === 'A'){
                div.classList.add('A')
            }
            if (card.rank === 'K'){
                div.classList.add('K')
            }
            if (card.rank === 'Q'){
                div.classList.add('Q')
            }
            if (card.rank === 'J'){
                div.classList.add('J')
            }
            if (card.rank === 10){
                div.classList.add('r10')
            }
            if (card.rank === 9){
                div.classList.add('r09')
            }
            if (card.rank === 8){
                div.classList.add('r08')
            }
            if (card.rank === 7){
                div.classList.add('r07')
            }
            if (card.rank === 6){
                div.classList.add('r06')
            }
            if (card.rank === 5){
                div.classList.add('r05')
            }
            if (card.rank === 4){
                div.classList.add('r04')
            }
            if (card.rank === 3){
                div.classList.add('r03')
            }
            if (card.rank === 2){
                div.classList.add('r02')
            }
        }
        if (card.suit ==='clubs'){
            div.classList.add('clubs')
            if (card.rank === 'A'){
                div.classList.add('A')
            }
            if (card.rank === 'K'){
                div.classList.add('K')
            }
            if (card.rank === 'Q'){
                div.classList.add('Q')
            }
            if (card.rank === 'J'){
                div.classList.add('J')
            }
            if (card.rank === 10){
                div.classList.add('r10')
            }
            if (card.rank === 9){
                div.classList.add('r09')
            }
            if (card.rank === 8){
                div.classList.add('r08')
            }
            if (card.rank === 7){
                div.classList.add('r07')
            }
            if (card.rank === 6){
                div.classList.add('r06')
            }
            if (card.rank === 5){
                div.classList.add('r05')
            }
            if (card.rank === 4){
                div.classList.add('r04')
            }
            if (card.rank === 3){
                div.classList.add('r03')
            }
            if (card.rank === 2){
                div.classList.add('r02')
            }
        }
        if (card.suit ==='spades'){
            div.classList.add('spades')
            if (card.rank === 'A'){
                div.classList.add('A')
            }
            if (card.rank === 'K'){
                div.classList.add('K')
            }
            if (card.rank === 'Q'){
                div.classList.add('Q')
            }
            if (card.rank === 'J'){
                div.classList.add('J')
            }
            if (card.rank === 10){
                div.classList.add('r10')
            }
            if (card.rank === 9){
                div.classList.add('r09')
            }
            if (card.rank === 8){
                div.classList.add('r08')
            }
            if (card.rank === 7){
                div.classList.add('r07')
            }
            if (card.rank === 6){
                div.classList.add('r06')
            }
            if (card.rank === 5){
                div.classList.add('r05')
            }
            if (card.rank === 4){
                div.classList.add('r04')
            }
            if (card.rank === 3){
                div.classList.add('r03')
            }
            if (card.rank === 2){
                div.classList.add('r02')
            }
        }
        element.appendChild(div);
    }
};

function dealRound(playerList, tempHolder){
    let currentWinner = {
        'high': null,
        'player': playerList[0]
    }
    let war = [];
    for(let x = 0; x < playerList.length; x++){
        let tempPlayerIdx = playerList[x];
        if(deals[tempPlayerIdx].length > 0){
            let card = deals[tempPlayerIdx].shift();
            if(currentWinner.high == card.value){
                if (war.length == 0){
                    war.push(currentWinner.player);
                }
                war.push(tempPlayerIdx);
            }
            if(!currentWinner.high || currentWinner.high < card.value){
                war = [];
                currentWinner.high = card.value;
                currentWinner.player = tempPlayerIdx;
                currentWinner.card = card;
            }
            tempHolder.push(card);
            showCard(players[tempPlayerIdx], card);
    }}
    if (war.length > 0) {
        dealRound(war, tempHolder);
    } else {
        updater(currentWinner.player, tempHolder);
    }
};

function makeCards(){
    let tempHolder = [];
    let playerList = [];
    for(let x = 0; x < players.length; x++){
        players[x].innerHTML = '';
        if (deals[x].length > 0){
            playerList.push(x);
        }
    }
    if (playerList.length == 1){
        winGame();
    }
    dealRound(playerList,tempHolder);
};

function winGame(){
    message.style.color = 'red';
    btnToggle();
    inPlay = false;
    for(let x = 0; x < players.length; x++){
        players[x].innerHTML += (deals[x].length >= total) ? `<br>WINNER` : `<br>LOSER`;
    }
    confetti.start(3000);
    message.innerHTML = 'Select number of players';
    document.querySelector('input').value = '2';
    totalRounds.value = '-1';
};

function updater(winner, tempHolder){
    players[winner].style.backgroundColor = 'green'
    players.forEach(player => 
        player.setAttribute('class','')
    );
    players[winner].setAttribute('class','animate__animated animate__tada');
    tempHolder.sort(function(){
        return .5 - Math.random();
    })
    for(let record of tempHolder){
        deals[winner].push(record);
    }
    for(let x = 0; x < players.length; x++){
        let div = document.createElement('div');
        div.classList.add('stats')
        if( deals[x].length == total){
            div.innerHTML = `Total ${deals[x].length} cards`;
            winGame();
        } else {
            div.innerHTML = deals[x].length < 1 ? 'Lost' : `Cards: ${(deals[x].length)}`;
        }
        players[x].appendChild(div);
        
    }
    responseEl.innerHTML += `Player ${(winner + 1)} won ${tempHolder.length} cards<br>`;
};

function dealCards(playerCard){
    playerCard = (playerCard >= players.length) ? 0 : playerCard;
    if(deck.length > 0){
        let randIndex = Math.floor(Math.random() * deck.length);
        let card = deck.splice(randIndex, 1)[0];
        deals[playerCard].push(card);
        playerCard++;
        return dealCards(playerCard);
    } else {
        message.textContent = `Cards have all been dealt!`;
        return;
    }
};

function buildDeck(){
    deck = [];
    for(let i = 0; i < suits.length; i++){
        for (let j = 0; j < ranks.length; j++){
            let card = {};
            total++;
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
    for(let x = 0; x < num; x++){
        let div = document.createElement('div');
        div.setAttribute('id','player'+(x+1));
        div.classList.add('player');
        let div1 = document.createElement('div');
        div1.textContent = `Player ${parseInt((x)+1)}`;
        players[x] = document.createElement('div');
        players[x].textContent = 'Cards';
        div.appendChild(div1);
        div.appendChild(players[x]);
        gamePlay.appendChild(div);
        deals.push([]);
    }
};