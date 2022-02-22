// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//check a sentence and see if it contains ALL letters in the English alphabet
//return a boolean
//--create an object of all alphabet lettters and set values to false
//--iterate over string and set found letters to true in the object
//--at the end check and see if all the objects values are true

// let alpha = {
//     'a': false,
//     'b': false,
//     'c': false,
//     'd': false,
//     'e': false,
//     'f': false,
//     'g': false,
//     'h': false,
//     'i': false,
//     'j': false,
//     'k': false,
//     'l': false,
//     'm': false,
//     'n': false,
//     'o': false,
//     'p': false,
//     'q': false,
//     'r': false,
//     's': false,
//     't': false,
//     'u': false,
//     'v': false,
//     'w': false,
//     'x': false,
//     'y': false,
//     'z':false
// }





let checkAlpha = (object) => {
    let checked = true;
    for (letter in object){
        if (object[letter] === false){
            return false;
        }; 
    }
    return checked;
}

function isPangram (string){
    let alpha = {
        'a': false,
        'b': false,
        'c': false,
        'd': false,
        'e': false,
        'f': false,
        'g': false,
        'h': false,
        'i': false,
        'j': false,
        'k': false,
        'l': false,
        'm': false,
        'n': false,
        'o': false,
        'p': false,
        'q': false,
        'r': false,
        's': false,
        't': false,
        'u': false,
        'v': false,
        'w': false,
        'x': false,
        'y': false,
        'z':false
    }
    //check a sentence and see if it contains ALL letters in the English alphabet
//return a boolean/ set default to false;
let pangramCheck = false;
//--create an object of all alphabet lettters and set values to false
//set all letters to lowercase
string = string.toLowerCase();

//--iterate over string and set found letters to true in the object
    for (let i = 0; i < string.length; i++){
            if (alpha[string[i]]===false){
            alpha[string[i]]= true;
            }    
        }
//--at the end check and see if all the objects values are true
    return checkAlpha(alpha);
    }
    


console.log(isPangram('Pack my box with five dozen liquor jugs'));
