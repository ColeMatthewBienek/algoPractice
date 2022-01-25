/*The first function you will write will be called generateSampleView. 
The input for this function will always be an array of objects, theoretically the result of a call to an API, or database. 
generateSampleView will take this array as its parameter, and return an array of strings based upon conditions that we will describe in a moment. 
The format of this input array of objects is described below:
*/
var users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];
/*
Your function should examine each user object, and add to the array return value for this function one of the following:

    If the value of the id property is odd, add the user's email to the return array
    If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array
*/
// let user = users[0]['address'];
// console.log(user['zipcode'])




function generateSampleView (userData) {
    let result = [];
    let createString = (street, suite, city, zip) => `${street}, ${suite}, ${city}, ${zip}`;
  //iterate through array of objects
    userData.forEach((user) => {
        //if the id value is odd
        if (user['id'] % 2 !== 0){
    //add the user's email to the result array
            result.push(user['email']);
        } else if (user['id'] %2 === 0){
            let userLoc = user['address'];
            result.push(createString(userLoc['street'], userLoc['suite'], userLoc['city'], userLoc['zipcode']))
        }
    })
    console.log(result)
    return result;
}

// let actual = generateSampleView(users);
// let expected = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
// let testName = `Arrays should be of equal length, and contain the correct data`;

function assertArraysEqual (actual, expected, testName) {
    //check array Length
    let checkLength = (actual.length === expected.length);
     //validate data
    let checkData = true;
     for (i = 0; i < expected.length; i++) {
         if (actual[i] !== expected[i]){
             checkData = false;
             break;
         }
     }
     
     if (checkLength && checkData) {
         console.log(`passed`);
     } else {
         console.log(`failed, ${testName}`);
     }
}
//
assertArraysEqual(actual, expected, testName);