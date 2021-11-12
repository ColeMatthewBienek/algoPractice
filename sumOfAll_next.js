function sumOfAll(arr){
var start = Math.max(arr[0], arr[1])
var stop = Math.min(arr[0], arr[1])
var sum = start
while (start > stop){
    //console.log('top: ',start);
    sum = (sum) + (start-1)
    //console.log('sum: ',sum)
    start --;
    }
    return sum
}


console.log(sumOfAll([1,0]))
