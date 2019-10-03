const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(round) {
    this.currentRound = round;
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  start() {
    const cards = [];
    prototypeData.forEach() {
      const card = new Card(prototypeQuestions.id, prototypeQuestions.question, prototypeQuestions.answers, prototypeQuestions.correctAnswer);
      cards.push(card);
    }
    const deck = new Deck(cards);
    const round = new Round(deck);
    const game = new Game (round);
    this.printMessage(deck, round);
    this.printQuestion(round);
  };
}

module.exports = Game;
