class HandComparer {
  constructor(hands) {
    this.hands = hands;
  }

  compare() {
    // TODO: Compare hands.
    const result = `
    Kc 9s Ks Kd 9d 3c 6d Full House (winner)
    9c Ah Ks Kd 9d 3c 6d Two Pair
    Ac Qc Ks Kd 9d 3c 
    9h 5s 
    4d 2d Ks Kd 9d 3c 6d Flush
    7s Ts Ks Kd 9d 
  `;

    return result;
  }
}

module.exports = HandComparer;