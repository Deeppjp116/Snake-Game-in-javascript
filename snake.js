import { getInputDireaction } from './input.js';

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  console.log('call the update in the SNAKE ');
  const inputDirection = getInputDireaction();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard) {
  // Clear previous snake elements
  console.log(gameBoard);
  snakeBody.forEach((segment) => {
    console.log(segment);
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegment += amount;
}

export function onSnake(position) {
  return snakeBody.some((segment) => {
     return equalpositions(segment, position);
  });
}
