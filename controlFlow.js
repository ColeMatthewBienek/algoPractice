/*
Given an array, find the first index where a 10 appears. If it doesn't appear, return -1;
 */

function findTen(arr) {
  var idx = -1;
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] === 10) {
      idx = i;/*arr[i]*/  //should read: idx = i, since we are looking for the index, not the value at the index.
      break;
    } /*else {
      return idx;       **Also don't need this, since we already default to -1
    }*/
  }
  return idx; //add this
}

// console.log('debug 1:', findTen([1,6,10,3])); // => 2
// console.log('debug 1:', findTen([1,6,5,9])); // => -1

//--------------------------------------------

//2: debugging B
/* Given an array of employee data, return all the names in an array of the people who took vacation this year */ 



function tookVacation(arr) {
  var names = [];  //names was declared inside the for loop, so it was 'emptied' each loop
  for (var i = 0; i < arr.length; i ++) {
   
    if (arr[i].vacation !== undefined) {
     names.push(arr[i].name);
    } 
  }
 return names; //the array was returned inside the for loop, so it ended on one iteration
}

var vacation = [
  {
    name: 'James',
    vacation: 'January 6th - 8th',
  },
  {
    name: 'Elise',
  },
  {
    name: 'Paul',
    vacation: 'September 12th - 15th',
  },
  {
     name: 'Elise',
     vacation: 'October 22nd - 25th',
  },
  {
    name: 'Tyler'
  }
]

// console.log(tookVacation(vacation));// => ['James', 'Paul', 'Elise'];/2: debugging B
/* Given an array of employee data, return all the names in an array of the people who took vacation this year */ 

//greatestNums
/*Given a list of arrays of numbers, return the sum of the array with the greatest total */
//debug the function below
var listOfNums = [
  [1,2,3,10], 
  [9,47,6], 
  [60,30, 2, 4], 
  [4,7,9]
];

function greatestNums(arr) {
var greatest = 0;
// var currSum = 0;
  for (var i = 0; i < arr.length; i ++) {
    var currSum = 0; //currSum needed to be cleared each iteration
    for (var j = 0; j < arr[i].length; j ++) {
      currSum += arr[i][j];
    //   console.log('currSum:', currSum);
    }
    if (currSum > greatest) {
      greatest = currSum;
    }
  }
  return greatest;
}

// console.log(greatestNums(listOfNums)); // => 96;


//**The next problem is intentionally written this way. It is not factual */

//3) Watered Down Wine

  /*
  You are receiving casks of wine. It is your job to weigh the wine to know if it is watered down or not. 
  Different kinds of wine will have different expected weights. 
  You will have to calculate the expected weight of the wine and compare it to a range. If it is within the range, the wine is not watered down. If it is too heavy, it is watered down. If it too light, it has been mislabled.


  */ 

//****don't edit the assert function */
//A
function assertWateredDownWines(actual, expected, testName) {
   if (actual === expected) {
       return `Passed, ${testName}`
   } else {
       return `Failed, ${testName}`
   };
  }
  
function wateredDownWines(wineVol, minKG, maxKG) {
    //compute the weight, in kg, of the wine vol
    let  caskWeight = wineVol * .98;
    //test the caskWeight against the minKG and maxKG
    //return approprite response
    return (caskWeight >= minKG && caskWeight <= maxKG) ? `${caskWeight} kg` : `rejected`;

}
  
    //A) Given a wine volume in liters, and a min and max in kilograms, return a string of the wine in kg weight if it is within the min kg and max kg, or 'rejected' if it is not.
  
  
  /*
    additional Info:
    Water has a specific gravity of 1.0, which means that 1 liter of water weighs 1 kilogram.
  
    If something has a specific gravity of 1.5 then that means that 1 liter would weigh 1.5 kilograms.
  
    Because alcohol is less dense than water, wine has a gravity of around .98.
   */
  let testNamePass = `Should calculate the correct weight and test if it falls within provided range`
  let testNameFail = `Should reject the cask for being improper weight`
  var actual1 = wateredDownWines(100, 97, 99); 
  var expected1 = '98 kg';
  
  var actual2 = wateredDownWines(120, 100, 102);
  var expected2 = 'rejected';
  
  var actual3 = wateredDownWines(120, 116, 118); 
  var expected3 =  '117.6 kg';
  
//   console.log(assertWateredDownWines(actual1, expected1, testNamePass));
//   console.log(assertWateredDownWines(actual2, expected2, testNameFail));
//   console.log(assertWateredDownWines(actual3, expected3, testNamePass));
  
  
  //-----------------------
  
  //Watered Down Wines B
  
    var cases = [
      {liters: 170, minKG: 150, maxKG: 160, gravity: .97},
      {liters: 180, minKG: 175, maxKG: 179, gravity: .96},
      {liters: 200, minKG: 197, maxKG: 199, gravity: .99},
      {liters: 130, minKG: 122, maxKG: 125, gravity: .98},
    ]
  
    /*
    You are given an array of wine shipments in liters.
      Return an array of booleans.
        - If the  weigths is within the given range, it is a true case
        - If the weight is not within the range, it is a false case
      Use what you read about the weight of wine versus water above to caculate if the weight is within the range.
     */
function isWine (obj){
   let {liters, minKG, maxKG, gravity} = obj;
   let caskWeight = liters * gravity;
   return (caskWeight >= minKG && caskWeight <= maxKG);
}
//    console.log(testWeight({liters: 170, minKG: 150, maxKG: 160, gravity: .97})) ;
    
function wateredDownWinesB(wines) {
     let testResults = [];
     for ( i = 0; i < wines.length; i++){
         testResults.push(isWine(wines[i]));
         }
     return testResults;
}
  
//   console.log(wateredDownWinesB(cases)) 
//     //result =>: 
    /* 
    [false, false, true, false]
    */

    function hasSpaces (str){
       
      return (str.length !== str.trim().length);
      


    }

    // console.log(hasSpaces('d'));

 let stuff =   ['apple', 'cat', 'boat', 'card', 'bond'];

function groupBy(arr) { 
    let result = {};
    
    for (i = 0; i < arr.length; i ++){
      let currWord = arr[i];
      let firstLetter = arr[i][0];
      
      if (!result[firstLetter]){
        result[firstLetter] = [currWord];
      } else {
        result[firstLetter].push(currWord);
      }
      console.log(result);
      

      
    }
    return result;
}
console.log(groupBy(stuff));