
 function arrs (arr){
     let argAr = Array.from(arguments[0])
     argAr.splice(0,1)
     console.log(argAr)
 }

 arrs([1,2,3,4], 1, 2)