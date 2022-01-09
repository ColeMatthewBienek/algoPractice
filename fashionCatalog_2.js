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

  //write a function that will return thge average cost of shoes per designer
  //expected output is an object:
    /*returnObject = {
        'designers': [
            {
                'name' : designerName,
                'averagePrice' : avgPrice
            },
            {
                etc...
            }
        ]

    }
    */

function calculateAveragePricePerDesigner(inventory){
 let calculatedAveragePrice = {
     'designers' : [
     ]
 };

   //iterate over the inventory object, remember the designer name
   for (i = 0; i < inventory.length; i++){
       let shoePrices = [];
       let designerName = inventory[i].name;
     //iterate over the shoe prices
     for (j = 0; j < inventory[i].shoes.length; j++ ){
         //create an array of shoe prices
         shoePrices.push(inventory[i].shoes[j].price)
     }
      //get the average price
      let averagePrice = getAveragePrice(shoePrices);
      //add the designer name and average price to the output object
      calculatedAveragePrice.designers.push({
          'name' : designerName,
          'averagePrice' : averagePrice
      })
   }
return calculatedAveragePrice;
}

function getAveragePrice(prices){
    let sumOfPrices =  prices.reduce((previous, current) => previous + current);
    let numOfItems = prices.length;
    return Math.floor(sumOfPrices /numOfItems);
}

console.log(calculateAveragePricePerDesigner(currentInventory));