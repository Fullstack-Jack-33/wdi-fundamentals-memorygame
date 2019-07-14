console.log("Up and running!")

let cards = ["queen", "queen", "king", "king"]; 
let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        let result = cardsInPlay[0] === cardsInPlay[1] ? 'You found a match!' : 'Sorry, try again.';
        console.log(result);
        //alert(result);
    }
}

function flipCard(cardId) {
    cardsInPlay.push(cards[cardId]);
    console.log('User flipped ' + cards[cardId]);
    checkForMatch();
}

flipCard(0);
flipCard(2);
