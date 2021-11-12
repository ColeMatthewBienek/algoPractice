// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str){
    //create a reference alphabet
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    //look at the first letter
    let firstLetter = str.slice(0,1)
    //cut out a chunk of the reference alphabet the length of 'str'
    //begin at the place in reference alphabet that matches the first letter of 'str'
    let matchIndex = alpha.match(firstLetter).index;
    let matchSlice = alpha.slice(matchIndex, str.length);
        //loop through the chunk of reference alphabet
        //and look for a missing letter
        let result = undefined
        for (let i = 0; i < matchSlice.length; i++){
            if (!str.includes(matchSlice[i])){
                result = matchSlice[i];
                //if there are no missing letters, return undefined
            };
        }

        return result
    }
console.log(fearNotLetter('stvwx'));
