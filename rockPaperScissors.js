// Abigail and Benson are playing Rock, Paper, Scissors.

// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

//     R stands for Rock
//     P stands for Paper
//     S stands for Scissors

/*
calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// Benson wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"
*/ 
const playerOne = 'Abigail';
const playerTwo = 'Benson';

function winningHand(weapons){
    let throw_1 = weapons[0];
    let throw_2 = weapons[1];
    //check for a tie
    if (throw_1 === throw_2){
        return 'tie';
    }
        //find winner
        if (throw_1 === 'R' && throw_2 !== 'P'){
            return playerOne;
        } else if (throw_1 === 'P' && throw_2 !== 'S'){
            return playerOne;
        }  else if (throw_1 === 'S' && throw_2 !== 'R'){
            return playerOne;
        } else {
            return playerTwo
        }        
}


function calculateScore(games){
    //set up winning cases --> func
    let playerOneWins = 0;
    let playerTwoWins = 0;
    //test each array pair against winning cases & store the winner in the gameWinners array
    for (let i = 0; i < games.length; i++){
        if (winningHand(games[i]) === playerOne){
            playerOneWins ++;
         } else if (winningHand(games[i]) === playerTwo){
            playerTwoWins ++;
        }    
    }
        //determine winner
        console.log(playerOneWins, playerTwoWins)
        if (playerOneWins > playerTwoWins){
            return playerOne;
        } else if (playerTwoWins > playerOneWins){
            return playerTwo;
        } else {
            return 'Tie';
        }
}
let match = [["R", "P"], ["R", "R"], ["S", "S"]]
console.log(calculateScore(match))

// 40 mins, had to do some JS styling adjustments.
//finished the logic in about 25 mins
