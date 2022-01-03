function digitSum(num) {
    const unsignedNum = Math.abs(num)
    if (unsignedNum > 9) {
      let onesDigit = unsignedNum % 10
      let remainder = Math.floor(unsignedNum / 10);//this line used to have 'num' instead of 'unsignedNum'
      return onesDigit + digitSum(remainder)
    } else {
      return num
}
    return total
}   
    
function sumDigits (num) {
    let total = digitSum(num);
    let isNegative = (num < 0) ? true : false;
    let unsignedNum = Math.abs(num);
    let stringNum = unsignedNum.toString();
    let firstNum = Number(stringNum[0]);
    if (isNegative) {
        total = total - (firstNum * 2)
        return total;
    } else {
        return total;
    }
}



console.log(sumDigits(-22776));
console.log(12345 % 10)

