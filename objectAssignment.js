// let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

// function transform (array){
//     let tran = {};
//     let key = array[0];
//     let arrPos = arr.length-1
//     let val = array[arrPos];

    
//     tran[key] = val;
//     console.log(tran);

// }
// transform(arr);
let input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function transformArrayToObject(array) {
    // your code here
    let result = {};
    array.forEach(function(pair){
        for (i = 1; i < pair.length; i++){
            result[pair[0]] = pair[i];
        }
    })
console.log(result);
    return result;
}
transformArrayToObject(input);


