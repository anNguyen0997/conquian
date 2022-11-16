<<<<<<< HEAD
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
=======
import { giveCard, takeCard, drawCard, passCard, selectCard, endRound, sortDeckBySuit, sortDeckByValue } from './Moves'
import { TurnOrder } from 'boardgame.io/core';



export const Game = {
    name: "Conquian",
    setup: setUp,
    moves: {
        drawCard,
        sortDeckBySuit,
        sortDeckByValue,
        endRound,
    },
    turn: {
      order: TurnOrder.DEFAULT,
    },
    phases: {
      give: {
        moves: { giveCard },
        start: true,
        next: 'take',
        endIf: ({G}) => (G.round === 3),
        onEnd: ({G}) => {G.round = 0}
      },
      take: {
        moves: { takeCard },
        endIf: ({G}) => (G.round === 3),
        onEnd: ({G}) => {G.round = 0}
      },
       draw: {
        moves: {passCard, selectCard, sortDeckBySuit, sortDeckByValue,},
        turn: {
          order: {
            first: ({ ctx }) => ctx.playOrderPos ,
            next: ({ ctx }) => (ctx.playOrderPos + 1) % ctx.numPlayers,
          }
        },
        endIf: ({G}) => (G.round === 3),
        onEnd: ({G}) => {G.round = 0}
       }
    },
    endIf: ({G,ctx}) => (G.players[ctx.playOrderPos].cardsDown.length === 9),
    onEnd: ({G,ctx}) => {G.winner = G.players[ctx.playOrderPos].id}
}

function setUp(Obj) { 
  
 const suits = ["coin", "sword", "club", "cup"]; const values = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]; let deck = []; 
  
 for (const suit of suits) {      // Make Deck   
   let i = 1                              
   for (const value of values) {
     deck.push({ suit: suit, value: value, order: i});
     i += 1
   }
 }
  deck = Obj.random.Shuffle(deck)
  
  let player1 = { id:0 , cardsDown:[] , hand:deck.splice(0,8), drew: false}; let player2 = { id:1 , cardsDown:[] , hand:deck.splice(0,8), drew: false}; let player3 = { id:2 , cardsDown:[] , hand:deck.splice(0,8), drew: false}

  return {
      players: [player1, player2, player3],
      deck,
      winner: -1,
      givenCards:[],
      stageCard: {},
      round: 0,
  }

}
>>>>>>> origin
