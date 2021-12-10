function countAllCharacters(str) {
    //if the string is empty, return an empty obj
    if (str.length===0){
        return {};
    }
    //convert str to a usable array
    let strArray = str.split('');
    //create a container to store the letter counts
    let countObj = {};
    //loop through the collection of letters
    strArray.forEach( letter => {
         //if the letter exists in the object, add 1 to the val
        if (countObj[letter]){
            countObj[letter]++;
        //otherwise, create a key using the letter and set the val to 1
        } else {
            countObj[letter] = 1;
        }
    })
              
      //return countObj
      
      return countObj
  }

