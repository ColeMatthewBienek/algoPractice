function getLengthOfThreeWords(word1, word2, word3) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i].length;
    }
    return sum;
  }

  console.log(getLengthOfThreeWords('one', 'two', 'three'));
  