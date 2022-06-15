/*
Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

 

Example 1:

Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Example 2:

Input: word1 = "leetcode", word2 = "etco"
Output: 4
 

Constraints:

1 <= word1.length, word2.length <= 500
word1 and word2 consist of only lowercase English letters.

*/
testWord1="ax";
testWord2="az"

let wordArray1 = ['a', 'z', 'a','s','e'];
let wordArray2 = ['a', 'z'];

let wordsAreEqual = (firstWord, secondWord) => {
    let isEqualLength = (firstWord.length === secondWord.length);

    let arraysEqual = true;
    for(i = 0; i < firstWord.length; i++){
        if(firstWord[i] !== secondWord[i]){
            arraysEqual = false;
            break;
        }
    }
    return (isEqualLength && arraysEqual);
}


function tranformStrings(word1,word2){
    //remove all letters NOT prestent in both strings
    //change strings to arrays
    let counter = 0;
    let firstWord = word1.split('');
    let secondWord = word2.split('');
    //if one string is longer, use to test array.includes()
    while (!wordsAreEqual(firstWord,secondWord)){

        if (firstWord.length > secondWord.length || firstWord.length === secondWord.length){
            firstWord.forEach((letter,index)=>{
                if(!secondWord.includes(letter)){
                    firstWord.splice(index,1);
                    counter++;
                }
            })
        } else if (secondWord.length > firstWord.length){
            secondWord.forEach((letter, index)=>{
                if(!firstWord.includes(letter)){
                    secondWord.splice(index,1);
                    counter++;
                }
            })
        } 
    }

  
    console.log(`Word One:${firstWord}, Word Two:${secondWord}`)
    return `Counter: ${counter}`;

}

console.log(tranformStrings(testWord1,testWord2));