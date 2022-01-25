function recursiveSumArray(arr){
    var total = 0
    if (arr.length <= 1){
        //console.log(arr[0])
        return arr[0];
   }else{
        //console.log(arr[0] + recursiveSumArray(arr.slice(1)))
        return arr[0] + recursiveSumArray(arr.slice(1))
   }
    
}
console.log(recursiveSumArray([1,2,3,4,5]))