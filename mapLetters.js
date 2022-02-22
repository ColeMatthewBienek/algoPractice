/*
Given a word, create an object that stores the indexes of each letter in an array.
    Make sure the letters are the keys.
    Make sure the letters are symbols.
    Make sure the indexes are stored in an array and those arrays are values.
*/ 

function mapLetters (word) {
    let result = {};
    //add letter to an object as a key
    for (i = 0; i < word.length; i++){
        //if the letter does not exist in the object
        if (!result[word.charAt(i)]){
            //add the letter's index as the first element in an array as the value of the letter's key
            result[word.charAt(i)] = [i];
        }else {
        //else
            result[word.charAt(i)].push(i);
        }
    }

    //return the object
    return result;
}

console.log(mapLetters('aaaabbbb'));
let actual_1 = mapLetters('aaaabbbb');
let expected_1 = { a: [ 0, 1, 2, 3 ], b: [ 4, 5, 6, 7 ] };

let actual_2 = mapLetters('reverieloopy');
let expected_2 = {
    r: [ 0, 4 ],
    e: [ 1, 3, 6 ],
    v: [ 2 ],
    i: [ 5 ],
    l: [ 7 ],
    o: [ 8, 9 ],
    p: [ 10 ],
    y: [ 11 ]
  };

  

  function assertEqual(actual, expected, testName){
      actual = JSON.stringify(actual);
      expected = JSON.stringify(expected);

      if (actual !== expected){
          console.log(`FAILED! ${testName}, Expected ${expected}, but got ${actual}`)
      } else{
          console.log(`Passed ${testName}`);
      }

  }

assertEqual(actual_1, expected_1, 'word should be mapped into an object');
assertEqual(actual_2, expected_2, 'word should be mapped into an object');


