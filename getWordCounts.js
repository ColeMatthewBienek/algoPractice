function countWords(str) {
    //check to see is str is empty, if so, return an empty object 
    if (str.length === 0){
        return {};
    }
    //unpack the input string into separate words--into an array
    let words = str.split(' ');
    //create a container object to hold the words and counts
    let wordCounts = {};
    //loop thru the words array and add the words and counts to the object
    words.forEach(word => {
       if (wordCounts[word]) {
           wordCounts[word]++;
       } else {
           wordCounts[word] = 1;
       }   
    })
return wordCounts;
}

  console.log(countWords('ask a bunch get a bunch'));
  console.log(countWords(''));
