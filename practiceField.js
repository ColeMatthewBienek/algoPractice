

// function solution(str, ending){
//     //measure the length of the ending string and compare to the end of str
//      let endingStringLength = ending.length * (-1);
//      let strEnd = str.substr(endingStringLength);
//      //if they match, return true
//      return (strEnd === ending);
//      //else return false
//    }

//    console.log(solution('hello', 'olo'));


//Remove all values from list a, which are present in list b keeping their order.
//arrayDiff([1,2,2,2,3],[2]) == [1,3]
// let array_a =[1,2,2];
// let array_b =[2];

// // function removeFromArray(array, removeValue){
// //     return array.filter((ele) => ele !== removeValue );
// // }

// function arrayDiff (array_a, array_b) {
//     //if the second array is empty, return array_a unchanged
//     if (array_b.length < 1){
//         return array_a;
//     }

//     //look in array_a and check if any elements from array_b are present
//         //iterate through bothe arrays--use array_b as the outer array
//         for (i = 0; i < array_b.length; i++ ){
//             for (j = 0; j < array_a.length; j++){
//                 //compare each of the inner array elements against the outer elements
//                 if (array_b[i] == array_a[j]){
//                     //splice out matches from array_a
//                     array_a.splice(j, 1);
//                     i--;
//                 }
//             }
//         }
//     //return array_a
//         return array_a;
// }

// function arrayDiff (a,b){
//     return a.filter((ele) => !b.includes(ele));
// }

// console.log(arrayDiff(array_a, array_b))

// function validatePIN(pin){
//     //length check
//     let isNotCorrectLength = (pin.length !== 4 || pin.length !== 6);
//     if (isNotCorrectLength){        
//         return false;
//   } 
  
//     let numPIN = Number(pin);
//     if (!Number(numPIN)){
//        return false;
//    }
   
//    //check for negative integers
//    if (numPIN< 1){
//        return false;
//    }

//    let isDecimal = (numPIN - Math.floor(numPIN) !== 0);
//    if (isDecimal){
//        return false;
//    }

//    return true;

// }
// /[0-9]{6}|[0-9]{4}/

// function validatePIN(pin){
//     return /^(\d{6}|\d{4})$/.test(pin);

// }
// console.log(validatePIN('12345'))

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];


// function transformEmployeeData(employeeData) {
//     //declare a new array to hold objects I will build
//     let employees = [];
    
//     //iterate through the outer array
//     for (let employee in employeeData){    
//     //declare an object to hold the values
//     let employeeDetails = {};
//       //select inner arrays
//       for (i = 0; i < employeeData[employee].length; i++){
//           //iterate through the inner arrays and assign 
//           //indices 0 and 1 to key/value pairs
//           let detailKey = employeeData[employee][i][0];
//           let detailValue = employeeData[employee][i][1];
//           employeeDetails[detailKey] = detailValue;
//           //push the complete object into the new array 
          
//       }    
//       employees.push(employeeDetails);
//     }
//     //return the new array 
//     return employees;
//   }

//   console.log(transformEmployeeData(input));

// function convertObjectToArray(obj) {
//     //declare an array to hold the converted object
//     let convertedArray = [];
//     //iterate through the object (for...in (?))
//     for (key in obj){
//       //declare a temporary array to hold values to push into the main array
//       let tempArray = [];
//       //pull out the objects key/val pairs
//       //add them to the temp array
//       tempArray.push(key, obj[key]);
//       //push the temp array into the main array
//       convertedArray.push(tempArray);
      
      
      
//     } 
//     //return the array    
//   }

var customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3,
    },
    'Carrie': {
      visits: 4
    }
  };
  
  function greetCustomer(firstName) {
    //declare responses
    let newCustGreet = `Welcome! Is this your first time?`;
    let oneVisitGreet = `Welcome back, ${firstName}! We're glad you liked us the first time!`
    let multiVisitGreet = `Welcome back, ${firstName}! So glad to see you again!`
    //look up customer firstName in the customerData object;
      //if the customer doesnt exist
      if (!customerData[firstName]){
          //respond
          return newCustGreet;
      } else if (customerData[firstName].visits > 1) { 
          return multiVisitGreet;
      } else {
          return oneVisitGreet;
      }
  } 
