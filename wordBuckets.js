// Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.
// ucketize("she sells sea shells by the sea", 10)
//  ["she sells", "sea shells", "by the sea"]

// bucketize("fairy dust coated the air", 20)
// ["fairy dust coated", "the air"]

// do not bucketize less than a whole word
//Spaces count as one character.
// Trim beginning and end spaces for each word bucket (see final example).
// If buckets are too small to hold a single word, return an empty array: []
// The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). 
// So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.
function bucketize(phrase, bucketSize){
    
    //create a string to hold phrase fragments
    let phraseFrag = "";
    //create an array to hold the results
    let result = [];
    //if the phrase length is <= bucketSize
    if (phrase.length <= bucketSize){
        //push the phrase into the results array and return it
        result.push(phrase);
        return result;
    }
    //split into words
    let words = phrase.split(' ');
    //look at the words
    //if any of the words is larger than the bucket size
    if (words.some((element) => element.length > bucketSize)){
        //return an empty array (bucket)
        return result;
    }
        

    //loop through the words array
    words.forEach((element, index) => {
           
            if (phraseFrag.length + element.length <= bucketSize){
                 //add words to the phrase fragment string until if the next word added will exceed bucket size
                phraseFrag += element + " ";
            
            } else {
                result.push(phraseFrag.trim());
                phraseFrag = element + " ";
            }
       
    })
    result.push(phraseFrag.trim());
    return result;
}

let words = "she sells sea shells by the sea";
console.log(bucketize(words, 10));
