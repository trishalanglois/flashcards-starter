const Turn = require('../src/Turn');

class Round {
  constructor (deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.turns += 1;
    const turn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck[this.turns];

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }
  calculatePercentCorrect() {
    var correctGuesses = this.turns - this.incorrectGuesses.length;
    var prePercentNumber = correctGuesses / this.turns;
    var percentCorrect = Math.floor(prePercentNumber * 100);
    return percentCorrect;
  }
  endRound() {
    console.log(`You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
