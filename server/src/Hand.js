class Hand {
  constructor(cards) {
    this.cardValues = {
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "T": 10,
      "J": 11,
      "Q": 12,
      "K": 13,
      "A": 14,
    };

    /* For tracking the number of each kind */
    this.kinds = {
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "T": 0,
      "J": 0,
      "Q": 0,
      "K": 0,
      "A": 0
    };
    
    /* For tracking the number of each suit */
    this.suits = {
      "s": 0,
      "c": 0,
      "h": 0,
      "d": 0,
    };

    this.highestCard = null;
    this.maxSequence = null;
    this.rank = 0;
    
    this.cards = this.formatCards(cards);
    
    this.evaluateHand();
    this.determineRank();
  }

  /**
   * Parse the values of the cards which we will use for 
   * determining the highest card and max sequence.
   */
  formatCards(input) {
    const formattedCards = [];

    for (let [kind, suit] of input) {
      const card = {
        kind,
        suit,
        value: this.cardValues[kind],
      }

      formattedCards.push(card);
    }

    // Sort them in ascending order.
    formattedCards.sort((a, b) => a.value - b.value);

    return formattedCards;
  }

  /**
   * Evaluate the hand.
   */
   evaluateHand() {
    this.tally();
    this.findHighestCard();
    this.findMaxSequence();
  }

  tally() {
    // Loop through each card and map its suits and kinds.
    for (let card of this.cards) {
      this.kinds[card.kind]++
      this.suits[card.suit]++
    }
  }

  findHighestCard() {
    this.highestCard = Math.max(...this.cards.map(card => card.value));
  }

  findMaxSequence() {
    let l = 0;
    let r = 1;
    let count = 1;
    let max = 0;
    let sequence = [];

    while (r < this.cards.length && this.cards.length - l > max) {
      if (this.cards[r - 1].value === this.cards[r].value - 1) {
        sequence.push(this.cards[r]);
        count++;
      } else if (this.cards[r - 1].value !== this.cards[r].value) {
        sequence = [this.cards[r]];
        count = 1;
        l = r;
      }
      max = Math.max(count, max);
      r++;
    }

    this.maxSequence = sequence;
  }

  determineRank() {
    if (this.isRoyalFlush())
      this.rank = 1;
    else if (this.isStraightFlush())
      this.rank = 2;
    else if (this.isFourOfAKind())
      this.rank = 3;
    else if (this.isFullHouse())
      this.rank = 4;
    else if (this.isFlush())
      this.rank = 5;
    else if (this.isStraight())
      this.rank = 6;
    else if (this.isThreeOfAKind())
      this.rank = 7;
    else if (this.isTwoPair())
      this.rank = 8;
    else if (this.isPair())
      this.rank = 9;
    else
      this.rank = 10; // High card will be played.
  }

  /*** Rank helpers ***/

  isRoyalFlush() {
    // Check there are at least 5 in sequence.
    if (this.maxSequence.length < 5)
      return false;

    // Check that the last in sequence is ace.
    const lastInSeq = this.maxSequence.length - 1;
    if (this.maxSequence[lastInSeq].value !== 14)
      return false;

    // Check that each in sequence is of the same suit.
    const suit = this.maxSequence[0].suit;
    for (card of this.maxSequence) {
      if (card.suit !== suit)
        return false;
    }

    return true;
  }

  isStraightFlush() {
    // TODO
  }
  
  isFourOfAKind() {
    // TODO
  }
  
  isFullHouse() {
    // TODO
  }
  
  isFlush() {
    // TODO
  }
  
  isStraight() {
    // TODO
  }
  
  isThreeOfAKind() {
    // TODO
  }
  
  isTwoPair() {
    // TODO
  }
  
  isPair() {
    // TODO
  }
}

module.exports = Hand;