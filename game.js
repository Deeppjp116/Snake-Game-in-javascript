// snake.js module (unchanged)

// main.js
import { updateSnake, drawSnake, SNAKE_SPEED } from './snake.js';

const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;
  update();
  draw();
}

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
}

// Start the game loop
window.requestAnimationFrame(main);
