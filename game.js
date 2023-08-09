import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from './snake.js';

import { update as updateFood, draw as drawFood } from './food.js';

const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;
  console.log('call the functions');
  update();
  draw();
}

function update() {
  console.log('updateSnake');
  updateSnake();
  updateFood( )
}

function draw() {
  console.log('drawsnake');
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard)
}
window.requestAnimationFrame(main);
