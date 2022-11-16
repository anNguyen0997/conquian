import { INVALID_MOVE } from 'boardgame.io/core';
import { current } from 'immer';     // current(G) lets you read G as an Obj instead of proxy

export default function getHand(G, ctx) {

}

export default function giveCard(G, ctx) {

}

export default function takeCard(G, ctx) {

}

export default function drawCard(G, ctx) {

}

export default function passCard(G, ctx) {

}

export default function selectCard(G, ctx) {

}
export function giveCard({G, ctx, events},cardIndex) {

    G.round += 1
    G.givenCards.push(G.players[ctx.playOrderPos].hand.splice(cardIndex,1)[0]) 
    events.endTurn()
    
}

export function takeCard({G, ctx, events}) {
    G.round += 1

    let temp = ctx.playOrderPos + 1
    if ( temp > ctx.numPlayers - 1) {temp = 0}
    G.players[ctx.playOrderPos].hand.push(G.givenCards.slice(temp,temp+1))
    
    events.endTurn()
}

export function drawCard({G,ctx,events}) {
    
    if(G.players[ctx.playOrderPos].drew === false){
        G.stageCard = G.deck.splice(0,1)[0]
        events.setPhase('draw')
        G.players[ctx.playOrderPos].drew = true
    }
    else{
        return INVALID_MOVE;
    }
    
}

export function passCard({G, events}) {
    G.round += 1
    events.endTurn()

}

export function selectCard(obj) {
    console.log(obj)
}

export function endRound({G, ctx, events}) {
    
    if(G.players[ctx.playOrderPos].drew === true){
        events.endTurn()
        G.players[ctx.playOrderPos].drew = false
    }
    else{
        return INVALID_MOVE;
    }
}

export function payCard({G, ctx, events},cardIndex){

    G.givenCards.push(G.players[ctx.playOrderPos].hand.splice(cardIndex,1)[0]) 
    events.endTurn()
}

export function sortDeckByValue({G,ctx,events}){
    G.players[ctx.playOrderPos].hand.sort((a, b) => {
        const cardA = a.order; 
        const cardB = b.order; 
        if (cardA < cardB) {
          return -1;
        }
        else if (cardA > cardB) {
          return 1;
        }
        else {
          return 0
        }
    })
}

export function sortDeckBySuit({G,ctx,events}){
    G.players[ctx.playOrderPos].hand.sort((a, b) => {
        const nameA = a.suit
        const nameB = b.suit
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    })
}

function checkSameNum(cards) { //cards is an array
    let num = cards[0].value 
    for (const card of cards){
        if(card.value !== num){
            return false
        }
    }
    return true
}

function checkStraight(cards) { //cards is an array
    cards.sort((a, b) => {
        const cardA = a.order; 
        const cardB = b.order; 
        if (cardA < cardB) {
          return -1;
        }
        else if (cardA > cardB) {
          return 1;
        }
        else {
          return 0
        }
    })
    for(let i = 0; i < cards.length -1; i++){
        if(cards[i].order + 1 !== cards[i+1].order){
            return false
        }
    }
    return true
}
