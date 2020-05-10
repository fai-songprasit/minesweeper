document.addEventListener('DOMContentLoaded', startGame)

const newLocal = 0
// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0, isMine: true, hidden: true}, 
    {row: 0, col: 1, isMine: true, hidden: true}, 
    {row: 0, col: 2, isMine: true, hidden: true}, 
    {row: 0, col: 3, isMine: true, hidden: true}, 
    {row: 0, col: 4, isMine: true, hidden: true}, 
    {row: 1, col: 0, isMine: true, hidden: true}, 
    {row: 1, col: 1, isMine: true, hidden: true}, 
    {row: 1, col: 2, isMine: true, hidden: true}, 
    {row: 1, col: 3, isMine: false, hidden: true}, 
    {row: 1, col: 4, isMine: false, hidden: true}, 
    {row: 2, col: 0, isMine: false, hidden: true}, 
    {row: 2, col: 1, isMine: false, hidden: true}, 
    {row: 2, col: 2, isMine: false, hidden: true}, 
    {row: 2, col: 3, isMine: false, hidden: true}, 
    {row: 2, col: 4, isMine: false, hidden: true}, 
    {row: 3, col: 0, isMine: false, hidden: true}, 
    {row: 3, col: 1, isMine: false, hidden: true}, 
    {row: 3, col: 2, isMine: false, hidden: true}, 
    {row: 3, col: 3, isMine: false, hidden: true}, 
    {row: 3, col: 4, isMine: false, hidden: true}, 
    {row: 4, col: 0, isMine: false, hidden: true}, 
    {row: 4, col: 1, isMine: false, hidden: true}, 
    {row: 4, col: 2, isMine: false, hidden: true}, 
    {row: 4, col: 3, isMine: false, hidden: true}, 
    {row: 4, col: 4, isMine: false, hidden: true}
  ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (i = 0; i < board.cells.length; i++) {
    countSurroundingMines();
    i++;
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let count = 0;
  let surroundingCells = getSurroundingCells(cell.row, cell.col);
  for (let i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      count++;
    }
    cell.surroundingMines = count;
  }
  return count
}

/* DOODLES ARE DOWN HERE!!!!
// possible random function for placing mines
const placeMines = () => {
  let i = 0;
  let j = 0;
  row = i;
  col = j;
  for (let mines = 0; mines < 7; mines++) {
    i = Math.floor(Math.random() * 4);
    j = Math.floor(Math.random() * 4);
// finds the correct array with relevant i and j values
      for (var k = 0; k < board.cells.length; k += 1) {
        if ((board.cells[k].i && board.cells[k].j) === (i && j)) {
            return k;
        }
      }
    if (mines < 9 && board.cell[k]){
      board.cells[k].isMine === true;
      mines++;
    } else {
      board.cells[k].isMine === false;
    }
  }
}
*/