function sumDigits(num) {
    const unsignedNum = Math.abs(num)
    if (unsignedNum > 9) {
      let onesDigit = unsignedNum % 10
      let remainder = Math.floor(num / 10)
      return onesDigit + sumDigits(remainder)
    } else {
      return num
    }
  }
   
  console.log(sumDigits(-2461))