function squareDigits(num){
    let reverseNum = (function(backwardsNum) {
        return backwardsNum
            .reverse()
            .join('')
            ;
    })
    //peel off the ones digit and square it;
    let runningCount = [];
    while (num >= 1) {
        let digit = Math.pow(num % 10, 2);
        runningCount.push(digit);
        num = Math.floor(num /10);
    }
    console.log('count',runningCount)
    return Number(reverseNum(runningCount));

}
//9122 should return 81144
// console.log(Math.pow(9122 %10, 2)) 
// console.log(Math.floor(9122 /10));
console.log(squareDigits(1615900));
// let number = 9122;
// let first = number % 10
// let number_2 = Math.floor(number / 10);
// let str = ''
// str += first
// let second  = number_2 % 10
// str += second;
// console.log(str)

// console.log( 9 % 10)