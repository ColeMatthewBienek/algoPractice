function joinArrayOfArrays(arr) {
    return arr.reduce((prev, curr) => prev.concat(curr));
    
}
console.log(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]));
