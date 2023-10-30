import suits from './suits.mjs';
import values from './values.mjs';

class Card {
  // TODO: constructor is only receiving suit as a string
  constructor(suit, value) {
    /**
     * @param {Object} suit
     * @param {string} suit.symbol
     * @param {string} suit.color
     * @param {string} suit.order
     * @param {string} value
     */
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];

    this.createDeck();
  }

  createDeck() {
    for (const suit in suits) {
      for (const value of values) {
        this.cards.push(new Card(suit, value));
      }
    }
  }
}

const deck = new Deck();

console.log(deck.cards);
