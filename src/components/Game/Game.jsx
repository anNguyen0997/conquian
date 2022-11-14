import { gamedeck } from './Deck'

function shuffle(deck) {                                                      // Shuffles deck
    let i = deck.length
    let ri;
  
    while (i != 0) {
      ri = Math.floor(Math.random()*i);
      i--;
  
      [deck[i], deck[ri]] =  [deck[ri], deck[i]];
    }
    return deck
  }


const Game = {
    name: "Conquian",

    setup: () => ({
        deck: shuffle(gamedeck)
    }),


  
}

export default Game;