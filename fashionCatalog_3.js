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

  //find all the shoues with the word "black" in the name
  //return a flat list with designer name, shoe name, and shoe price
    //callback function attached to the listAllBlackShoes reduce function
    //filter shoes by color will receive a blanck string as the initial value, and the [0] element as the current value
    //the [0] element contains keys for designer *name and *shoes
  let shoeColor = 'black';
  function filterShoesByColor (shoeDescription){
      //check to see if the current shoe description contains the filter color
      return shoeDescription.includes(shoeColor);
  }
  function listShoesByColor (filteredShoeString, currentDesigner) {
    let designer = currentDesigner.name;
    return filteredShoeString + currentDesigner.shoes.reduce((filteredString, currentShoeDescription) => {
      
      if (filterShoesByColor(currentShoeDescription.name)){
         return filteredString + `${designer}, ${currentShoeDescription.name}, ${currentShoeDescription.price}` + '\n'
      } else {
          return filteredString;
      }
    }, "")
  }

let colorFilter = shoe => shoe.name.includes(shoeColor);

 function fancyListShoesByColor (filteredShoeString, currentDesigner) {
    let designer = currentDesigner.name;
    function stringReducer(filteredString, currentShoeDescription) {
        return filteredString + `${designer}, ${currentShoeDescription.name}, ${currentShoeDescription.price}` + '\n'
    }

   const stringReducer =  function(filteredString, currentShoeDescription) {
        return filteredString + `${designer}, ${currentShoeDescription.name}, ${currentShoeDescription.price}` + '\n'
    }

    const stringReducer = (filteredString, currentShoeDescription) => filteredString + `${designer}, ${currentShoeDescription.name}, ${currentShoeDescription.price}` + '\n'

    const stringReducer = (filteredString, currentShoeDescription) => {
        return filteredString + `${designer}, ${currentShoeDescription.name}, ${currentShoeDescription.price}` + '\n'
    }

    

    return filteredShoeString + currentDesigner.shoes
        .filter(colorFilter)
        .reduce(stringReducer, "")
 }

let listAllBlackShoes = inventoryList => inventoryList.reduce(ListShoesByColor, ''); //invokes reduce on a passed in array of objects
                                                                                                                                            //calls filterShoesByColor on each element, with a blank
                                                                                                                                            //string as the initial value

console.log(listAllBlackShoes(currentInventory));

