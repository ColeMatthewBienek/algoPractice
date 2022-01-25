// Skeleton
let sentence = 'cool pop RoTaToR'
// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
    let palindromes = [];
    // split sentence into words
    let words = sentence
    .split(' ');
    // iterate words and collect the palindromes
    words.forEach(word =>{
        if (isPalindrome(word)){
            palindromes.push(word)
        }
    })
    // sort the list of palindromes by word length
    palindromes = palindromes.sort((a,b)=>a.length - b.length );
    // return the largest item in the sorted list
    return palindromes[palindromes.length -1];
  }
  
  
  function reverseString(string) {
  let reverseWord = string  
    .split(' ')
    .reverse()
    .join();
  return reverseWord;
  
  }
  
  function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    word = word.toLowerCase();
    return (word === reverseString(word));
  }
  
  function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    }
    return 0;
  }
  console.log(findLongestPalindrome(sentence))
  // ASSERTION FUNCTION(S) TO BE USED
  
  // TESTS CASES