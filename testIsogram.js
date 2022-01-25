// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    // add each char to a set
    if (text === ''){
        return true;
    }
   let newText =  text.toLowerCase();
    let isoTestSet = new Set (newText);
    // check length of text and the size of the set
    let textLength = newText.length;
    let setSize= isoTestSet.size;
    if (textLength !== setSize){
        return false;
    }else{
        return true;
    }
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let expectedTrue = 'jaret'
  let isoTrue = isIsogram(expectedTrue)
  let expectedFalse = 'boobie';
  let isoFalse = isIsogram(expectedFalse);
  let testName = 'test whether a given string is an isogram'

  function testIsIsogram(isoTest, testName){
      if (isoTest){
          console.log(`passed, ${testName} returned true`)
      } else{
          console.log(`Failed, ${testName}. Expected to return true`)
      }
  }

  function testIsIsogramFalse(isoTest, testName){
    if (!isoTest){
        console.log(`passed, ${testName} returned false`)
    } else{
        console.log(`Failed, ${testName}. Expected to return false`)
    }
}

//TESTS CASES
  testIsIsogram(isoTrue, testName);
  testIsIsogramFalse(isoFalse, testName);