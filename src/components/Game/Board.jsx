import React, { Component } from 'react'
import Deck from './Deck'
import './Board.css'
import PropTypes from "prop-types";
import Player from "./BoardComp/Player";


export default class Board extends Component {
  render() {
    return (
      <div id='Game'>
        <div id='Table'>

            <div id='Deck'>
              <Deck card={this.props.G.stageCard}/>
            </div>

            <div id='foe'>
              <Player player={this.props.G.players[2]} />
            </div>

            <div id='foe'>
              <Player player={this.props.G.players[1]} />
            </div>

            <div id='player'>
              <Player player={this.props.G.players[0]}/>
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

