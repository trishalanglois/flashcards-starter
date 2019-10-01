const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a user guess', function () {
    const turn = new Turn('testing testing');
    expect(turn.guess).to.equal('testing testing');
  })

  it('should store a card object', function () {
    const card = new Card;
    const turn = new Turn('guess', card);
    expect(turn.card).to.equal(card);
  })

  it('should have a method to return guess', function() {
    const turn = new Turn();
    expect(turn.returnGuess).to.be.a('function');
  });

  it('should return the guess from the return guess method', function () {
    const turn = new Turn;
    expect(turn.returnGuess()).to.equal(turn.guess);
  })

  it('should have method to return card', function () {
    const turn = new Turn();
    expect(turn.returnCard).to.be.a('function');
  })

  it('should return a card from the return card method', function() {
    const turn = new Turn;
    expect(turn.returnCard()).to.equal(this.card);
  })

  it('should have a method to give response to guess', function () {
    const turn = new Turn;
    expect(turn.giveFeedback).to.be.a('function');
  })

  it('should return true if user guess matches correct answer', function () {
    const card = new Card(1, 'What is your favorite pizza topping?', ['Pepperoni', 'Walnuts', 'Sardines'], 'Pepperoni');
    const turn = new Turn('Pepperoni', card);
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should return false if user guess does not match correct answer', function () {
    const card = new Card(1, 'What is your favorite pizza topping?', ['Pepperoni', 'Walnuts', 'Sardines'], 'Pepperoni');
    const turn = new Turn('Ham', card);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it ('should return message telling the user their guess is correct', function () {
    const card = new Card(1, 'What is your favorite pizza topping?', ['Pepperoni', 'Walnuts', 'Sardines'], 'Pepperoni');
    const turn = new Turn('Pepperoni', card);
    expect(turn.giveFeedback()).to.equal('correct!')
  })

  it ('should return message telling the user their guess is incorrect', function () {
    const card = new Card(1, 'What is your favorite pizza topping?', ['Pepperoni', 'Walnuts', 'Sardines'], 'Pepperoni');
    const turn = new Turn('Ham', card);
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })
});
