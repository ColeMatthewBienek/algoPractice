// Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, 
// based on the provided cardData, return the appropriate network string (or undefined if there's no match).


var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];

function detectNetwork(cardNumber, cardData) {
  for (i = 0; i < cardData.length; i++){
      let specificCardNum = cardData[i].prefixes;
      let cardNetwork = cardData[i]['issuer/network'];
      let cardNumPrefix = cardNumber.slice(0,2);

      if (specificCardNum.includes(cardNumPrefix)){
        return cardNetwork;
      } 
  }      
}





// example
console.log(detectNetwork('783456789012345', cardData));

