function findSmallestNumberAmongMixedElements(arr) {
    //check if array is empty, if so  -- return 0
    if (arr.length === 0){
        return 0;
    }
    //examine the array and look for all the numbers
    //if there are no numbers, return 0
       let arrOfNumbers = [];
    //otherwise, add the numbers to a new container  
       for (i = 0; i < arr.length; i++){
           if (typeof arr[i] === 'number') {
               arrOfNumbers.push(arr[i]);
           }
       }
    //if there are no numbers, return 0
       if (arrOfNumbers.length === 0){
               return 0;
       } else if (arrOfNumbers.length === 1){
           return arrOfNumbers[0];
       }
    //assign the first number in the array as the smallest value
       let smallest = arrOfNumbers[0]
    //examine the other numbers and replace smallest with a smaller number
       for (j = 1; j < arrOfNumbers.length; j++){
           if (arrOfNumbers[j] < smallest){
               smallest = arrOfNumbers[j];
           }
           
        }
        return smallest;   
    } 
   

console.log(findSmallestNumberAmongMixedElements([5, "two", "seven", 3]))