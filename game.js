import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from './snake.js';

import { update as updateFood, draw as drawFood } from './food.js';

import { outsiteGrid } from './grid.js';

const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    return alert('You lose!! Try again');
  }

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
  updateFood();
  ckeckDeath();
}

function draw() {
  console.log('drawsnake');
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
window.requestAnimationFrame(main);

function ckeckDeath() {
  gameOver = outsiteGrid(getSnakeHead()) || snakeIntersection();
  console.log(getSnakeHead());
}
