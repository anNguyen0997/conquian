
const { Server, Origins } = require('boardgame.io/server');
const { Game } = require('./Game.jsx');
console.log('My game is ')


const server = Server({
  games: [Game],
  origins: [Origins.LOCALHOST],
});



server.run(8000, () => console.log("server running..."));
