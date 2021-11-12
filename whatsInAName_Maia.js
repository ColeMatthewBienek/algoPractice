function boxContainsThings(box, things) {
  var thingsWeAreLookingFor = Object.keys(things) // array of keys in things
  var foundAllTheThings = true;// sets the default state to true--meaning that we are checking to see if somethingh is NOT there
  thingsWeAreLookingFor.forEach(thing => {
    if (box[thing] !== things[thing]) { // YES - ALWAYS FALSE
      console.log('comp', box[thing], things[thing])

      foundAllTheThings = false
      // removed return because IT DOESN'T STOP THE MAIN FUNCTION
    }
  })

  return foundAllTheThings; // NO - ALWAYS THIS
}

// We receive stuff and a list of things and we are to search the stuff for the
// things and send back only the stuff that contains the things
function findTheThings(stuff, things) {
  // Get the keys from the things
  // Object.keys() (will give an array of keys), Object.entries() (gives an array of arrays [[key, value], ...],
  // for-in loop ( each iteration the iterator variable will be a key))
  var returnBox = []
  //Unpack container (Array) -> collection of boxes (objects)
  // 1) for loop, 2) forEach method, 3) Map, 4) for-of
  for (var box of stuff) {
    //     console.log(box)
    // Unpack each box in collection
    // we need the key(s) from things
    if (boxContainsThings(box, things)) { //calls boxContainsThings for each box of stuff
      returnBox.push(box)
    }
  }
  // after all boxes have been processed send the new box back
  return returnBox
}

var testStuff = [
  { first: "Romeo", last: "Montague" },
  { first: "Murcutio", last: null },
  { first: "Tybalt", last: "Capulet", title: "Mr" },
  { last: "Capulet" }
]

var testThings = { last: "Capulet", title: "Mr" }

console.log(findTheThings(testStuff, testThings))