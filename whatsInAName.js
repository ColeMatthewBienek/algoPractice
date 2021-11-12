//search a collection for things that match some stuff
function whatIsInAName(collection, source) {
    //new container for storing matches
    var container = [];
    //unpack the collection so the things inside can be examined
    for (var obj of collection) {
        //check each thing to see if it matches stuff
        console.log(obj);
        if (checkMatch(obj, source)) {
            container.push(obj);
        }
    }
    return container;
}

function checkMatch(obj, source) {
    //unpack the stuff so it can be compared to the things
    var comparator = Object.keys(source);
    var foundMatch = true; //use a variable to store the boolean test--RETURN WILL STOP THE LOOP
    //use  !== comparison to check if a match doesn't exist. If the comparator key doesn't match the obj key, do nothing--if it does, change the val of  foundMatch to true and return to the main function
    comparator.forEach(key => {
        console.log('key:', obj[key])
        console.log(obj[key], '!==', source[key])//remember to use the extracted array value as the key to access the original object the keys were extrated from
        if (obj[key] !== source[key]) {

            foundMatch = false;
        }
    })
    return foundMatch
}

console.log('this: ', whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))