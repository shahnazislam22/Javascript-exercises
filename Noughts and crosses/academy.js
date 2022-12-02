//DOING SET UP
//1. let's make a board first
const board = [[null, null, null], [null, null, null], [null, null, null]];

//2. assign players
const playerOne = "nought";
const playerTwo = "cross";

//3. give turns
let turn = 0

//DO ACTIVITY NEXT

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {

//for player 1: (always take even numbers first = (0,2,4...)
if (turn % 2 == 0){board[row][column] = playerOne}

//for player 2: (always takes odd numbers second = 1,3,5...)
else {board[row][column] = playerTwo}
turn++
console.log("takeTurn was called with row: "+row+", column:"+column); 
    


// now we need to check the winner. there are four ways to win. 

    //seeing if they get 3 in a row:
    for (let i = 0; i<3; i++){
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !==''){
            let winner = board[i][0];
            if (winner == "cross"){return "crosses"}
            else if(winner == "nought"){
                return "noughts"
            }
        }
    }

    // now we check 3 for column
    for (let i = 0; i<3; i++){
        if(board[0][i] === board[1][i] && board [0][i] === board[2][i] && board[0][i] !==''){
            let winner = board[0][i];
            else if(winner == "nought"){
                return "noughts"
            }
        }
    }

    //now we need to check for diagnoals ------> ///
    for(let i = 0; i<3; i++){
        if(board[0][2] === board[1][1] && board[2][0] === board[2][0] && board[2][0] ===board[1][1] && board[0][2] !== ''){
            let winner = board[0][2];
            if (winner == "cross"){return "crosses"}
            else if(winner == "nought"){
                return "noughts"

            }
        }

        
    }


    
// now we check the other diagonal ----> \\\
for (let)
// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return [[null, null, null], [null, null, null], [null, null, null]];
}

if (typeof exports === 'object') {

    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
