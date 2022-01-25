// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    //set the stop mark, if the number is less than or equal to 1, stop!
    if (n <= 1){
        return n;

    }else {
        return n * factorial(n-1);//the recursion:
                                  //let n=5, so 
                                  //(5) * the result of factorial(5-1)
                                  //now n=4
                                  //(4) * the result of factiorial (4-1)
                                  //etc...
                                  //until the stop condition is reached
    }


};

console.log(factorial(5));