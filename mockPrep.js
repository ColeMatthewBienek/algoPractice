  
// //   Extract City Facts
// // Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// // name
// // population
// // continent
// // The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// // Examples
// // cityFacts({
// //   name: "Paris",
// //   population: "2,140,526",
// //   continent: "Europe"
// // }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// // cityFacts({
// //   name: "Tokyo",
// //   population: "13,929,286",
// //   continent: "Asia"
// // }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

// //i: obj
// //o: string : about t he city
// function cityFacts(obj){

// }

// console.log(cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// })) // ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// console.log(cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// })) // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

// function cityFacts(obj){
//     let {name, population, continent} = obj;
//     return `${name} has a population of ${population} and is situated in ${continent}`;
// }

// console.log(cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe"
//   })) 

//   console.log(cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe"
//   })) // ➞ "Paris has a population of 2,140,526 and is situated in Europe"
  
//   console.log(cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia"
//   }))

// let arr = ['four', 'five', 'six'];
// let [first, second, third] = arr;
// console.log(first)

function hasSpaces (str){
  let skinnyStr = str.replace(/ /g, ''); 
  return (skinnyStr.length !== str.length);    
    
  }

// console.log(hasSpaces('hello World'))

function sumNum (num){
    let sum = 0;
    while (num > 0){
        sum += num;
        num --;
    }

    return sum;
}

function recurseSum(num){
    let sum = num;
    if (num < 1){
        return sum;
    }  else {
        sum += recurseSum(num -1);
    }
    return sum;
}
// console.log(recurseSum(2));


function highLow(numString){
    let nums = numString.split(' ');
    let highNum = 0;
    let lowNum = Number(nums[0]);

    for (i = 0; i < nums.length; i++){
        if (Number(nums[i] > highNum)){
            highNum = nums[i];
        }

        if (Number(nums[i] < lowNum)){
            lowNum = nums[i];
        }
    }

    return `${highNum} ${lowNum}`;
  
}

// console.log(highLow('13'))

function stepper (steps) {

    let highNum = Math.max(...steps);
   
    let stepCount = 0;

    for (i = 0; i < steps.length; i++){
        stepCount += (highNum - steps[i]);
    }

    return stepCount;

}

// console.log(stepper([3,10,3,10,3,1]))

let stringArray = ['apple', 'cat', 'boat', 'card', 'bond'];

function groupByFirstLetter(words){
    let groupedWords = {};

    for (i = 0; i < words.length; i++){

        let firstLetter = words[i][0];
        let word = words[i];

        if(!groupedWords[firstLetter]){
            groupedWords[firstLetter] = [word];
        } else {
            groupedWords[firstLetter].push(word)
        }
    }
    return groupedWords;
}

// console.log(groupByFirstLetter(stringArray));


function lastLetters ( str ){
    let flip = str
        .split('')
        .reverse()
        .splice(0,3)
        .reverse()
        .join('')
   return flip;
}

// console.log(lastLetters('abcdefg'));

function foo(a,n){
    return a.charAt(n);

}

console.log(foo('abcd', 2))