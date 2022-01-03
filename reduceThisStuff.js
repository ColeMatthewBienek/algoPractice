//write a reduce function
    //myReducer takes 3 args ==> an array to reduce, a callback funct, and an optional start value
    //myReducer will call the callback funct once for each array element
    //and ultimately return a single value 
            //the initial values are determined by the presence or absence of an optional startvalue
            //if there is a start value provided, the previous value is set to the startvalue, and the current value is set to array[1]
            //if no start value, previous value = array[0], and curr value = array[1]
        //the callback fucntion will take two args ==> prev val, curr val
    let array = [1,2,3,4,5];

    function myReducer(array, callback, startValue){
        let result = (!startValue) ?array[0] : startValue;
      
        //call the callback function with previous and current values
            //advance the indices of both previous and current values
                //call the callback function with current and previous values      
    if (!startValue){ 
            for (i = 1; i < array.length; i++){
            console.log(callback(result, array[i]))
        // result = callback(array[0], array[i])
        // to begin, result === either array[0] or startValue
        // after the first callback call, result === the result of the callback call
        // 1st call: 1 = callback(1, 2) ==> 1 + 2
        // 2nd call: 3 = callback(3, 3) ==>  3 + 3
        // 3rd call: 6 = callback(6, 4) ==> 6 + 4
        // 4th call: 10 = callback (10, 5) ==> 10 + 5 
            result = callback(result, array[i])
        }
        return result;
        } else {
            for (i = 0; i < array.length; i++){
                result = callback(result, array[i])
            }
        }
        return result
    }
    //simple sample functions
    function addArrayElements (prev, curr){
        return prev + curr;
    }
    let arr = [['a', 'b', 'c'], [ 1,2,3]]
    function flattenArray (prev, curr){
        return prev.concat(curr);
    }
console.log(myReducer(arr, flattenArray, array))

    // //reduce prototype:
    // //source array
    // let arr = [1,2,3,4,5];
    // //reducer callback function
    // const reduceAndAdd = (pre, curr) => pre + curr;
    // //reduce function ==> callback function name and an optional startvalue
    // let reduced = arr.reduce(reduceAndAdd,5);
    // //logs: 20
    // console.log(reduced)
