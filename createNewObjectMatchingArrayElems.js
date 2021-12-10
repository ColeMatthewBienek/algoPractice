// function select(arr, obj) {
//     //Create a new container for the results
//     let newObj = {};
//     //look at each of the values in the array
//     arr.forEach(element => {
//         //if the object has a property that matches the array
//         if (obj[element]) {
//             //assign the key/val to the new container
//             newObj[element]=obj[element];
//         }
//     })
      
//       //return the new container
//       return newObj;
//   }

  function filterEvenLengthWords(words) {
   
   let evenLength = words.filter(word => word.length %2 === 0)
    return evenLength;
  }

  console.log(filterEvenLengthWords(['it', 'is', 'donel']));