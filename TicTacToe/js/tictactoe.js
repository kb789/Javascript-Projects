// sets initial active player to X
let activePlayer = "X";

// stores array of squares that currently have Xs or Os on them
let selectedSquares = [];

// function that is triggered when square is clicked.
function placeXorO(squareNumber) {
  
  // makes sure that square doesn't already have an X or O on it 
  if(!selectedSquares.some(element => element.includes(squareNumber))) {
    let select = document.getElementById(squareNumber);
    
    //puts X or O image on selected square
    if(activePlayer === 'X') {
       select.style.backgroundImage = 'url("images/x.png")'; 
    } else {
        select.style.backgroundImage = 'url("images/o.png")'; 
    }

    //records selected square's id and which player (X or O) selected it in the selected squares array 
    selectedSquares.push(squareNumber+activePlayer);
    
    //checks if the new selected square has resulted in a win
    checkWinConditions();

    //changes the active player to the other player
    if (activePlayer==='X') {
      activePlayer='O';
    } else {
      activePlayer='X';
    }
    //plays move placement sound

    audio('./media/place.mp3');
    
    // checks if the computer is the active player
    if (activePlayer === 'O') {

      //disables click for the duration of computer's turn
      disableClick();
      setTimeout(function (){
        // calls function that handles computer's turn
        computersTurn();
      }, 1000 );
    }
    return true;
  }

  //function that handles computer's turn
  function computersTurn() {
    let success = false;
    let pickASquare;
    //loop keeps randomly selecting a square and sending it to the placeXorO function until it chooses a square that hasn't already been selected
    while (!success) {
      pickASquare = String(Math.floor(Math.random() * 9))
      if (placeXorO(pickASquare)) {
         placeXorO(pickASquare)
         success=true;
      };
    }
  }
}

// function that calls arrayIncludes function to check if current board contains a win. If it does, calls drawWinLine function 
function checkWinConditions() {
  if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
  else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
  else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
  else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
  else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
  else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
  else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
  else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
  else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
  else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
  else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
  else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
  else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
  else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
  else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
  else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
  // if all squares are taken and there is no win, plays tie music and resets  game
  else if (selectedSquares.length>=9) {
    audio('./media/tie.mp3');
    setTimeout(function() {resetGame(); }, 500);
  }
   
  // function takes a possible winning vertical, horizontal, or diagonal row of moves, and checks if current selectedSquare array has this combination of moves  
  function arrayIncludes(squareA, squareB, squareC) {
     const a = selectedSquares.includes(squareA);
     const b = selectedSquares.includes(squareB);
     const c = selectedSquares.includes(squareC);
     if (a===true && b===true && c===true) {
      return true;
     }
  }

}

// disables click during computer's turn
function disableClick() {
  body.style.pointerEvents = 'none';
  setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// plays audio
function audio (audioURL) {
  let audio = new Audio(audioURL);
  audio.play();
}
  
// function takes coordinates of the starting point and ending point of the win line, so it can be drawn
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
// accesses the html canvas element so it can be drawn on
const canvas = document.getElementById('win-lines');
const c = canvas.getContext('2d');
let x1 = coordX1
let y1 =coordY1;
let x2 = coordX2;
let y2 = coordY2;
// sets initial current endpoint to starting point 
let x = x1;
let y= y1;

//this function draws the win line
function animateLineDrawing() {
  // starts animation loop
  const animationLoop = requestAnimationFrame(animateLineDrawing);
  c.clearRect(0,0,608,608);
  c.beginPath();
  //moves to starting point of line
  c.moveTo(x1, y1);
  // draws line to current endpoint
  c.lineTo(x,y);
  c.lineWidth=10;
  c.strokeStyle='rgba(70, 255, 33. .8)';
  c.stroke();
  // checks if the current endpoint is the final endpoint.
  if (x1 <= x2 && y1 <= y2) {
    // if the current endpoint hasn't reached the final endpoint, increase the current endpoint by 10 and continue drawing
    if (x < x2) { x+=10 }
    if (y < y2) { y+=10 }
    // if the current endpoint is the final endpoint, stop drawing and stop the animation loop
    if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop)}
  }
  // performs the same action as the conditional statement above for the 6,4,2 win condition
  if (x1 <= x2 && y1 >= y2) {
    if (x < x2) { x+=10 }
    if (y > y2) { y-=10 }
    if (x >= x2 && y < y2) { cancelAnimationFrame(animationLoop)}
  }

}

// this function clears canvas after win line is drawn
  function clear() {
   const animationLoop = requestAnimationFrame(clear)
   c.clearRect(0,0, 608, 608)
   cancelAnimationFrame(animationLoop)
  }

  // disables clicking while win line is drawn
  disableClick();
  // plays win music
  audio('./media/winGame.mp3');
  // calls animateLineDrawing to draw win line
  animateLineDrawing();

  //waits a second,then clears canvas and calls resetGame
  setTimeout(function() {clear(); resetGame(); }, 1000);
}

// this function resets a game after a win or tie
function resetGame() {
  // gets all the squares in the html and removes the X and Y images
  for (let i=0; i<9; i++) {
   let square = document.getElementById(String(i));
   square.style.backgroundImage = '';
  }
  // resets array that records squares that have Xs or Os on them
  selectedSquares=[];
}
