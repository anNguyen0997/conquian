import { default as Board } from './Board';
import { Game } from './Game'
import { Client } from "boardgame.io/react";
// import { Local } from 'boardgame.io/multiplayer'
// import { SocketIO } from 'boardgame.io/multiplayer'

const Conquian = Client({
  game: Game,
  board: Board,
  numPlayers: 3,
  playOrderPos: 1
});

export default Conquian;

// const TicTacToeClient = Client({
//   game: TicTacToe,
//   board: TicTacToeBoard,
//   multiplayer: Local(),
// });

// const App = () => (
//   <div>
//     <TicTacToeClient playerID="0" />
//     <TicTacToeClient playerID="1" />
//   </div>
// );

// const TicTacToeClient = Client({
//   game: TicTacToe,
//   board: TicTacToeBoard,
//   multiplayer: SocketIO({ server: 'localhost:8000' }),
// });
