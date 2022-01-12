/*Write a function called "getLongestWordOfMixedElements".
Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.
Notes:
    If the array is empty, it should return an empty string ("").
    If the array contains no strings; it should return an empty string.
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/
let assortment = ['allow', 4, 'oops', 'foo', 'bar', 'o']
function getLongestWordOfMixedElements (input) {
    //if the array ius empty, return an empty string
    if (input.length < 1) {
        return "";
    }
    //filter for strings
    let filterForWords = input.filter((element) => typeof element === 'string');
    //if there are no strings, return an empty string
    if (filterForWords.length < 1){
        return "";
    }
    //iterate, using reduce, and return the longest word in the array of strings
    return filterForWords.reduce((previous, current) => current.length < previous.length ? current : previous);
}

console.log(getLongestWordOfMixedElements(assortment));
