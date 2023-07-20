
var board = document.getElementById("board");
var squares = document.getElementsByClassName("square");
var result = document.getElementById("result");


function squareClick(click) {
  
  var squares = document.querySelectorAll(".square");
  
  for (let i = 0; i < squares.length; i++) {
    
    if (click.target === squares[i]) {
      handleMove(squares[i], i);
    }
  }
  
};

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", squareClick);
}


var turn = document.getElementById("turn");
var currentPlayer = "X";
var array = ["", "", "",
             "", "", "",
             "", "", ""];

function handleMove(square, index) {
  if (array[index] === "") {
    square.textContent = currentPlayer;
    array[index] = currentPlayer;

    if (checkWin()) {
      result.textContent = currentPlayer + " wins!";
      disableBoard();
    } else if (checkDraw()) {
      result.textContent = "It's a draw!";
      disableBoard();
    } if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
      
    turn.textContent = "Player " + currentPlayer + "'s turn";
    } else {

      alert("Try click on a another square, This one is filled!!!");
    
    }
};

function checkWin() {
  
  var winOptions = [
    
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ];

  if (
    
    (array[0] !== "" && array[0] === array[1] && array[1] === array[2]) ||    
    (array[3] !== "" && array[3] === array[4] && array[4] === array[5]) ||    
    (array[6] !== "" && array[6] === array[7] && array[7] === array[8]) ||    
    (array[0] !== "" && array[0] === array[3] && array[3] === array[6]) ||   
    (array[1] !== "" && array[1] === array[4] && array[4] === array[7]) ||   
    (array[2] !== "" && array[2] === array[5] && array[5] === array[8]) ||   
    (array[0] !== "" && array[0] === array[4] && array[4] === array[8]) || 
    (array[2] !== "" && array[2] === array[4] && array[4] === array[6])

  ) {
    
    return true;

  } else {
    
    return false;
  
  }
  
};

function checkDraw() {
  
  let isDraw = true;
  
  if (array[0] === "" || array[1] === "" || array[2] === "" ||
      array[3] === "" || array[4] === "" || array[5] === "" ||
      array[6] === "" || array[7] === "" || array[8] === "") {
    
        isDraw = false;

  }
  else if (isDraw) {
    
    return true;
  } else {

    return false;
  }
};


function disableBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].removeEventListener("click", squareClick);
  }
};

var restartButton = document.getElementById("restart");

function restartClick() {
  for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = "";
      squares[i].addEventListener("click", squareClick);
  }

  currentPlayer = "X";
  array = ["", "", "", "", "", "", "", "", ""];
  result.textContent = "";
  turn.textContent = "Player " + currentPlayer + "'s turn";
};

restartButton.addEventListener("click", restartClick);

//--------------------------------------------------------


