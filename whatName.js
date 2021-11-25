// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching 
// name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from 
// the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
// { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the 
// array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    
    console.log(Object.keys(source).length)
    //an aray of objects has a length
    console.log(collection.length)
    var sourceKey = Object.keys(source)
    console.log(sourceKey)
    //Object.keys has a length
    console.log(sourceKey.length)
    console.log(collection[2])
    console.log(collection[2].hasOwnProperty('last'))
    //an array of objects is indexed as a normal array
    //and the elements are accessed with typical index notation
    //object(name[indexNum][keyName[propertyValue]])
    console.log(collection[2][sourceKey[0]])
    console.log(source[sourceKey[0]])
    console.log(collection[0][sourceKey[0]])

  }

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });