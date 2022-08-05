let messageEl = document.getElementById("message");
let sumEl = document.querySelector("#sum");
let cardsEl = document.getElementById("cards");
let cards = [];
let result = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

// let player = {
//     namee: "John",
//     chips: 145
// }
// let playerEl = document.getElementById("player-El");
// playerEl.textContent = player.namee + " $" + player.chips; 

function getRandomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if(randomNum > 10){
        return 10;
    }else if(randomNum === 1){
        return 11;
    }else{
        return randomNum;
    }
}

function startGame(){
    isAlive = true;
    let num1 = getRandomCard();
    let num2 = getRandomCard();
    cards.push(num1,num2);
    result = num1 + num2;
    renderGame();
    if(isAlive === true || isAlive === false || hasBlackjack === true ){
        isAlive = true;
        hasBlackjack = false;
        cards = [];
        result = 0;
        num1 = getRandomCard(); 
        num2 = getRandomCard();
        cards.push(num1,num2);
        result = num1 + num2;
        renderGame();
    }
}

function renderGame(){
    //console.log(result);
    sumEl.textContent = "Sum: " + result;
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

    if(result < 21) {
        message = "Want to draw a new card?";
        messageEl.textContent = message;
        // console.log("Want to draw a new card?");
    }else if(result === 21){
        message = "You got Blackjack!";
        messageEl.textContent = message;
        // console.log("You got Blackjack!");
        hasBlackjack = true;
        // console.log("Did you get a Blackjack: " + hasBlackjack);
    }else{
        message = "You're out!";
        messageEl.textContent = message;
        // console.log("You're out!");
        isAlive = false;
        // console.log("Are you alive: " + isAlive);
    }
    //console.log(message);
}

function newCard(){
    if(isAlive === true && hasBlackjack < true){
        let card = getRandomCard();
        result += card;
        cards.push(card);
        renderGame();
    }
}