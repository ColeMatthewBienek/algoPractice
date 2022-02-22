// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements
//  and the values are the frequency in which those elements occur.

function freqDistro (arrayDistro) {
    let result = {};

    for (i = 0; i < arrayDistro.length; i ++){
        if (!result[arrayDistro[i]]) {
            result[arrayDistro[i]] = 1;
        } else {
            result[arrayDistro[i]] ++;
        }
    }

    return result;

}

console.log(freqDistro([true, false, true, false, false]));


