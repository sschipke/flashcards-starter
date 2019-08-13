const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

var card1;
beforeEach(() => {
  card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
})

describe('Card', function() {

  it('should be a function', function() {
    expect(Card).to.be.a('function');``
  });

  it('should be an instance of Card', function() {
    expect(card1).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card1.question).to.equal('What is Robbie\'s favorite animal');
  });  

  it('should store a list of possible answers', function() {
    expect(card1.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });  

  it('should store the correct answer', function() {
    expect(card1.correctAnswer).to.equal('sea otter');
  });
});