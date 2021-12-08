// function notIncluded(arr, pos) {
//     let result = [];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === pos){
//             continue;
//         }
//         result.push(arr[i]);
//     }
//     return result;
// }

function splicer (arr, pos){
    return arr.splice(pos,1);
}

console.log(splicer([1,2,3,4,5,6,7,8,9], 2));

// function getAllElementsButNth(array, n) {
//     let firstHalf = array.slice(0,n);
//     let nextHalf = array.slice((n+1))
//     let wholePiece = firstHalf.concat(nextHalf);
//     return wholePiece;
//   }

