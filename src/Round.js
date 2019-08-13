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
  calculatePercentCorrect() {
    return parseInt((this.turns - this.incorrectGuesses.length) / this.turns*100)
  }
  endRound() {
    console.log(`** Round over!** You answered ${this.calculatePercentCorrect()}% correct`)
  }
}

module.exports = Round;