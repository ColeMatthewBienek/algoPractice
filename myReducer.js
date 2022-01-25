//create a reduce function without using reduce
//myReducer invokes a callback function on eachj element of a provided array
// the callback function takes four arguments
    //previousVal ==> the value from the previous call to the callback function. On first run, use initialVal if specified, otherwise use array[0]
    //currentVal ==> value of the current element. On first run, use array[0] unless initial value was specified, otherwise use array[1]
    //current index ==> index position of the currentVal in the array. On first call, [0] if initialVal was used, otherwise [1]
    //array ==> the array being examined
//sample array
arr = [2,4,6,8,10];

function myReducer (array, callback, startVal){
//iterate through the array calling the callback function on each element
    //set previousVal
    // let previousVal, currentVal
    // if (!startVal){
    //      previousVal = array[0]
    //      currentVal = array[1];
    // } else {
    //     previousVal = startVal;
    //     currentVal = array[0];
    // }
    // console.log('p', previousVal, 'c', currentVal)
   //iterate through the provided array and call the callback on each element
    //increment the indices of  previousVal and currentVal by one each time the callback function is invoked
  


}


//sample function
function addThemAll (previousVal, currentVal){
    return previousVal + currentVal;
}

console.log(myReducer(arr, addThemAll));