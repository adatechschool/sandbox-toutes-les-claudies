const values = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♠︎", "♣︎", "♡", "♢"];
const cards = [];

function createDeck () {
  for (let value in values) 
  {
    for (let suit in suits) 
    {
      cards.push(`${values[value]} ${suits[suit]}`)
    }
  }

  return cards;
}
createDeck();

function suffle(cards) {
    let currentIndex = cards.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }

    return cards;
}

suffle(cards);
console.log(cards);

// extraire deux cartes par joueurs et les stocker dans une variable avec une fonction deal qui prend en paramètre le nombre de cartes à tirer.

function deal (numberOfCards) {
    var hand = [];
    for (let i = 0; i < numberOfCards; i++) {
        take = cards.pop();
        hand.push(take);
    }
    return hand
}

const playerOne = deal(2);
const playerTwo = deal(2);

console.log("Il reste les cartes suivantes dans la pioche : " + cards);
console.log("Le joueur un a en main les cartes suivantes : " + playerOne);
console.log("Le joueur deux a en main les cartes suivantes : " + playerTwo);


// faire des cartes sous forme d'objets avec valeur, type, représentation pour faciliter la vérification.