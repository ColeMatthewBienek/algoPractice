// 1)
//Examine the following variables.
// var obj = {key: true, lock: false};
// var key = 'lock';

// //BEFORE using console.log to test them, write down what you think are the values of access1, access2, and access3.
// var access1 = obj[key];//Your answer: __false * correct
// var access2 = obj['key'];//Your answer: __false *wrong ==> 'key' points to the obj key (key) because it is a literal
// var access3 = obj.key;//Your answer: __true  *correct

// console.log(access1, access2, access3 )
//llength -1 === 4
//0, 1, 2, 3,

// /2a)
// var array1 = [0, 1, 2, 3, 4]
// for (var k = 0; k < array1.length; k++) {
// }
//After executing, what is the current value of k?
// k === 5
// console.log(k);
//Why? ==> there are 5 array elements. the length is 5, indices begin at zero, length counting starts at one

//2b)
// for (var i = 0; i < array1.length; i++) {
//     if (i !== array1.length - 1) {
//       continue;
//     } else {
//       break;
//     }
//   }
//After executing, what is the current value of i?
// i === 4;
// console.log(i);
//Why? array1.length - 1 === 4, if i doesn't equal 4, iterate; if it does equal 4, break (end iteration) 

//-----------------------------------------
//3)
//Examine the following functions.
function loop(str) {
    var result = '';
    for (var i = 0; i < 3; i++) {
      result += i;
    }
    return result;
  }
  //0, 1, 2 ==> i = 3; ; 'str' is not relevant
  
  function nestedLoop(str) {
    var result = '';
    
    for (var i = 0; i < 3; i++) {
        //1st: i = 0; 
        //result = result + i
        //i = 3;
        result += i;
      
      for(var j = 0; j < str.length; j++) {
        //1st: j =0; 2: j = 1; j = 2; 
        //every time 'j' loops, add 3 to result
        //result = result + j
        //j = 9

        result += str[j];
      }
    }
    //result = 12
    return result;
  }
  var loopOutput1 = loop('abc'); // ==> 3
  var loopOutput2 = nestedLoop('abc');
//   console.log('1',loopOutput1);
//   console.log('2',loopOutput2);
  //BEFORE using console.log to test them, write down what you think are the values of loopOutput1 and loopOutput2.
  //Did they match your expectations?
    //no...i missed them both. 'result' in #1 is defined as a string, and += concats the results of the loop
    //in #2 same thing, result set as a string, concat the loops
        //take away, look at what is given...note the types of return values and all variables.
  //Why or why not?

  var loopyloop = ''; // string
  j = 4;
  //i +=0 increments i by 0 each run, meaning that i will remain at 1
  //the first run ( i < j) is true, so the loop executes
  for (var i = 1; i < j; i += 0){
    loopyloop += 'hello 3';
    //decrement j by one
    //(i,1)<(j,4); (i,1)<(j,3),(i,1)<(j,2),(i,1)<(j,1)*false no more looping ... technically at  (i = 1, j =1, i is no longer less than j)
    //3 concats
        //'hello 3' * 3
    j--; //j =1
  };

  //After executing, what will be the values of variables loopyloop, i, and j?
//   console.log(loopyloop); //'hello3hello3hello3hello3'
//   console.log(i, j); //i=1; j=1;

var string1 = 'word';
var string2 = ''

var loopy = '';
//loop as long as string2 doesn't equal 'word'
for (var x = 0; string2 !== 'word'; x++) {
                                //x=0,1,2,3
  loopy += string1[x]; //w,o,r,d
  string2 += string1[x];//w,o,r,d
}

//After executing, what is the value of loopy?
// console.log(loopy); //word

// 4)

//The following function will be given a string and an array of numbers.

var foo = function(string, numsArr) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        //tricky...i needed to firmly grasp what [numsArr[i]] was pointing to...
        //I made too many assumptions
        arr[numsArr[i]] = string[i];
        console.log(arr[numsArr[i]], string[i])
        console.log(arr)
    }
    return arr.join('');
  };
  //What value type is being returned?
    //string
  //What are the values of fooOutput1 and fooOutput2?
  var fooOutput1 = foo('ckah', [2,3,1,0]); //'ckah'
  var fooOutput2 = foo('avelazing', [1,3,9,2,5,8,7,6,0]);//'avelazing'

  console.log('1',fooOutput1);
  console.log('2',fooOutput2);

//------------------------------------------
// 5)
//The following function is given an array of numbers.

var bar = function(nums) {//nums is an array
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
      var count = 0; //reset the count
      for (var j = 0; j < nums.length; j++) {
          //will run the first time with (i === 0, j ===0), nums[0] === 8, nums[i] and nums[j] both === 8, so count does not increment
        if (nums[j] < nums[i]) {
          count++
        }
      }
      //[]
      arr.push(count); //this is run after each iteration of (i)
    }
  return arr; //an array is returned
};
//==> i got this one correct by graphing the loops on my notepad...took awhile lol
//What is the value of barOutput?
var barOutput = bar([8,1,2,2,3]); //[4,0,1,1,3]
// console.log(barOutput)

// 6)

var animalSanctuary = ['apple', 'banana', 'calamari'];
var dinnerPlate = {a: 'aardvark', b: 'bat', c: 'cat'};

var foobar = function(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = obj[arr[i][0]];
  }
  return arr;
}
//arr = ['aardvark', 'bat', 'cat']
//BEFORE using console.log to test, can you predict the value of animalOutput?
//What value type will it be?
var animalOutput = foobar(animalSanctuary, dinnerPlate);
// console.log(animalOutput);

//==> i graphed this one too and got it right