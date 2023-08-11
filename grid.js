const GRID_SIZE = 21;

export function randomeGridPosition() {
  const position = {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };

  console.log('x:', position.x);
  console.log('y:', position.y);

  return position;
}

export function outsiteGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
