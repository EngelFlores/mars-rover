'use strict';

const MarsRover = require('../src/marsRover');

describe('test basic functions of Mars Rover', () => {
  test('Initial position and direction are zero when we dont set a position', () => {
    let marsRover = new MarsRover()
    expect(marsRover.position).toEqual([0, 0]);
    expect(marsRover.direction).toEqual(0);
  });

  test('Set initial position to 3,4 and initial direction to 3', () => {
    let marsRover = new MarsRover([3, 4], 3)
    expect(marsRover.position).toEqual([3, 4]);
    expect(marsRover.direction).toEqual(3);
  });

  test('Set initial position to 3,4 and direction to 3 and move to all directions', () => {
    let marsRover = new MarsRover([3, 4], 3)
    expect(marsRover.position).toEqual([3, 4]);
    marsRover.moveUp();
    expect(marsRover.position).toEqual([3, 5]);
    marsRover.moveRight();
    expect(marsRover.position).toEqual([4, 5]);
    marsRover.moveDown();
    expect(marsRover.position).toEqual([4, 4]);
    marsRover.moveLeft();
    expect(marsRover.position).toEqual([3, 4]);
  });

  test('Set initial position to 3,4 and direction to 0 and send commands', () => {
    let marsRover = new MarsRover([3, 4], 0)
    expect(marsRover.position).toEqual([3, 4]);
    marsRover.move('L');
    expect(marsRover.direction).toEqual(3);
    marsRover.move('L');
    expect(marsRover.direction).toEqual(2);
    marsRover.move('M');
    expect(marsRover.position).toEqual([3, 3]);
  });

  test('Throws error when a invalid move is provived', () => {
    let marsRover = new MarsRover([3, 4], 3)
    expect(() => marsRover.move('P')).toThrow('Something went wrong with rover position');
  });

  test('Throws error when a invalid direction is provived', () => {
    let marsRover = new MarsRover([3, 4], 4)
    expect(() => marsRover.move('M')).toThrow('Something went wrong with rover direction');
  });

  test('Throws error when move down position is zero', () => {
    let marsRover = new MarsRover([0, 0], 2)
    expect(marsRover.position).toEqual([0, 0]);
    expect(() => marsRover.moveDown()).toThrow('Impossible to go down in a zero position');
  });

  test('Throws error when move left position is zero', () => {
    let marsRover = new MarsRover([0, 0], 3)
    expect(marsRover.position).toEqual([0, 0]);
    expect(() => marsRover.moveLeft()).toThrow('Impossible to go left in a zero position');
  });

});
