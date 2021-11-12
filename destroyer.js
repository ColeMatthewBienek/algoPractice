//You will be provided with an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Note: You have to use the arguments object.

function destroyer(arr) {

    var argArr = Array.from(arguments[0]);
    for (i=0; i < argArr.length; i++){
        for (j=1; j < arguments.length; j++){
            console.log(argArr[i], ' vs ', arguments[j])
            
            if (argArr[i] === arguments[j]){
                console.log('Match!')
                argArr.splice(argArr[i],1);
                console.log('new arr: ', argArr)
            }else {
                
                console.log('No Match! ')
                
            }
        }
    }
   
    console.log(argArr)


}
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);