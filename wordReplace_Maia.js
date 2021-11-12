// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it.
//For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

var capitalize = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);

function matchCapitalization(source, target) {
  let capitalizedRegEx = /[A-Z]/;
  target = target.toLowerCase();
  return capitalizedRegEx.test(source[0]) ? capitalize(target) : target; //if capitalizedRegEx.test(source[0])===true, return the result of the arrow function 'capitalize'
  //otherwise, return target
}

function myReplace(sentence, searchWord, replaceWord) {
  let searchRegEx = new RegExp(searchWord, "gi");
  let searchResults;
  let newSentence = sentence;

  while ((searchResults = searchRegEx.exec(newSentence)) !== null) {
    //will continue to search for multiple matches (regEx set to /g) until  searchRegEx.exec(newSentence)) evaluates to null
    console.log("exec:", searchRegEx.exec(newSentence)); //the RegExp.prototype.exec also remembers lastIndex, input (appears to be the replacement followed by the replaced)
    let currentMatch = searchResults[0];
    let before = newSentence.slice(0, searchResults.index);
    console.log("before:", before);
    let replacementWord = matchCapitalization(currentMatch[0], replaceWord);
    let ending = newSentence.slice(searchRegEx.lastIndex);
    newSentence = before + replacementWord + ending;
  }

  return newSentence;
}

console.log(myReplace("run fast ", "fast", "faster"));
