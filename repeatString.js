function repeatString(string, num) {
    let result =""
    for ( i = 1; i  < num +1 ; i++){
        result = result + string
        
    }
    return result
   }

   console.log(repeatString('hello', 5))