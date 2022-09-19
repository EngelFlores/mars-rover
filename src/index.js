const MarsRover = require('../src/marsRover');

const simulateGame = (commands) => {
  const compassPoints = { 'N': 0, 'E': 1, 'S': 2, 'W': 3 };
  const parsedCommands = parseCommands(commands)
  const { position, direction, individualCommands } = parsedCommands
  const rover = new MarsRover(position, compassPoints[direction], compassPoints);
  individualCommands.forEach(command => rover.move(command));
  const lastPosition = rover.getPosition();
  console.log(lastPosition);
  return lastPosition;
}

const parseCommands = (commands) => {
  const splitByLine = commands.split('\n');
  const individualCommands = splitByLine.pop().split('');
  const splitCommands = splitByLine[0].split(' ');
  const position = splitCommands.slice(0, 2).map(Number);
  const direction = splitCommands.pop();
  return { position, direction, individualCommands };
}

const gameArray = ['1 2 N\nLMLMLMLMM', '3 3 E\nMRRMMRMRRM'];

gameArray.forEach(commands => simulateGame(commands));

module.exports = { parseCommands, simulateGame };
