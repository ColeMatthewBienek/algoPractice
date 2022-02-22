// An isogram is a word that has no duplicate letters. 
// Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram (word) {
   let caseIgnore = word.toLowerCase();
   
   if (caseIgnore.length < 1){
        return true;
    }

    let isogramMatrix = {};

    for (let i = 0; i < caseIgnore.length; i++) {
        if (!isogramMatrix[caseIgnore[i]]){
            isogramMatrix[caseIgnore[i]] = 1;
        } else {
            isogramMatrix[caseIgnore[i]] ++
        }
    }

    let isIso = true;
    console.log(isogramMatrix)
    for (letter in isogramMatrix){
        if (isogramMatrix[letter] > 1){
            isIso = false;
            break
        }
    }
    
    return isIso;
}

// console.log(isIsogram('pasSword'));

let fancyIsIsogram = (word) => word.length === (new Set (word.toLowerCase())).size;

