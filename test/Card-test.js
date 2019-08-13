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
    expect(card1.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });
});