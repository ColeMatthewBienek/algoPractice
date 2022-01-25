//practice ground for recursion

//use recursion to place a '-' between letters and spaces in a string

function placeDashes(string){
    //I need a 'stop' condition
    //if the string length is less than or equal to 1
    //i.e. once recursion has reduced the string to 1...stop!
    if (string.length <= 1){
        return string;
    //the recursive part: concatenate each string index with a '-'
    //each time the stop condition is unfulfilled, run the following:
    //
    }else {
        return string[0] + '-' + placeDashes(string.substring(1));//i.e. first time thru
                                                                  //string[0] === 'H', add '-' add the result of
                                                                  // placeDashes(string.substring(1)) === 'e'
                                                                  //what is it that makes the next recursive loop
                                                                  //return 'l'
                                                                  //it looks to me like string[0] will always be 'H'
                                                                  //and string.substring(1) will always be 'e'
                                                                  // arrrgh.
                                                                  //wait...
                                                                  //I passed string.substring(1) as the parameter, 
                                                                  //so when it reaches line 15
                                                                  //string[0] is now 'e' ? 
                                                                  //because substring with only one parameter passed
                                                                  //returns from the passed index position to the end of the string
                                                                  //so, the second pass is now
                                                                  //string[0]=== 'e' + '-' + the result of placeDashes('llo World!')
                                                                  //hmmm this is beginning to make sense lol
                                                                  
                                                                }
}
console.log(placeDashes('Hello World!'));

    