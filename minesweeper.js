document.addEventListener('DOMContentLoaded', startGame)

const newLocal = 0
// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0,  isMine: false, isMarked: false, hidden: true}, 
    {row: 0, col: 1,  isMine: false, isMarked: false, hidden: true}, 
    {row: 0, col: 2,  isMine: false, isMarked: false, hidden: true}, 
    {row: 0, col: 3,  isMine: false, isMarked: false, hidden: true}, 
    {row: 0, col: 4,  isMine: false, isMarked: false, hidden: true}, 
    {row: 1, col: 0,  isMine: false, isMarked: false, hidden: true}, 
    {row: 1, col: 1,  isMine: false, isMarked: false, hidden: true}, 
    {row: 1, col: 2,  isMine: false, isMarked: false, hidden: true}, 
    {row: 1, col: 3,  isMine: false, isMarked: false, hidden: true}, 
    {row: 1, col: 4,  isMine: false, isMarked: false, hidden: true}, 
    {row: 2, col: 0,  isMine: false, isMarked: false, hidden: true}, 
    {row: 2, col: 1,  isMine: false, isMarked: false, hidden: true}, 
    {row: 2, col: 2,  isMine: false, isMarked: false, hidden: true}, 
    {row: 2, col: 3,  isMine: false, isMarked: false, hidden: true}, 
    {row: 2, col: 4,  isMine: false, isMarked: false, hidden: true}, 
    {row: 3, col: 0,  isMine: false, isMarked: false, hidden: true}, 
    {row: 3, col: 1,  isMine: false, isMarked: false, hidden: true}, 
    {row: 3, col: 2,  isMine: false, isMarked: false, hidden: true}, 
    {row: 3, col: 3,  isMine: false, isMarked: false, hidden: true}, 
    {row: 3, col: 4,  isMine: false, isMarked: false, hidden: true}, 
    {row: 4, col: 0,  isMine: false, isMarked: false, hidden: true}, 
    {row: 4, col: 1,  isMine: false, isMarked: false, hidden: true}, 
    {row: 4, col: 2,  isMine: false, isMarked: false, hidden: true}, 
    {row: 4, col: 3,  isMine: false, isMarked: false, hidden: true}, 
    {row: 4, col: 4,  isMine: false, isMarked: false, hidden: true}
  ]
}

function startGame () {
  placeMines()
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    document.addEventListener('click', checkForWin);
    document.addEventListener('contextmenu', checkForWin);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () { //fuction stops once first cell is marked ....
  for (let i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine === true) && (board.cells[i].isMarked !== true)) {
      return;
    } else if ((board.cells[i].isMine !== true) && (board.cells[i].hidden === true)) {
      return;
    } 
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  }
  displayMessage('You win!')
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

function countMines() {
  var count = 0
  for (var i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine) {
        count++
      }
  }
    return count 
}

// use count to set limit on number of mines on board
function placeMines() {
  var numberOfMines = Math.floor(board.cells.length / 4)
     while (countMines() < numberOfMines) {
    // create random index that loops until count condition is met
     var cell = board.cells[Math.floor(Math.random() * 25)]
     placeMine(cell)
  }
}

function placeMine(cell) {
  cell.isMine = true
}
