'use strict';

class MarsRover {
  constructor(initialPosition = [0, 0], initialDirection = 0) {
    this.position = initialPosition;
    this.direction = initialDirection;
  }

  moveUp() {
    let [x, y] = this.position;
    y = ++y;
    this.position = [x, y];
  }

  moveDown() {
    let [x, y] = this.position;
    if (y > 0) {
      y = --y;
      this.position = [x, y];
    } else {
      this.throwError(
        'Impossible to go down in a zero position'
      );
    }
  }

  moveLeft() {
    let [x, y] = this.position;
    if (x > 0) {
      x = --x;
      this.position = [x, y];
    }
    else {
      this.throwError(
        'Impossible to go left in a zero position'
      );
    }
  }

  moveRight() {
    let [x, y] = this.position;
    x = ++x;
    this.position = [x, y];
  }

  getPosition() {
    const compassPoints = { 0: 'N', 1: 'E', 2: 'S', 3: 'W' };
    return `${this.position.join(' ')} ${compassPoints[this.direction]}`;
  }

  throwError(message) {
    throw new Error(message)
  }

  move(command) {
    switch (command) {
      case 'L':
        this.direction = this.direction === 0 ? this.direction + 3 : this.direction - 1;
        break;
      case 'R':
        this.direction = this.direction >= 0 && this.direction < 3 ? this.direction + 1 : 0;
        break;
      case 'M':
        switch (this.direction) {
          case 0:
            this.moveUp();
            break;
          case 1:
            this.moveRight();
            break;
          case 2:
            this.moveDown();
            break;
          case 3:
            this.moveLeft();
            break;
          default:
            this.throwError(
              'Something went wrong with rover direction'
            );
        }
        break;
      default:
        this.throwError(
          'Something went wrong with rover position'
        );
    }
  }
}

module.exports = MarsRover;
