
//convert an object to an array of arrays consisting of teh key/val pairs
function objectToArray(obj) {
	//declare a return array
	let result = [];
	//iterate through object and extract keys and values
	for (key in obj){
		//declare an array to hold each key/val, store as it iterates
		let keyVals = [key, obj[key]];
		//push each pair into the return array
		result.push(keyVals);
	}
	//return the completed array
	return result;
}

//correctly submitted in 6min, incl time to register w/ edabit 

//-----------------------------------------------------------------------
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by 
// summing up the total number of points 
// for all the tiles in their hand. Each hand contains 7 scrabble tiles.

function maximumScore(tileHand) {
	//input is an array of objects
	//Here, each tile is represented as an object with two keys: tile and score.
	//declare a scoreTotal variable
	let scoreTotal = 0;
	//loop through the array and sum the values stored in the score property
	for (i = 0; i < tileHand.length; i++){
		scoreTotal += tileHand[i].score;
	}
	//return scoreTotal
	return scoreTotal
}

//correctly submitted w/ one error (used bracket notation instead of dot notation to access obj prop val), 6mins 45 sec


// Given an object of people and their ages, 
// return how old the people would be after n years have passed. Use the absolute value of n.

// function afterNYears(names, n) {
// 	for (person in names){
// 		names[person] = names[person] + Math.abs(n);
// 	}
// 	return names;
// }

// //correctly submitted 6min 15 sec

// An array is special if every even index contains an even number and every odd index contains an odd number. 
// Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
    let evenIndexEven = true;
    let oddIndexOdd = true;
	
	//iterate through the array and test for oddness and evenness
	for (i = 0; i < arr.length; i++){
				//**zero is considered even**/
		if (i %2 === 0 && arr[i] %2 !== 0){
			evenIndexEven = false;
            break
		} 
        
        if (i %2 !== 0 && arr[i] %2 === 0){
			oddIndexOdd = false;
		}
	}
   return (evenIndexEven && oddIndexOdd)
}

let array = [0,1];
// console.log(isSpecialArray(array));

/* 15 mins, had an error.  I refactored and added the boolean variables at the top and assumed they were true 
I then broke the loop on false evaluations of the oddness & evenness.*/

function factorChain(arr) {
	//set a monitor variable to true
	let isFactorChain = true;
	//loop array (maybe using reduce)
    for ( i = 0; i < arr.length - 1; i ++){
        console.log(arr[i + 1] / arr[i])
        if (!Number.isInteger(arr[i +1] / arr[i])){
            isFactorChain = false;
            break
        }
    }
    return isFactorChain;
}

// console.log(factorChain([2,4,8]))

/*this took 20 mins...I attempted to solve w/ reduce and failed. So I refactored and just used a for loop. Code also broke on my first run with that
I immediately saw that I needed to stop teh loop at arr.length -1 to prevent a NaN situation*/

// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// function indexMultiplier (arr){
//     //move thru the array and return a running sum of curr element * cuurnt index
//     let sum = 0;

//     for (i =0; i < arr.length; i++){
//         sum += (arr[i] * i);
//     }
//     return sum;
// }

// console.log(indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]));
/* solved in 3 min 30 sec.*/

function identicalFilter(arr) {
	/*Create a function that keeps only strings with repeating identical characters 
	(in other words, it has a set size of 1).*/
   return arr.filter((element) => { /* if  the current element passes the test below, then addit to the result of filter*/
       let passed = true;
       for (let i = 1; i < element.length; i++){
           if (element[i] !== element[0]){
               passed = false;
           }
       }
       return passed;
   })

}

// console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']));

/* this one took me over a half hour and consulting MDN to solve. */

// I was lost within the filter. I need to remember that filter ultimtely tests whether the provided function returns true or false.

let data = [
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5]
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5]
    },
    {
      id: 3,
      name: "Zygmunt",
      
    }
]   

function getStudentTopNotes(students) {
	//Create a function that takes an array of students and 
	//returns an array of their top notes. If the student does not have notes then 
	//let's assume their top note is equal to 0.
	let topNotes = [];
	for (i = 0; i < students.length; i++){
		let currHighNote = 0;
		if (!students[i].notes || students[i].notes.length === 0){
			topNotes.push(currHighNote);
		}else {
           let notesArray = students[i].notes;
			currHighNote = Math.max(...notesArray);
			topNotes.push(currHighNote);
		}
	}
	return topNotes;
}

// console.log(getStudentTopNotes(data));

//had problems with implementing Math.max ==> at first I didn't use the spread operator to access all the student note vals
//solved in 22 min, with MDN reference for spread operators


let sample = [
    { desc: "grill", prc: 300, qty: 1, taxable: true },
    { desc: "hotdogs", prc: 10, qty: 2, taxable: false },
    { desc: "US Flag", prc: 30, qty: 1, taxable: true }
];

function checkout(cart) {
	let total = 0;
	cart.forEach((item) => {
		let tax = (item.prc * item. qty) * .06;
		let subTotal = (item.taxable) ? item.prc * item.qty + tax : item.prc * item.qty;
		total += subTotal;
	})
	return total;
}

// console.log(checkout(sample));

//this one was pretty easy
//solved 11 min.

function reverse(str) {
	//use the str reverse formula
	//if the letter is upper case, convert to lower case & vice-versa
    let strModded = ''
	for (i = 0; i < str.length; i++){
		if (str[i] === str[i].toUpperCase()){
            strModded += str[i].toLowerCase() ;
           		} else {
		    strModded += str[i].toUpperCase();	
		}
	}
    return strModded
        .split('')
        .reverse()
        .join('');
}

// console.log(reverse('Hello World'))
//  15 mins

let cipher = {
	'a' : 1,
	'e' : 2,
	'i' : 3,
	'o' : 4,
	'u' : 5
}


// function replaceVowel(word) {
//     return word 
//         .replace(/a/g,1)
//         .replace(/e/g,2)
//         .replace(/i/g,3)
//         .replace(/o/g,4)
//         .replace(/u/g,5);
// }

// let hello ='hello world';

// let splited = hello.split(' ')
// console.log(splited)
// let joined = splited.join(' ');
// console.log(joined)



function censor (str) {
    //if a word is longer than 4 characters, replace the whole word with asterisks
    let strArray = str.split(' ');

    for (i= 0; i < strArray.length; i++){
        
        if (strArray[i].length > 4){
            let starz = '';
           
            for (j = 0; j < strArray[i].length; j++){
                starz += '*';
               
            }
            strArray[i] = starz;
        }
    }
 return strArray.join(' ');
}

// console.log(censor('Hello World'));

/*needed to study more about using for...of and reassigning array elements, and remember that strings are passed by value, arrays by reference */

function isIsogram(word){
    //put the letters into an object 
    //read the object the letter count increases above 1, it is not an isogram
}