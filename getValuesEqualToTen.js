// Write a function called "getElementsThatEqual10AtProperty".
// Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.
// Notes:
// If the array is empty, it should return an empty array.
// If the array contains no elements that are equal to 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.


function getElementsThatEqual10AtProperty(obj, key) {
    //3 of the 4 possible responses are an empty array
    //create a container to hold the results
    let result = [];
    
    if (!Array.isArray(obj[key])){
        return [];
    } else {
        if (obj[key].length < 1){
            return [];
        }else {
            if (Object.values(obj).length < 1){
                return [];
            } else {
                for (i = 0; i < obj[key].length; i++){
                    if (obj[key][i] === 10){
                        result.push(obj[key][i]);
                    }
                }
            }
        }
    }
    
    
    
    
    return result;
  }

