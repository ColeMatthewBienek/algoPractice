/*If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? 
Our goal is to create a function that will check that for us!
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 
1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/
/************************************ */

//test cases
let testXWins = [
    [1,2,1],
    [1,2,2],
    [1,0,0]
]
let testDraw =[
    [1,2,1],
    [2,1,2],
    [2,1,2]
]
let testOWins =[
   [1,1,2],
   [2,2,1],
   [2,1,0]
]

let testIncGame = [
    [1,0,0],
    [0,1,2],
    [1,2,0]
]

//a function to renumber the tic-tac-toe board to remove ambiguous and false positive results
function renumberBoard(board){
   for(i = 0; i < board.length; i++){
       for(j = 0; j < board[i].length; j++){
           if (board[i][j] === 1){
               board[i][j] = 5;
           }
       }
   }
   return board
}

//main function
function isSolved(board){
//renumber the board
board = renumberBoard(board);
//assign grid coordinates to variables
let a = board[0][0];
let b = board[0][1];
let c = board[0][2];
let d = board[1][0];
let e = board[1][1];
let f = board[1][2];
let g = board[2][0];
let h = board[2][1];
let i = board[2][2];
// //possible winning combos:
// /*
// abc
// def
// ghi
// adg
// beh
// cfi
// aei
// gec
// */
// //assign values to winningCombos
let win1 = a+b+c;
let win2 = d+e+f;
let win3 = g+h+i;
let win4 = a+d+g;
let win5 = b+e+h;
let win6 = c+f+i;
let win7 = a+e+i;
let win8 = g+e+c;

// //create array for winning moves
let winningArray = [win1,win2,win3,win4,win5,win6,win7,win8]
let result = 0
//set default game state to no winner
let winner = false
//iterate over the winning array and look for the first one that adds up to 6 or 15
    //if there is a winner, return the proper number
for(j = 0; j < winningArray.length; j++){
    if (winningArray[j] === 15){
        // console.log('X Wins')
        winner = true
        return 1
        break
    } else if (winningArray[j] === 6){
        // console.log('O Wins')
        winner = true
        return 2
        break
    }  
}
        //if there are no winners
            //check for a valid game state
            //assume that the game is valid...
        let gameIsValid = true
        for (k =0; k < board.length; k++){
            for(l =0; l < board[k].length; l++){
                //unless there is a single value less than 1--then set gameIsValid to false
                if (board[k][l] < 1)
                gameIsValid = false;
            }
        }
                //if the game is invalid and there is no winner, return the proper number
                if (gameIsValid === false && winner === false){
                    // console.log('incomplete game')
                    return -1
                    //the only remaining case is that the game is valid and there is no winner, therefore it is a draw
                } else {
                    return 0
                }
}

console.log('incTest',isSolved(testIncGame))

//tests****************************

//***********tests */
    //DrawTest
let actual1 = isSolved(testDraw)
let expected1 = 0
let testName1 = 'Should return a 0 if there is a draw and the game is valid'
function assertEquals(actual1, expected1, testName1){
    if(actual1 === expected1){
        console.log('passed', testName1)
    } else {
        console.log(`FAILED, ${testName1}, expected ${expected1}, and received ${actual1}`)
    }
}
    //X Wins
let actual2 = isSolved(testXWins)
let expected2 = 1
let testName2 = 'Should return 1 if x wins and the game is valid'
function assertEquals(actual2, expected2, testName2){
    if(actual2 === expected2){
        console.log('passed', testName2)
    } else {
        console.log(`FAILED, ${testName2}, expected ${expected2}, and received ${actual2}`)
    }
}
    //O Wins
let actual3 = isSolved(testOWins)
let expected3 = 2
let testName3= 'Should return a 2 if o wins and the game is valid'
function assertEquals(actual3, expected3, testName3){
    if(actual3 === expected3){
        console.log('passed', testName3)
    } else {
        console.log(`FAILED, ${testName3}, expected ${expected3}, and received ${actual3}`)
    }
}
    //Incomplete game
let actual4 = isSolved(testIncGame)
let expected4 = -1
let testName4 = 'Should return a -1 if the game is incomplete and nobody has won'
function assertEquals(actual4, expected4, testName4){
    if(actual4 === expected4){
        console.log('passed', testName4)
    } else {
        console.log(`FAILED, ${testName4}, expected ${expected4}, and received ${actual4}`)
    }
}

//test calls
assertEquals(actual1, expected1, testName1)
assertEquals(actual2, expected2, testName2)
assertEquals(actual3, expected3, testName3)
assertEquals(actual1, expected4, testName4)