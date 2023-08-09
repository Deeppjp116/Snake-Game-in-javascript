let food = { x: 11, y: 0 };

const EXPANTION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANTION_RATE);
    food={x:20,y:10}
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
