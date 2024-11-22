

// Variables to track the game state 
// An array of 9 empty strings, representing the game board. Each index connects to a cell on the board.
var board = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var isGameActive = true;

// A  function to check if there's a winner for the match
function checkWinner() {
  var winningConditions = [
    [0, 1, 2], //rows , columns , diagonals
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < winningConditions.length; i++) {
    var a = winningConditions[i][0];
    var b = winningConditions[i][1];
    var c = winningConditions[i][2];

    if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
      alert(currentPlayer + " wins!");

      isGameActive = false; //stops further moves 
      return;
    }
  }

  if (board.indexOf("") === -1) {
    alert("It's a draw!");
    isGameActive = false;
  }
}

//  A function to handle cell click
function handleCellClick(index) {
  if (board[index] === "" && isGameActive) {
    board[index] = currentPlayer;
    document.getElementById("cell" + index).innerHTML = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// A function to restart the game
function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = "X";

  for (var i = 0; i < 9; i++) {
    document.getElementById("cell" + i).innerHTML = "";
  }
}

// Initialize the game
function initializeGame() {
  for (var i = 0; i < 9; i++) {
    var cell = document.getElementById("cell" + i);
    cell.onclick = (function(index) {
      return function() {
        handleCellClick(index);
      };
    })(i);
  }

  document.getElementById("restart").onclick = function() {
    restartGame();
  };
}

// Start the game when the page loads
window.onload = function() {
  initializeGame();
};
