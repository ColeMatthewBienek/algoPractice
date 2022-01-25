// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
    this.numbers = numbers;
  }
  
  PhoneNumberFormatter.prototype.render = function() {
    var string = ``;
    // your code here
    let areaCode = this.getAreaCode();
    let exchangeCode = this.getExchangeCode()
    let lineNumber = this.getLineNumber()
    
    string = `(${areaCode}) ${exchangeCode}-${lineNumber}`
    
    return string;
  };
  
  PhoneNumberFormatter.prototype.getAreaCode = function() {
    // your code here
    return this.slice(0,3);
  };
  
  PhoneNumberFormatter.prototype.getExchangeCode = function() {
    // your code here
    return this.slice(3,6);
  };
  
  PhoneNumberFormatter.prototype.getLineNumber = function() {
    // your code here
    return this.slice(6,10);
  };
  
  PhoneNumberFormatter.prototype.parenthesize = function(string) {
    return '(' + string + ')';
  };
  
  PhoneNumberFormatter.prototype.slice = function(start, end) {
    return this.numbers.slice(start, end).join('');
  };
  let number = [4,1,5,8,6,7,5,3,0,9]
  let formatter = new PhoneNumberFormatter(number);
 let formattedNumber = formatter.render();
 console




  // ASSERTION FUNCTION(S) TO BE USED
  let actual = formattedNumber;
  let expected = '(415) 867-5309';
  let testName = `Should render a phone number according to traditional formatting`
  function assertEqual (expected,actual,testName){
      if (expected === actual){
          console.log(`Passed! ${testName}`);
      } else {
          console.log(`Failed! ${testName}, expected ${expected}, but got ${actual}`)
      }

  }
  // TESTS CASES
  assertEqual(expected,actual,testName);