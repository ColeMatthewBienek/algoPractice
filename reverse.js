function reverseString(str) {
    
    const arr = str.split('');
    const reversed=reverseIt(arr);
    return reversed.join('','');
  }

  function reverseIt(arr){
    const reversal =[];
    for (var i = arr.length-1; i >= 0; i--){
        reversal.push(arr[i]);
    }
    return reversal;
  }
  

  console.log('testing',reverseString("hello"));