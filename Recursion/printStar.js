const printStar = (row, col) => {
  // console.log(row, col);
  if (row === 0 && col === 0) return;
  if (col === row) {
    console.log("\n");
    --row;
    col = 0;
  } else {
    ++col;
    console.log("*  ");
  }
  printStar(row, col);
};

printStar(4, 0);
