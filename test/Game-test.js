const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

const Game = require('../src/Game');


describe('Game', function () { 
  const game = new Game();
  game.start()
})

