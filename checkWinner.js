/*Write a function called 'checkWinner'. This function will take an array with a length of 7. 
Each element of the array will be either; 'red', 'black', or 0. 
We can assume that no violation of either of these is possible (i.e. input will always be of length 7, and elements will only be 'red', 'black', or 0).
Your function should accept this array as its only parameter.

If there are 4 'red' elements consecutively in a row, 'checkWinner' should return the string: 'Red Wins!'. 
Similarly, if there are 4 'black' elements consecutively in a row, 'checkWinner' should return the string: 'Black Wins!'. 
If neither of these is the case, 'checkWinner' should return 'Draw!'.
*/

//slice off 1st 4 elements, test if they are all the same color
 //if they are, return winner
 //if they are not,
   //increment to the 2nd element in the array
   //slice off the next 4 elements, test
   // rinse...repeat
   //if there are no winners, return draw


//    function testSlice (array, color) {
    
//        return array.every((element) => element === color && array.length === 4);
//    }

//    function checkWinner (tiles){
//        for (i = 0; i < tiles.length; i++){
//            if (tiles[i] !== 0){
//               let tileRange = tiles.slice(i, i+4);
//               let color = tiles[i];
//                 if(testSlice(tileRange, color)){
//                     let colorCapitalized = color.charAt(0)
//                       .toUpperCase() + color.slice(1);
//                     return `${colorCapitalized} Wins!`;
//                 }
//            }else {
//                continue;
//            }
//        }
//        return 'Draw!';
//    }



//testSlice test
// let testSliceActual = testSlice(arrayOfTilesTest, 'black');
// let testSliceExpected = true
// let testSliceTestName = `Should test if every array element matches the provided color`
//
// let actualCheckWinner = checkWinner(arrayOfTilesTest);
// let actualExpected = 'Draw!';
// let testName = `should return a draw if no winner`
// // //checkWinner test

// function assertEquals(actual, expected, testName){
//     if (actual === expected){
//         console.log(`Passed!, ${testName}`);
//     } else {
//         console.log(`Failed! ${testName}, expected: ${expected}, but got ${actual}`)
//     }
// }
// // assertEquals(testSliceActual, testSliceExpected, testSliceTestName);
// assertEquals(actualCheckWinner, actualExpected, testName);

// for (i = 0; i < arrayOfTilesTest.length; i++){
// console.log(arrayOfTilesTest.slice(i, i+4))
// }


//using while...
const generateWinString = (counter, lastColor) => counter === 3 ? lastColor + " wins!" : "Draw!";

// Fancy Pseudocode
//  Check every item in the list and take note of if it is the same as the last color and if so keep a mental count of how many in a row you've found
function fancyCheckWinner(board) {
    let counter = 0;
    let lastColor = "";
    let currentPosition = 0;

    while (currentPosition < board.length) {
        if (counter === 3) {
            break;
        }

        let currentColor = board[currentPosition];
        if(currentColor === lastColor) {
            counter++;
        } else {
            counter = 0;
            if (currentColor !== 0) {
                lastColor = currentColor;
            }
        }
        currentPosition++;
    }

    return generateWinString(counter, lastColor);
}


let arrayOfTilesTest = ['red', 0,0,'black', 'black', 'black', 'red']

function checkWinner (array){
    result = 'Draw!';
    let i = 0;
    let count = 0;
    
for (j = 0; j < array.length; j++){
    let keepCounting = true;
     i = j;
        while (keepCounting){
                if (array[i] !== 0 && array[i] === array[i+1]){
                    console.log(array[i], array[i+1])
                    count ++
                        if (count === 4){
                            let colorCapitalized = array[i].charAt(0)
                            .toUpperCase() + array[i].slice(1);
                            result = `${colorCapitalized} Wins!`;
                            keepCounting = false;
                        } else {
                            i++
                        }
                } else {
                    keepCounting = false;
            }
        }
    }
    return result;
}



console.log(fancyCheckWinner(arrayOfTilesTest))