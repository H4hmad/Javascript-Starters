const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours == 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
} else if (numNeighbours == 0) {
  console.log(`No Border at all!`);
}

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
} else if (numNeighbours === 0) {
  console.log(`No Border at all!`);
}
