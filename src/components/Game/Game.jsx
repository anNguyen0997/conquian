
import { giveCard, takeCard, drawCard, passCard, selectCard, endRound, sortDeckBySuit, sortDeckByValue, payCard } from './Moves'
import { TurnOrder } from 'boardgame.io/core';



export const Game = {
    name: "Conquian",
    setup: setUp,
    moves: {
        drawCard,
        sortDeckBySuit,
        sortDeckByValue,
        endRound,
        selectCard,
    },
    turn: {
      order: TurnOrder.DEFAULT,
      stages:{
        pay:{
          moves: {
            payCard,
          }
        }
      }
    },
    phases: {
      give: {
        moves: { giveCard,sortDeckBySuit,sortDeckByValue,selectCard },
        start: true,
        next: 'take',
        endIf: ({G}) => (G.round === 3),
        onEnd: ({G}) => {G.round = 0}
      },
      take: {
        moves: { takeCard,sortDeckBySuit,sortDeckByValue },
        endIf: ({G}) => (G.round === 3),
        onEnd: ({G}) => {G.round = 0}
      },
       draw: {
        moves: {passCard, selectCard, sortDeckBySuit, sortDeckByValue, payCard},
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
     deck.push({ suit: suit, value: value, order: i, id:suit+value, selected: false});
     i += 1
   }
 }
  deck = Obj.random.Shuffle(deck)
  
  let player1 = { id:0 , cardsDown:[] , hand:deck.splice(0,8), drew: false, selected:[]}; let player2 = { id:1 , cardsDown:[] , hand:deck.splice(0,8), drew: false, selected:[]}; let player3 = { id:2 , cardsDown:[] , hand:deck.splice(0,8), drew: false, selected:[]}

  return {
      players: [player1, player2, player3],
      deck,
      winner: -1,
      givenCards:[],
      stageCard: {suit: 'joker', value: 1, order: 1},
      round: 0,
  }

}