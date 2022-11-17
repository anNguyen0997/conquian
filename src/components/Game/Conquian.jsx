import { default as Board } from './Board';
import { Game } from './Game'
import { Client } from "boardgame.io/react";
import { Local } from 'boardgame.io/multiplayer'
// import { SocketIO } from 'boardgame.io/multiplayer'

const Conquian = Client({
  game: Game,
  board: Board,
  numPlayers: 3,
  multiplayer: Local(),
  debug: true
});


const App = () => (
  <div>
    <Conquian playerID="0" />
    <Conquian playerID="1" />
    <Conquian playerID="2" />
  </div>
);

export default App;



// const TicTacToeClient = Client({
//   game: TicTacToe,
//   board: TicTacToeBoard,
//   multiplayer: SocketIO({ server: 'localhost:8000' }),
// });
