// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). 
// The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) 
// when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].
// Note: Your function should not use any kind of for or while loops or the forEach() function.



function squareList (arr){
   console.log (arr)
   var squareStuff = arr
        .filter(num => Number.isInteger(num) && num > 0 )
        .map (function(num){
           return Math.pow(num,2)
        })
     
    return squareStuff
    }




  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);