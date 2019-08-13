const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

var card1, card2, card3, deck, round;
beforeEach(() => {
  card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
  card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder' });
  card3 = new Card({ id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap' })
  deck = new Deck([card1, card2, card3])
  round = new Round(deck);
});

describe('Round', function () { 

  it('should be an instance of Round', function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 
  
  it('should be able to return current card', function () {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to take a turn', function () {
    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.turns).to.equal(0);

    expect(round.returnCurrentCard()).to.equal(card1);


    round.takeTurn('sea otter');

    expect(round.returnCurrentCard()).to.equal(card2);

    expect(round.turns).to.equal(1);

    expect(round.incorrectGuesses).to.deep.equal([]);

  });

  it('should be able to take a turn with a wrong guess', function () {
    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.turns).to.equal(0);

    expect(round.returnCurrentCard()).to.equal(card1);


    round.takeTurn('sea otter');
    round.takeTurn('spleen')

    expect(round.returnCurrentCard()).to.equal(card3);

    expect(round.turns).to.equal(2);

    expect(round.incorrectGuesses).to.deep.equal([14]);

  });

  it('should be able to calculate the percent correct with right answers', function () {
    
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should be able to calculate the percent correct with wrong answers', function () {

    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('playing with bubble wrap');
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should be able to end the round with all correct answers', function () {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');
    round.endRound();
  
  });
  it('should be able to end the round with incorrect answers', function () {
    round.takeTurn('cucumber');
    round.takeTurn('gallbladder');
    round.takeTurn('dave');
    round.endRound();
  });

})