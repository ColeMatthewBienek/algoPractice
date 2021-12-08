
var obj = {
    a: 2,
    b: 'remaining',
    c: 4
  };

console.log (typeof obj.a);
function removeNumberValues(obj) {
    for (let key in obj) {
        console.log(typeof obj[key]);
        if (typeof obj[key]  === 'number'){ //***have to put typeof comparator in '' type of returns a string lol */
            console.log('should delete this');
            delete obj[key];
        }
    } 
    return obj;
}

   console.log(removeNumberValues(obj));