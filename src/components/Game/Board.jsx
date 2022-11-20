import React, { Component } from 'react'
import GameArea from './BoardComp/GameArea';
import './Board.css'
import PropTypes from "prop-types";
import Player from "./BoardComp/Player";
import { DragDropContext } from 'react-beautiful-dnd';


export default class Board extends Component {



  render() {
    return (
      <div id='Game'>

        <div id='TableBorder'>
          <div id='TableInline'>

            <div id='gameArea'>
              <GameArea {...this.props} />
            </div>

            <div id='player'>
              <DragDropContext >
                <Player player={this.props.G.players[this.props.playerID]} moves={this.props.moves} ctx={this.props.ctx}/>
              </DragDropContext>
            </div>


          </div>
        </div>
        
    </div>
    )
  }
}

Board.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  playerID: PropTypes.string,
};