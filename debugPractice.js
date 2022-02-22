// function concatMe(name) {
//     var message = name;
//     message += ', hello';
//     return message;
//   }

//   var person = 'Josh'
// //   console.log('basic1: ', concatMe(person)); //=> 'Josh, hello'

//   function restOfStr(str, char) {
//     var slicePoint = str.indexOf(char); //change variable name to something more descriptive, fix indexOf syntax
//     var restOfStr = str.slice(slicePoint);
//     return restOfStr;
//   }
  
//   var str1 = 'hello';
//   var char1 = 'e';
  
// // console.log('basic2: ', restOfStr(str1, char1)); //==> 'ello' //fix function name in the call
  
// //***basic 3 ****
// //should replace the first letter of str with char

// function replaceChar(str, char) {
//     var res = char + str.slice(1); //start with the letter to replace and concat it with the str - the first letter

//     // res[0] = char; unnecessary
//     return res;
//   }
  
//   var testStr = 'jellow';
//   var testChar = 'm';
  
// //   console.log('basic3: ', replaceChar(testStr, testChar)); // ==> 'mellow'

// function countBoomerangs(arr) {
// 	let count = 0;
// 	for (let i = 0; i < arr.length ;/*i +=2*/ i ++) { // incrementing by 2 (i+=2) would skip vals in the array
// 		if (arr[i] === arr[i + 2] && arr[i + 1] !== arr[i]) { //assignment vs. comparison
//             // console.log('first', arr[i], 'third', arr[i+2], 'second', arr[i+i]) //i logged here and found boolean vals and knew that there was an
//             //error regarding assignment vs. comparison
// 			count ++;
// 		}
// 	}
// 	return count;
// }

// var assertEqual = function(actual, expected) {
//   if(actual === expected) {
//     return 'passed';
//   } else {
//     return 'failed';
//   }
// }

// var actual1 = countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
// var expected1 = 2;

// var actual2 = countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
// var expected2 = 1;

// console.log('assert1: ', assertEqual(actual1, expected1));
// console.log('assert2: ', assertEqual(actual2, expected2));

function doubleChar(str) {
    //declare an array for holding doubled strings
    // var answer = '';
    let answer = [];
    for(var i = 0; i < str.length; i ++){
      answer.push(str[i]); //trying to push into a string, change answer to an array
      answer.push(str[i]);
    }
    //change answer back into a string using join
    return answer.join('');
  }
  
//  console.log(doubleChar("Hello World!")); //==> HHeelllloo  WWoorrlldd!!"

//basic 6 ****

//add the key and value to the object as a new property. If the key already exists, don't change the value.

//note: this function has an assertObj function. It works fine. Below that, you will find actual and expected.


var testObj1 = {
  a: 'bee',
  c: 'deli',
  f: 'guard',
}

var testObj2 = {
  a: 'bee',
  c: 'deli',
  f: 'guard',
}


function addProperty(obj, key, val) {
    //check if the key/val is present in the object
    //if it isn't add it
    //below, obj['key'] won't use the argument [key] supplied to the function
  if (!obj[key] /*obj['key]=== undefined*/) {
    //obj.key = val; key is a variable, keep using bracket notation
    obj[key] = val;

  } 
  return obj;
}

//assertObj: this works! Don't debug the assert function (all assert functions will work properly)

function assertObj(actual, expected) {
  var length = Object.keys(actual).length === Object.keys(expected).length;
  if (length === false) {
    return 'failed';
  }
  for (var key in actual) {
    if (actual[key] !== expected[key]) {
      return 'failed'
    }
  }
  return 'passed';
}

var actual1 = addProperty(testObj1, 'm', 'night');
var expected1 = { a: 'bee', c: 'deli', f: 'guard', m: 'night'};

var actual2 = addProperty(testObj2, 'f', 'gorilla');
var expected2 = { a: 'bee', c: 'deli', f: 'guard'};

// console.log('basic 6a: ', assertObj(actual1, expected1)); 

// console.log('basic6b:', assertObj(actual2, expected2));

