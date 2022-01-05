function splitEm (str){
    return str.split('')
}

let actual = splitEm('bro');
let expected = ['b', 'r', 'b']
let testName = 'Splits string into an array of characters';





function assertArraysEqual(actual, expected, testName) {
    let arraysMatch = true;
    for (i = 0; i < expected.length; i++){
       
            console.log(expected[i], actual [i])
            if (expected[i] !== actual[i]){
                
                arraysMatch = false
                break
            }
        
    }
    console.log('am',arraysMatch)
    let arrayLengthMatches = (actual.length === expected.length) ? true : false;
    
    if (arraysMatch === true && arrayLengthMatches === true){
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
    }
    
   }

   assertArraysEqual(actual, expected, testName)

