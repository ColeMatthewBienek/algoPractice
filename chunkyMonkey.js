// Write a function that splits an array (first argument) into groups the 
// length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
   let myArr =[];
    while (arr.length > 0){
        myArr.push(arr.splice(0, size))
        console.log(myArr)
    }

   return myArr  
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);

