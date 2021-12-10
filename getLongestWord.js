function getLengthOfLongestElement(arr) {
    //set a winning value of 0
   let winningValue = 0;
   //look at each element in the array and checkif it is longer than start value
   for (i = 0; i < arr.length; i++){
       if (arr[i].length > winningValue){
           winningValue = arr[i].length;
       }
   }
   //return winning value
   return winningValue;
   }

   console.log(getLengthOfLongestElement(['one', 'three', ]))

   function squareElements(arr) {
    //create a new container for the new array
    let squaredElements = arr.slice();
    //loop through the array and square each element
    for (let i = 0; i < squaredElements.length; i++) {
        squaredElements[i] = Math.pow(squaredElements[i], 2)
       }
       return squaredElements;
    }