function runFactory(factory) {
  const positions = new Set();
  let coordinates = {x:0,y:0};
  const moves = {
    '>': [1, 0],
    '<': [-1, 0],
    '^': [0, -1],
    'v': [0, 1],
  };
  const checkMove = () => {
    const value = factory[coordinates.y]?.[coordinates.x];

    const x = coordinates.x;
    const y = coordinates.y;
        console.log(value, factory, x, y);
    if(!value){
        return 'broken';
    }
    
    if(value === '.') {
        return 'completed';
    }

    if(positions.has(`${x}${y}`)) {
        return 'loop';
    }

    positions.add(`${x}${y}`);
    const [nextX, nextY] = moves[value];
    coordinates.x += nextX;
    coordinates.y += nextY;
    return checkMove();
  };
  return checkMove();
}
// 8
console.log(runFactory(
[
  '>>v',
  '..<'
]
));
// 'broken'