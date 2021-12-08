var obj1 = {
    a: 1,
    b: 2
  };
  var obj2 = {
    b: 4,
    c: 3
  };
  
 function extend(obj1, obj2){
     for (obj2key in obj2) {
        if(!obj1[obj2key]){
            obj1[obj2key]=obj2[obj2key];
        }
     }
     return obj1;
 }

 console.log(extend(obj1, obj2))