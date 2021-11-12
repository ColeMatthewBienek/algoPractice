function largestOfFour (array){
    var collected = [];
    for (var i = 0; i < array.length; i++){
    collected.push(getLargest(array[i]))
    }
    return collected;
}

function getLargest(arr){
    var numHolder = null;
    for (i=0; i < arr.length; i++){
        if (numHolder === null){
            numHolder=arr[i];
        } else if (arr[i] > numHolder)
        {
            numHolder = arr[i];          
        }
    }

    return numHolder;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -11]]))

