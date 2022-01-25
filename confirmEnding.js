function confirmEnding(str, target) {
    //get the string length of the target
    let targetLength = target.length;
    console.log(targetLength)
    //look at the target number of characters at the end of the string
    let strChars = str.slice(str.length-targetLength);
    console.log(strChars)
    //compare the target and str, return the result
    return (strChars === target);
    return str;
  }
  
 
  console.log(confirmEnding("Bastian", "ani"));