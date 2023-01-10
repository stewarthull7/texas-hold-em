class Hand {
  constructor(inputHand) {
    this.inputHand = inputHand;
    this.maxKindCount = 0;
    this.maxSuitCount = 0;
    this.pairCount = 0;
    this.highestCard = 0;
    this.maxSequence = 0;
    this.rank = 0;
    
    this.evaluateHand();
    this.determineRank();
  }

  /**
   * Evaluate the hand.
   */
   evaluateHand() {
    this.countKinds();
    this.countSuits();
    this.countPairs();
    this.findHighestCard();
    this.findMaxSequence();
  }

  countKinds() {
    // TODO: Loop through each card and map its kinds, 
    // comparing on each iteration and tracking the max value.
  }

  countSuits() {
    // TODO: Loop through each card and map its suits, incrementing the count of each.
  }

  countPairs() {
    // TODO
  }

  findHighestCard() {
    // TODO
  }

  findMaxSequence() {
    // TODO
  }

  determineRank() {
    // TODO
  }
}

module.exports = Hand;