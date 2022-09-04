let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [ ];
let hasBlackjack = false;
let isAlive = false;
let sum = firstCard + secondCard;
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player ={
    name:"Tolulope",
    chips:220
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber ===1){
        return 11;
    }
    else if  (randomNumber > 10){
        return 10;
    } else{
        return randomNumber;
    }
     

}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
     cards = [firstCard, secondCard];
     sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length;i++){
        cardsEl.textContent += " " + cards[i];
    }
    sumEl.textContent = "Sum:" + sum;

    if (sum <= 20){
        message ="Do you want to draw a new card?"
        isAlive = true;
    } else if (sum === 21){
        message ="Wohoo! you've got Blackjack!"
        hasBlackjack = true;
    } else{
        message ="You are out of the game!"
        isAlive = false;
    }


    messageEl.textContent = message;
    
    
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
    let card = getRandomCard()
    sum += card;
    cards.push(card);
    renderGame();
    

    }

    
}