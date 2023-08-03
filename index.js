let lastRenderTime = 0;
const SNAKE_SPEED = 1;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;
  console.log('render');
  lastRenderTime = currentTime;
}

window.requestAnimationFrame(main);
