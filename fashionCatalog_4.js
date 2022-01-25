var currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];
  let shoeDetail = 'lace';
  function laceDetailFilter(shoe){
      return shoe.includes(shoeDetail);
  }

  function generateLaceDetails (inventory) {
      //create an array to store the results
      let result = [];
      let shoelaceObject = {};
      //iterate over the designers
      for (i = 0; i < inventory.length; i++) {
          let designer = inventory[i];
        //iterate over the shoe descriptions
        for (j = 0; j < designer.shoes.length; j++ ) {
          //if the shoe description contains the key word
          if (laceDetailFilter(designer.shoes[j].name)){
            //create an array of the namewords
            let typeArray = designer.shoes[j].name.split(' ');
            let targetIndex = 0;
            for (k = 0; k < typeArray.length; k++){
                if (laceDetailFilter(typeArray[k])){
                    targetIndex = k;
                    break;
                }
            }
            //create an object key: namewords and push the array of namewords as its property value
            //create a key: targetWordIndex and add the index value of the matched keyword as targetWordIndex's property value
            result.push({'namewords': typeArray}, {'targetwordindex': targetIndex});
          }
        }
      }
    //return the array
    return result;
  }

console.log(generateLaceDetails(currentInventory));


