function assignObj (array){
var key = array.slice(array[0],1);
var val = array
    .slice(-1)
    .toString();
console.log(key,val)
var myObj ={}
myObj[key]=val
return myObj
}

console.log(assignObj(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));