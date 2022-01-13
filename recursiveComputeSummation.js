function summation (n) {
    let sum = n;
     if (n > 0){
         sum = n + summation (n-1);
     }
     return sum;
}

console.log(summation(5));