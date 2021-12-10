function getElementsLessThan100AtProperty(obj, key) {
    
    let result =[];
    if (!Array.isArray(obj[key])){
        
        return [];
    } else {
        
        if (obj[key].length < 1){
            
            return [];
        } else {
            if (!Object.values(obj)){
                return [];
            } else {
                for (i = 0; i < obj[key].length; i++){
                    if (obj[key][i] < 100){
                        result.push(obj[key][i]);
                    }
                }
            }
        }
    }
    
   
    return result;
  }

  var obj = {
    
  };
  console.log(getElementsLessThan100AtProperty(obj, 'key'));



  