//findIndex
//should return the index of the array where the given key exists as a property


var accessArr = [
  {key1: 'Hello'},
  {key2: 'Thoughts'},
  {weird: 'these clothes'},
  {time: 'get a watch'},
];


function findIndex(arr, key){
  //don't need: var index = 0;
  for (var i = 0; i < arr.length; i ++) {
    //next line has dot notaion, should be using bracket for a variable
    if (/*arr[i].key*/arr[i][key]) {
        return i;
      // don't need : break;
    }
    // this : index = i; should be inside the for loop--if even needed...could just use i;
  }
  //move into the for loop, lose the variable index;
  //return index;
}

// console.log('basic 7: ', findIndex(accessArr, 'weird')); //==> 2

//findValues
//given an object and an array of all the object keys, return a string of every other value concatenated togther 

var objOfStr = {
    key1: 'My ',
    key2: 'You ',
    key3: 'dog ',
    key4: 'are ',
    key5: 'loves ',
    key6: 'a ',
    key7: 'bones.',
    key8: 'wonderful person.',
  }
  
  var arrOfKeys1 = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8'];
  
  var arrOfKeys2 = ['key2', 'key1', 'key4', 'key3', 'key6', 'key5', 'key8', 'key7'];
  //checked to see if i needed to add sspaces in the concatted string
  function findValues(obj, arr) {
    var str = '';
    for (var i = 1; i < arr.length; i += 2){ //start at index 1, not 0-- that will set the jumps correctly, also increment by 2, not 1
      str += obj[arr[i]];// wouldn't concat changed to:  str += ...
    }
    return str;
  }
  
//   console.log('basic 8a: ', findValues(objOfStr, arrOfKeys1)); //==> 'My dog loves bones.'
//   console.log('basic 8b: ', findValues(objOfStr, arrOfKeys2)); //==> 'You are a wonderful person.'

//Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) to each even integer.
// Examples
// evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

// evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

// evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]
// Notes

/******info break: 
 '!' is called the 'bang operator' and works on booleans and truthy/falsy values.
if you don't know the concept, you can find information on MDN. It's very handy, and properly used makes your code look nifty. Plus, it'll get used often from here.
*/

function evenOddTransform(arr, n) {
	for (var i = 0; i < arr.length; i ++) {
		/*for (var y = 0; y < n; y ++) {*///don't need the extra iterator
			if (arr[i] % 2 === 0) {//didn't finish the expression...needed to test if arr[i] modulo2 !== 0 (will be an even  number)
				arr[i] -= 2 * n ;// use assignment operator and the formula - (2 * n), this will be an even number
			} else {
				arr[i] +=  2 * n ; //use assignment operator and + (2 * n)
			}
	}
	return arr;
}
//**This one tricked me */
// console.log('evendOddTransform1: ', evenOddTransform([0, 0, 0], 10)); //==> [-20, -20, -20]
// console.log('evenOddTransform2: ', evenOddTransform([1, 2, 3], 1)); //==> [3, 0, 5]

///Intermediate 2) 

//Remove Middle Strings 
//Input is a string of odd or even length. If it has 4 or more characters and is even, return a new string with the middle two characters removed.  Else, return 'invalid string'. Characters will never repeat.


function removeMiddle(str) {

    if (str.length % 2 !== 0 || str.length < 4) {
      return 'invalid input'
    }
  //angels
    var first = (str.length)/2 - 1; //if length === 6; first === 2
    var second = (str.length)/2; // if length === 6; second === 3
  
    var resStr = '';
  
    for  (var i = 0; i < str.length; i ++) {
      if (i !== first && i !== second) {
        console.log('str[i]', str[i], i)
        resStr += str[i];
      }
    }
  
    return resStr;
  }
  
  console.log('intermediate 1a: ', removeMiddle('angeloos')); // ==> 'anls';
  
  console.log('intermediate 1b:', removeMiddle('hotel')); //==> 'invalid input'
  
  console.log('intermediate 1c: ', removeMiddle('at')); //  ==> 'invalid input'
  