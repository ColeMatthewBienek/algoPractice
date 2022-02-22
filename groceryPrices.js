// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
// A grocery object has a product, a quantity and a price, for example:

/*[
    {
    "product": "Milk",
    "quantity": 1,
    "price": 1.50
  }
]
  */

let items = [
    { product: "Milk", quantity: 10, price: .50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ];

function groceryListCalc (groceries) {
    let grandTotal = 0;

    //look in the grocery list for the quatities and prices
    for (i = 0; i < groceries.length; i ++){
        //tally the line amount and add the result to a running sum
        let lineQuantity = groceries[i].quantity;
        let linePrice = groceries[i].price;
        grandTotal += lineQuantity * linePrice;
    }
    //return the total price
    return grandTotal.toFixed(1);

}

console.log(groceryListCalc(items));
