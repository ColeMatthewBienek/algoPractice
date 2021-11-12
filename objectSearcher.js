//We receive stuff and a list of things
//search the stuff for the things
//send back only the stuff that contains the things


function findTheThings(stuff, things) {
    //unpack container (array) -> collection of boxes (objects)
    //Object.keys (will give an array of keys); Object.entries (gives an array of arrays containing [key,value,...]);
    //for-in loop (each iteration the iterator variable will be a key) 
    var returnBox = []
    //1)for loop; 2) for each; 3) map; 4) for of
    for (var box of stuff) {
        //Unpack each box in collection
        //we need the key(s) from things in order to unpack the box

        //check in each box to see if it contains the stuff we are searching for



    }
    //place boxes that contain stuff we are lookin for into a new box




    //after all boxes have been processed, send the new box back
    return returnBox
}


var testStuff = [
    { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }
]

var testThings = { last: "Capulet" }

console.log(findTheThings(testStuff, testThings));