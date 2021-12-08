let input = "Another fine mess!"

function getIndexOf(str, char) {
    let result = -1
    for (i = 0; i < str.length; i++){
       console.log('loop', str[i], i)
       if (str[i] === char){
           result = 'char ' + i;
       }
    }        
 return result;
 
}

console.log(getIndexOf(input, 'z'));

