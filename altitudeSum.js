// please complete the challenge according to the instructions
function sumAltitudeDeltas(arr, indexOne, indexTwo){
    //obtain a sum of altitude changes
    
    //I: an array of integers
    //I: two integers representing indices of the array
    
    //O: a sum of the total changes in altitude represented
    //by the range of indices referenced by arguments 2 and 3
    
    //*note--> an increase in altitude is double value
    
    //obtain a slice of the array represented by arguments 2 and 3
    var arrSlice = arr.slice(indexOne,indexTwo+1);
    console.log('slice:', arrSlice)
    //create a holder for the sum
    var sum = 0;
    //iterate through the slice and begin the sum
    for (var i = 0; i < arrSlice.length; i++){
        //logic: measure the difference between the present integer and the next
        if (arrSlice[i+1] !== undefined){
            var curNum = arrSlice[i];
            console.log('c',curNum)
            var nextNum = arrSlice[i+1];
            console.log('n',nextNum)         
            var diff = nextNum - curNum;
            console.log('diff:', diff)
            var runningTotal = (diff > 0) ? sum = sum + (diff*2) : sum = sum + Math.abs(diff);
            console.log('neg:', Math.abs(diff))
            console.log('running: ', runningTotal)
            console.log('sum:', sum)
        }
    }
    return sum
    
    //if it is positive, double it and add to the running sum
    //if it is negative, add the difference to the running sum
    //if (n>0) ? n = n + (n*2) : n = n + Math.abs(n)
    //return the total
    
}
console.log('sum: ',sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4));
//console.log('sum: ',sumAltitudeDeltas([3, 5, 6, 7, 2], 0,1));
//7
