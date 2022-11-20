import React,{useState} from 'react'
import Hand from './Hand'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



function Player({player,moves,ctx}) {

    const [characters, updateCharacters] = useState(player.hand);

    function handleGive() {
        if(player.selected.length === 1){
            moves.giveCard(player.hand.indexOf(player.selected[0]))
        }
        else{
            alert('Must select one card.')
        }
    }

    function handleTake() {
        moves.takeCard()
        updateCharacters(player.hand)
    }

    function handleSortN() {
        moves.sortDeckByValue()
        updateCharacters(player.hand)
    }

    function handleSortS() {
        moves.sortDeckBySuit()
        updateCharacters(player.hand)
    }

    function handleDraw() {
        moves.drawCard()
        updateCharacters(player.hand)
    }

    function handlePass() {
        moves.passCard()
        updateCharacters(player.hand)
    }

    function handleEndRound() {
        moves.endRound()
        updateCharacters(player.hand)
    }

    function handlePay() {
        if(player.selected.length === 1){
            moves.payCard(player.hand.indexOf(player.selected[0]))
        }
        else{
            alert('Must select one card.')
        }
    }

    

    

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div>
        {/* Name: {player.id}
        <div id='deck'>
            {player.hand.map((cardObj) => {
                let i = player.hand.indexOf(cardObj)
                return <Hand  key={cardObj.suit+cardObj.value} card={cardObj} index={i}  handleClick={handleClick}/>
            })}
        </div> */}

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction='horizontal'>
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef} id='deck' >
                {player.hand.map((cardObj, index) => {
                  return (
                    <Draggable key={cardObj.id} draggableId={cardObj.id} index={index} direction='horizontal'>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Hand  key={cardObj.suit+cardObj.value} card={cardObj} index={index} selectCard={moves.selectCard} user={{id:player.id,turn:ctx.currentPlayer}}/>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul> 
            )}
          </Droppable>
        </DragDropContext>


        <button onClick={handleGive}>Give Card</button>
        <button onClick={handleTake}>Take Card</button>
        <button onClick={handleSortN}>Sort By Number</button>
        <button onClick={handleSortS}>Sort By Suit</button>
        <button onClick={handleDraw}>Draw Card</button>
        <button onClick={handlePass}>Pass</button>
        <button onClick={handleEndRound}>End Round</button>
        <button onClick={handlePay}>Pay Card</button>
    </div>
  )
}

export default Player