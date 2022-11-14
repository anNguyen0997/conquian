const suits = ["coin", "sword", "club", "cup"];
const value = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

const makeDeck = (rank, value) => {                                            // Creation of deck of cards
    const card = {
      rank: rank,
      value: value
    };
    deck.push(card);
  };
  //--------------------------------------------------------------------------------------------------------------
  function shuffle(deck) {                                                      // Shuffles deck
    let i = deck.length
    let ri;
  
    while (i != 0) {
      ri = Math.floor(Math.random()*i);
      i--;
  
      [deck[i], deck[ri]] =  [deck[ri], deck[i]];
    }
  }
  //--------------------------------------------------------------------------------------------------------------
  function getDeck() {                                                          // Passes parameters of rank and suit
  deck = []
  for (const suit of suits) {                                                     // of a card
    for (const value of value) {
      makeDeck(rank, suit);
    }
  }
//   shuffle(deck);
  return deck
  }

  console.log(getDeck())