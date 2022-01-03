// Write a function called "isOddWithoutModulo".
// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.
// Note:
// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isOddWithoutModulo(17);
// console.log(output); // --> true
function modulo (num1, num2) {
    if (isNaN(num1) || isNaN(num2)){
        return NaN
        } else
        if (num2 === 0){
            return NaN;
            } else
            if (num1 === 0){
                return 0;
                    } else {

                    let unsignedNum1 = Math.abs(num1);
                    let unsignedNum2 = Math.abs(num2)
                    while (unsignedNum1 >= unsignedNum2 ){
                        unsignedNum1 -= unsignedNum2
                    }

    let remainder = (num1 < 0) ? unsignedNum1 *= -1 : unsignedNum1
    let isOdd = (remainder === 0) ? 'false' : 'true';
    console.log('odd?',isOdd) 
    return isOdd;
    }
}

 function isOddWithoutModulo(num){
    return modulo(num,2);
 }

console.log(isOddWithoutModulo(0));
