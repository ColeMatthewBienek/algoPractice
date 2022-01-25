function largestOfFour (array){
    var collected = [];
    for (var i = 0; i < array.length; i++){
    

    

    }
    }
    return collected;
}


function getLargest(arr){
    var numHolder = 0
    for (i=0; i < arr.length; i++){
        if (arr[i] > numHolder){
            numHolder = arr[i];          
        }
    }
    return numHolder;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 33], [32, 35, 37, 39], [1000, 1001, 857, 1]]));