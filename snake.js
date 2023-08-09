import { getInputDireaction } from 'input.js';

const SNAKE_SPEED = 1;
const snakeBody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
  { x: 14, y: 11 },
  { x: 15, y: 11 },
];

function updateSnake() {
  getInputDireaction 
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  // snakeBody[0].x += 0;
  // snakeBody[0].y += 1;
}

function createSnakeElement(segment) {
  const snakeElement = document.createElement('div');
  snakeElement.classList.add('snake');
  snakeElement.style.gridRowStart = segment.y;
  snakeElement.style.gridColumnStart = segment.x;
  return snakeElement;
}

function drawSnake(gameBoard) {
  const snakeElements = snakeBody.map(createSnakeElement);
  gameBoard.append(...snakeElements);
}

export { SNAKE_SPEED, updateSnake, drawSnake };
