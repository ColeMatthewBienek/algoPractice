// 0 % ANYNUMBER = 0.
// ANYNUMBER % 0 = NaN.
// If either operand is NaN, then the result is NaN.
// Modulo always returns the sign of the first number, even if the remainder is 0.

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
    return remainder
    }


}


//let result = 27 % 6



console.log(modulo(23, 'b'))