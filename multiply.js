function multiply(num1, num2) {
    //rules: -x(-x) = (+x), -x(x) = (-x), x(-x) = (-x)
    let int1 = Math.abs(num1);
    let int2 = Math.abs(num2);
    let int1IsNegative = (num1 < 0) ?true :false;
    let int2IsNegative = (num2 < 0) ?true :false;

    
    let product = 0;
    while (int2 >= 1){
        product += int1
        int2--
    }

    //if either num is negative, change the product to negative
    //if both are negative return a positive
    //if both are positive, return a positive

    if (int1IsNegative && int2IsNegative){
        return product;
    } else if (int1IsNegative || int2IsNegative){
        return product /= -1;
    } else
        return product
  }

  console.log(multiply(5,-3))