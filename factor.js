function factor (num){
    for (var prod =1; num>0; num--){
        prod *= num;
    }
    return prod;
}



console.log(factor(5));