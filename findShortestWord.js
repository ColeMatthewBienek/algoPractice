function findShortestOfThreeWords(word1, word2, word3) {
    if (word1.length <= word2.length) {
        if (word1.length <= word3.length){
            return word1;
        } else {
            return word3;
        }
    }else {
        if(word2.length <= word3.length) {
            return word2;
        }else {
            return word3;
        }
    }

}

