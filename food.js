import { randomeGridPosition } from './grid.js';

import { onSnake, expandSnake } from './snake.js';

let food = getRandomFoodPosition();
console.log(food);
const EXPANTION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANTION_RATE);
    food = getRandomFoodPosition();
  }
}
export function draw(gameBoard) {
  // Clear previous snake elements
  console.log(gameBoard);

  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  console.log(randomeGridPosition());
  // whil e (newFoodPosition === null || onSnake(newFoodPosition)) {
  newFoodPosition = randomeGridPosition();
  // }
  console.log(newFoodPosition);
  return newFoodPosition;
}
