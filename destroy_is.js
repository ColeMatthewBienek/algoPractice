function destroyer(arr){
let argArr = Array.from(arguments[0])
let killerArr= []
    for (i=1; i < arguments.length; i++){
        killerArr.push(arguments[i])
}
var result = [];
    for (j=0; j < killerArr.length; j++){
        for (k = 0; k < argArr.length; k++){
           console.log('arg: ', argArr[j], 'kill: ', killerArr[k])
            if (argArr[k] !== killerArr[j]){
                result.push(argArr[j])
            }
        }
    }
console.log('result: ',result)
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);