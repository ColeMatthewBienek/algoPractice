let currentInventory = [
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

  //write a function that lists designer, shoe, price as a flat list
    //flat list: a string outful using \n newline symbols

function getShoeListByDesigner(shoeFlatList, currDesigner) {
    const designer = currDesigner.name;
    return shoeFlatList + currDesigner.shoes.reduce((shoeString, currentShoe) =>{ 
        return shoeString + `${designer}, ${currentShoe.name}, ${currentShoe.price}` + '\n'
    }, "");
}

const fancyRenderInventory = inventoryList => inventoryList.reduce(getShoeListByDesigner, "");

function renderInventory(inventoryList) {
  let listOfShoes = '';
  //iterate over designerName
  for (i = 0; i < inventoryList.length; i++){
      let designerName = inventoryList[i].name;
    //iterate over shoe name and price
    for (j = 0; j < inventoryList[i].shoes.length; j++){
        let shoeName = inventoryList[i].shoes[j].name;
        let shoePrice = inventoryList[i].shoes[j].price;
      //combine designer name, shoe name, and price
      let shoeDetails = `${designerName}, ${shoeName}, ${shoePrice}`
     //add to the string, include a \n 
     listOfShoes += shoeDetails + '\n';
    }
  }
  return listOfShoes;
}
// let brunoFirstShoe = currentInventory[0].shoes[0].name + currentInventory[0].shoes[0].price
// console.log(brunoFirstShoe)

console.log(renderInventory(currentInventory))
console.log(fancyRenderInventory(currentInventory))
