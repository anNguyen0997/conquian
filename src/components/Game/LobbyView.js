import React from 'react'
import { Lobby } from 'boardgame.io/react';
import { Game } from './Game';
import { default as Board } from './Board';


function LobbyView() {
  return (
    <div>
        <Lobby
    gameServer={`http://${window.location.hostname}:8000`}
    lobbyServer={`http://${window.location.hostname}:8000`}
    gameComponents={[
        { game: Game, board: Board }
     ]}
        />;
    </div>
  )
}

export default LobbyView