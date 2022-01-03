// Write a function called "computeSummationToN".

// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:

// If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
// var output = computeSummationToN(6);
// console.log(output); // --> 21

function computeSummationToN (n){
  //set a base case / termination case
    if (n <= 0){
       return n;   
} else {
   //begin the summation: each call to computeSummationToN begins with the current value of (n)
   //each successive, recursive call subtracts (1) from (n) and adds the result
   //teh return does not happen until the base case is reached
    return n + computeSummationToN(n -1);
}
}
console.log(computeSummationToN(5));
