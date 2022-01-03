// Write a function called "computeCompoundInterest".
// Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.
// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output); // --> 438.8368221341061
// Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest This shows the formula used to calculate the total compound interest generated.

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears){
// A = P(1 + r/n)^nt
// = total = principal(1 + interestRate/compundingFrequency)^(compoundingFrequency*timeInYears)

let P = principal;
let r = interestRate;
let n = compoundingFrequency;
let t = timeInYears;

let total = P * Math.pow((1 + (r/n)), (n*t)) - P;


return total




}

console.log(computeCompoundInterest(1500, .043, 4, 6));

//438.8368221341061

