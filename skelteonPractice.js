// Skeleton
//Function is designed to find the first word in a series with the most repeated letters
//if there are ties, the fucntion should return the first instance
//ignore case
// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
    // Break up individual word into individual letters.
    word = word.split('');
    let letterHolder = {};
    // Count the instances of each letter
    word.forEach( letter => {
        if (letterHolder[letter]){
            letterHolder[letter]++
        } else {
            letterHolder[letter]=1;
        }
    })
    let maxRepeatCount = 0
    // Iterate all the counts and find the highest
    for (letter in letterHolder){
        if (letterHolder[letter] > maxRepeatCount){
            maxRepeatCount = letterHolder[letter];
        }
    }
    // Return this word's max repeat count
    return maxRepeatCount;
  }
  
  function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = '';
  
    // Break up input text into words (space-delimited).
    text = text
        .toLowerCase()
        .split(' ');
    // For each word...
    text.forEach(word => {
        let repeatCountForWord = findMaxRepeatCountInWord(word);
      // If that max repeat count is higher than the overall max repeat count, then
      if (repeatCountForWord > maxRepeatCountOverall){
         // update maxRepeatCountOverall
        maxRepeatCountOverall = repeatCountForWord;
         // update wordWithMaxRepeatCount
          wordWithMaxRepeatCount = word;
      }
    })
    return wordWithMaxRepeatCount;
  }
  //test variables
  let text = 'Sleepy was the girl who stayed up too late';
  let text_2 = 'Red rider rover come over'
  let actualResult_1 = findFirstWordWithMostRepeatedChars(text);
  let actualResult_2 = findFirstWordWithMostRepeatedChars(text_2)
  let testName = `Function should correctly select the first word with the most repeated characters`;
  // ASSERTION FUNCTION(S) TO BE USED
  function testMaxRepeatCount (expectedResult, actualResult,testName){
    if (actualResult === expectedResult){
        console.log(`Passed, ${testName}`);
    } else {
        console.log(`Failed! ${testName}, expected ${expectedResult}, but received: ${actualResult}`);
    }
  }
  // TESTS CASES
testMaxRepeatCount ('sleepy', actualResult_1,testName);
testMaxRepeatCount ('rider', actualResult_2,testName);



