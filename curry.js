//add(a) is a 'helper' function that serves to collect multiple, separate arguents into one function call
//this could likely be used when a fixed argument is followed by more args...or can be used in partial functions
//which I don't get yet
function add(a) {
    return function(b){
            return function(c){
                return a+b+c;
            }
    }
  }

 console.log( add(10)(20)(null));

 function addCurried(x){
     return y => z => x + y + z;
 }

 console.log(addCurried(10)(15)(20));