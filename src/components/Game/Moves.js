import { INVALID_MOVE } from 'boardgame.io/core';
// import { current } from 'immer';     // current(G) lets you read G as an Obj instead of proxy

export function giveCard({G, ctx, events},cardIndex,) {

    console.log(cardIndex)
    G.round += 1
    G.givenCards.push(G.players[ctx.playOrderPos].hand.splice(cardIndex,1)[0]) 
    events.endTurn()
    
}
//==========================================================================
export function takeCard({G, ctx, events}) {
    G.round += 1

    let temp = ctx.playOrderPos + 1
    if ( temp > ctx.numPlayers - 1) {temp = 0}
    G.players[ctx.playOrderPos].hand.push(G.givenCards.slice(temp,temp+1)[0])
    G.players[ctx.playOrderPos].hand[7].selected = false
    events.endTurn()
}
//==========================================================================
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
//==========================================================================
export function passCard({G, events}) {
    G.round += 1
    events.endTurn()

}
//==========================================================================
export function payCard({G, ctx, events},cardIndex){

    G.givenCards.push(G.players[ctx.playOrderPos].hand.splice(cardIndex,1)[0]) 
    events.endStage()
    events.endPhase()
    for(const i in ctx.playOrder){
        G.players[i].drew = false
    }
}
//==========================================================================
export function selectCard({G, ctx,events},cardIndex) {
    
    if(  G.players[ctx.playOrderPos].hand[cardIndex].selected === false){
        G.players[ctx.playOrderPos].hand[cardIndex].selected = true
    }
    else{
        G.players[ctx.playOrderPos].hand[cardIndex].selected = false
    }

    let filterList = G.players[ctx.playOrderPos].hand.filter(card => {
            return card.selected === true
        })
    
    G.players[ctx.playOrderPos].selected = filterList
//----------------------------------------------------------------
    if(ctx.phase === 'draw' && filterList.length === 2){

        let checkList = filterList
        checkList.push(G.stageCard)
        let p1 = checkSameNum(checkList)
        let p2 = checkStraight(checkList)
        
        

        if(p1 === true || p2 === true){

            console.log(filterList)

            G.players[ctx.playOrderPos].cardsDown.push(...checkList)

            let newlist = G.players[ctx.playOrderPos].hand.filter(card => {
                return card.selected === false
            })

            G.players[ctx.playOrderPos].hand = newlist
            G.stageCard = {suit: 'joker', value: 1, order: 1}
            G.players[ctx.playOrderPos].drew = false

            // events.endPhase()
            events.setStage('pay')
        }
    }

}
//==========================================================================
export function endRound({G, ctx, events}) {
    
    if(G.players[ctx.playOrderPos].drew === true){
        events.endTurn()
        G.players[ctx.playOrderPos].drew = false
    }
    else{
        return INVALID_MOVE;
    }
}
//==========================================================================
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
//==========================================================================
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
//==========================================================================
function checkSameNum(cards) { //cards is an array
    let num = cards[0].value 
    for (const card of cards){
        if(card.value !== num){
            return false
        }
    }
    return true
}
//==========================================================================
function checkStraight(cards) { //cards is an array
    
    // check same suit
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