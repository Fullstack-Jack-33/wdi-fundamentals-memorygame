console.log("Up and running!")

let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
]; 
let cardsInPlay = [];

function checkForMatch(cardId, elem) {
    elem.setAttribute("src", cards[cardId].cardImage);

    if (cardsInPlay.length === 2) {
        let result = cardsInPlay[0] === cardsInPlay[1] ? 'You found a match!' : 'Sorry, try again.';
        console.log(result);
        alert(result);
   }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    console.log('User flipped ' + cards[cardId].rank);
    checkForMatch(cardId, this);
}

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.setAttribute('class', 'cards');
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}
createBoard();