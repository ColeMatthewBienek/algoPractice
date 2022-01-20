// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:
//                -->  "no one likes this"
//                ["Peter"]                         -->  "Peter likes this"
//                ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//                ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//                ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes (names){
    //if there are no names, return: 'no one likes this'
    let oneLike = `${names[0]}`;
    let twoLikes = `${names[0]} and ${names[1]}`;
    let threeLikes = `${names[0]}, ${names[1]} and ${names[2]}`;
    let manyLikes = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    let listOfNames = '';
    if (names.length < 1){
        return `no one likes this`;
    } else if (names.length === 1){
        return `${oneLike} likes this`;
    } else if (names.length === 2){
        return `${twoLikes} like this`;
        }else if (names.length ===3){
            return `${threeLikes} like this`
        } else {
            return manyLikes;
        }
}

console.log(likes(["Alex", "Jacob", "Mark","Alex", "Jacob", "Mark", "Max"]));
