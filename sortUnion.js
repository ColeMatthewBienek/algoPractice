/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.*/


function uniteUnique(arr) {
let theseArgs = Array.from(arguments);
let unique = new Set(theseArgs[0]);
theseArgs.forEach(element => {
        for (i=0; i < element.length; i++){
            unique.add(element[i])
        }
    })

return Array.from(unique);

}



console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
