const Hand = require('./Hand');
const HandComparer = require('./HandComparer');

module.exports.evaluateHands = (input) => {
  const handsRaw = input.split('\n');
  const hands = handsRaw.map(handRaw => {
    return new Hand(handRaw);
  });

  const handComparer = new HandComparer(hands);
  
  return handComparer.compare();
}