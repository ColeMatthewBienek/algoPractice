function buildLetterScores (){
    let letterTable = {};
    for (i = 65; i < 91; i++){
        letterTable[String.fromCharCode(i).toLowerCase()] = i - 64;
    }
return letterTable;
}

function highestScoringWord (string) {
    let letterTable = buildLetterScores();
    //

    let arrayOfWords = string
        .toLowerCase()
        .split(' ');

    let currentTotal = 0;
    let currentWord = '';
    
    arrayOfWords.forEach((word) => {
        let wordTotal = 0;
        for (i = 0; i < word.length; i++){
            wordTotal += letterTable[word[i]];
        }
            if (wordTotal > currentTotal){
                currentTotal = wordTotal;
                currentWord = word;
            }
    })
    return currentWord
}

console.log(highestScoringWord('Hello World I am learning to code from this sexy girl'));