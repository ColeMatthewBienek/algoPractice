function destroyer(arr){
    let argArr = Array.from(arguments[0])
    let killerArr= []
        for (i=1; i < arguments.length; i++){
            killerArr.push(arguments[i])
    }
    console.log(killerArr)

    let result = argArr.map(function(ele){
        for (i=0; i < killerArr.length; i++){
           console.log('ele: ', ele, 'vs', 'kill: ', killerArr[i])
            if (killerArr[1] !==ele ){
                return ele
            };
               
            }
        })
        return result
}
    
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));