//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
 //concat the arrays for better use in filter comparison
    var combined = arr1.concat(arr2);
    return combined
        //translation: return into a new array the element being examined that isNOT included in one array OR the other.
        //this is predicated on the belief that there will, in fact be a difference between the arrays
        //remember .filter iterates over the whole array, examining each element, so it moves thru
        //combined and returns what ever doesn't exist in one of the elements
        .filter (element => !arr1.includes(element) || !arr2.includes(element))
  }
  
 console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));