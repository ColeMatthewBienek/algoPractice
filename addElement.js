var input = [1, 2];

function addToFrontOfNew(arr, element) {
    let newArr = arr.slice();
    newArr.push(element)


    return newArr;
}


console.log(addToFrontOfNew(input,3));
