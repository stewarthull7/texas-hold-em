const Hand = require('./Hand');
const HandComparer = require('./HandComparer');

module.exports.evaluateHands = (input) => {
  const handsRaw = input.split('\n');

  // Evaluate each hand.
  const hands = handsRaw.map(cardsString => {
    // TODO: Strip white space from start of each line.

    // TODO: Validate

    // Prepare the cards.
    const cardsArray = cardsString.split(" ");

    return new Hand(cardsArray);
  });

  // NOTE: For testing purposes. Inspect the Hand instances.
  console.log(JSON.stringify({hands}, null, 4))

  const handComparer = new HandComparer(hands);
  
  return handComparer.compare();
}