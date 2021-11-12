function destroyer (arr){
var argArr = Array.from(arguments[0]);
var killerArr = []
    for (pushy = 1; pushy < arguments.length; pushy ++){
             killerArr.push(arguments[pushy])
    }
    var getThemOut = argArr.filter(ele => 
      !killerArr.includes(ele))
    

return getThemOut
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));