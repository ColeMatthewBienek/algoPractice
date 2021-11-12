// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function pigLatin(str) {
  //create a vowel list
  var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  //look in the string for the first vowel
  //if the vowel is the first letter
  if (vowels.includes(str[0])) {
    //add 'way' to the end and return the string
    str = str + "way";
    return str;
  }
  //if the vowel is not the first letter
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      //cut all the letters from the beginning of the string
      //up to the first vowel--not inclusive--
      var flopStr = str.substring(0, [i]) + "ay";
      //add all the cut letters to the end of the string and append 'ay'
      //return the string
      var newStr = str.substring([i]) + flopStr;
      return newStr;
    }
  }
  //if there is no vowel (is in 'sometimes y)
  if (!vowels.includes(str) === true) {
    //add 'ay' to the end, return the string
    str = str + "ay";
    return str;
  }
}
var testA = "calilfornia";
var testB = "xavier";
var testC = "rythym";
var testD = "school";
var testE = "hsdfubbsa";
console.log(pigLatin(testA));
console.log(pigLatin(testB));
console.log(pigLatin(testC));
console.log(pigLatin(testD));
console.log(pigLatin(testE));
