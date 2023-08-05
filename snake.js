export const SNAKE_SPEED = 1;
const snakeBody = [{ x: 11, y: 11 }];
export function update() {
  console.log('update_snake');
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div');
    snakeElement.classList.add('snake');
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    gameBoard.appendChild(snakeElement);
  });
}
