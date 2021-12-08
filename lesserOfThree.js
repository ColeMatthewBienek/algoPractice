function findMinLengthOfThreeWords(word1, word2, word3) {
    let first = word1.length;
    let second = word2.length;
    let third = word3.length;
    let winner = 0;
    if (first < second){
        winner = first
    }  else {
        winner = second;
    }

    if (third < winner) {
        winner = third;
    } else {
        return winner
    }
  return winner;  
}



function getMinLength (word1, word2, word3){
   let array = [word1, word2, word3];

   let min = word1.length;

   for (i =1; i < array.length; i++){
       if (array[i].length < min){
           
           min = array[i].length;
       }
   }
   return min;
}

console.log(getMinLength('aaa', 'bb', 'cee'));