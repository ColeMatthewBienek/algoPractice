//code the Array.map function without using .map

let thisArray = [1,2,3,4,5,6,7,8]

function myOwnMap(callback, arr) {
    //create an empty array to hold the mapped elements
    let result = [];
    //iterate over the provided array
    for (let element of arr) {
        //perform the provided callback function on each element
        //and push the result into the new array
        result.push(callback(element));
    }

    //return the new array
    return result;
}

//sample functions
function doubleNums (num) {
    return num * 2;
}
//add a charCode according to the number provided and return as an array of objects
function addASymbol (num){
    let newObj = {}
    newObj[num] = String.fromCharCode(num + 96);
    return newObj;
}

let myResult = myOwnMap(addASymbol, thisArray)
console.log(myResult)
