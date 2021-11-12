//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumOfAll(arr){
    //since the lowest number will not always come first,
    //sort the array
    
    var arrSorted = arr
        .sort(function(a,b){
            return a-b
        })
    // console.log(arrSorted)
    var sorted=getNums(arrSorted);
    return sorted;

}

function getNums(arr){
    //var newArr=[arr[0]]
    var top = [arr[1]]
    console.log('top', top)
    //console.log('before', newArr)
    while (top > 0){
       top = top + (top-1);
       top --
       console.log(top)
    }  
    
   //return newArr 
}
// function addEmUp(arr){
//    var summed = arr.reduce(function(prev, curr){
//     console.log("p,c: ",prev,curr)    
//     return prev + curr
//     })
//    return summed 
// }
console.log(sumOfAll([5,10]));
