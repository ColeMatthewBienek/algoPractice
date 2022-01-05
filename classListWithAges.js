let classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function decorateClassListWithAges(classList) {
    //declare an array to hold classList objects
    let classListDecorated = [];
    // creates an object for each string in the input array, with an age of 10 or 11
    classList.forEach(function(ele){
        classListDecorated.push({['name']: ele, ['age']:getRandomIntInclusive(10,11)})
    })
    // returns an array of these objects
    return classListDecorated
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let actualAges = decorateClassListWithAges(classList);
  let expectedAges = [
    { name: 'Joe', age: 11 },
    { name: 'Jack', age: 11 },
    { name: 'John', age: 11 },
    { name: 'Fred', age: 11 },
    { name: 'Frank', age: 10 },
    { name: 'Barry', age: 11 },
    { name: 'Larry', age: 11 },
    { name: 'Mary', age: 11 },
    { name: 'Harry', age: 11 },
    { name: 'Farrell', age: 10 },
    { name: 'Susan', age: 10 },
    { name: 'Monica', age: 10 },
    { name: 'Keira', age: 11 },
    { name: 'Caroline', age: 10 },
    { name: 'Harriet', age: 11 },
    { name: 'Erica', age: 10 },
    { name: 'Luann', age: 10 },
    { name: 'Cheryl', age: 11 },
    { name: 'Beth', age: 11 },
    { name: 'Rupa', age: 10 },
    { name: 'Linda', age: 11 },
    { name: 'Allison', age: 10 },
    { name: 'Nancy', age: 10 },
    { name: 'Dora', age: 11 }
  ]
  let testName = `should produce a class list of all students with ages either 10 or 11`
  //
  function assertArrayEqual(actualAges,expectedAges,testName){
      let agesMatch = true;
      let arraysEqualLength = true;

      for (i=0; i < actualAges.length; i++){
          if(!actualAges.age >=10 && !actualAges.age <=11){
              agesMatch = false
          }
          
      }
      if (actualAges.length !== expectedAges.length){
          arraysEqualLength = false
      }
      if (agesMatch === true && arraysEqualLength === true){
          console.log(`Passed, ${testName}`)
      } else {
          console.log(`Failed, ${testName}, expected ${expectedAges}, but received ${actualAges}`)
      }
      console.log(arraysEqualLength, agesMatch)
  }

  // TESTS CASES
  

//console.log(decorateClassListWithAges(classList));
assertArrayEqual(actualAges,expectedAges,testName);
