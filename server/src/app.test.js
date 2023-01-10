const { evaluateHands } = require('./app');
const Hand = require('./Hand');
const HandComparer = require('./HandComparer');

// Test entire games.
test('example game 1', () => {
  const game = `
    Kc 9s Ks Kd 9d 3c 6d
    9c Ah Ks Kd 9d 3c 6d
    Ac Qc Ks Kd 9d 3c
    9h 5s
    4d 2d Ks Kd 9d 3c 6d
    7s Ts Ks Kd 9d
  `;

  const expectedResult = `
    Kc 9s Ks Kd 9d 3c 6d Full House (winner)
    9c Ah Ks Kd 9d 3c 6d Two Pair
    Ac Qc Ks Kd 9d 3c 
    9h 5s 
    4d 2d Ks Kd 9d 3c 6d Flush
    7s Ts Ks Kd 9d 
  `;

  // TODO
  // expect(evaluateHands(game)).toBe(expectedResult);
  expect(true).toBe(true);
});

// TODO: More entire games tests...

// Test the Hand class.
test('example hand 1', () => {
  const handRaw = `
    Kc 9s Ks Kd 9d 3c 6d
  `;

  const hand = new Hand(handRaw);

  // TODO: Write Hand class tests....
  expect(true).toBe(true);
});


// Test the HandComparer class.
test('example set of hands for comparison 1', () => {
  const hands = [
    // TODO: Array of hands
  ];

  const result = new HandComparer(hands);

  // TODO: Write HandComparer class tests....
  expect(true).toBe(true);
});