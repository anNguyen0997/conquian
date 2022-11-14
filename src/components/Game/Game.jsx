import { deck } from './Deck'
import { getHand, giveCard, takeCard, drawCard, passCard, selectCard } from './Moves'

function setup(ctx) {     

    let i = deck.length; let ri;
  
    while (i != 0) {
      ri = Math.floor(Math.random()*i); i--; [deck[i], deck[ri]] =  [deck[ri], deck[i]];
    }
    
    let player1 = { id:1 , cardsDown:[] , hand:deck.splice(0,8)}
    let player2 = { id:2 , cardsDown:[] , hand:deck.splice(0,8)}
    let player3 = { id:3 , cardsDown:[] , hand:deck.splice(0,8)}

    return {
        player1,
        player2,
        player3,
        deck,
        winner: null
        
    }

  }


const Game = {
    name: "Conquian",
    setup: setup(),
    moves: {
        getHand,
        giveCard,
        takeCard,
        drawCard,
        passCard,
        selectCard
    }


  
}

export default Game;