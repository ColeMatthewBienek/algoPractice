var numArray = [55,7,1,1000,2];

function nonMutatingSort (arr){
    var newArr = arr.slice();

    return newArr.sort(function(a,b){
       return a-b;
   })
}

console.log(nonMutatingSort(numArray))