'use strict';

const { parseCommands, simulateGame } = require('../src/index');

describe('test functions to start Mars Rover', () => {
  test('Parse function should return as expected', () => {
    const mockParse = {
      position: [1, 2],
      direction: 'N',
      individualCommands: [
        'L', 'M', 'L',
        'M', 'L', 'M',
        'L', 'M', 'M'
      ]
    }
    const parsedCommands = parseCommands('1 2 N\nLMLMLMLMM')
    expect(parsedCommands).toEqual(mockParse);
  });

  test('Function to start the game', () => {
    const mockResult = '1 3 N'
    expect(simulateGame('1 2 N\nLMLMLMLMM')).toEqual(mockResult);
  });
});
