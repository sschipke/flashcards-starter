const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() && this.incorrectGuesses.push(turn.card.id);
    this.turns++;
    return turn.giveFeedback();
  }
}

module.exports = Round;