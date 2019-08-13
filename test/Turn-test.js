const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('take a guess', function () {
    const turn = new Turn('attempt');
    expect(turn.guess).to.equal('attempt');
  });

  it('take a card', function () {
    const card1 = new Card(1, 'Question', ['answers'], 'correct')
    const turn = new Turn('attempt', card1);
    expect(turn.card).to.equal(card1);
  });

  it('be able to return a guess', function () {
    const card1 = new Card(1, 'Question', ['answers'], 'correct')
    const turn = new Turn('attempt1', card1);
    let test1 = turn.returnGuess();
    expect(test1).to.equal(turn.guess);
  });

  it('be able to return a card', function () {
    const card1 = new Card(1, 'Question', ['answers'], 'correct')
    const turn = new Turn('attempt1', card1);
    let testCard = turn.returnCard();
    expect(testCard).to.equal(turn.card);
  });

  it('be able to evaluate a guess', function () {
    const card1 = new Card({id:1, question:'Question', answers:['answers'], correctAnswer:'correct'})
    const turn1 = new Turn('incorrect', card1);
    const turn2 = new Turn('correct', card1);

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('be able to give feedback', function () {
    const card1 = new Card({id:1, question: 'Question', answers:['answers'], correctAnswer:'correct'})
    const turn1 = new Turn('incorrect', card1);
    const turn2 = new Turn('correct', card1);

    expect(turn1.giveFeedback()).to.equal('Incorrect!');
    expect(turn2.giveFeedback()).to.equal('Correct!');
  });




})