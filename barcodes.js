/*In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].
Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.
Example 1:
Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
*/

//store data in an object==>element and frequency the element occurs
    //create results array
        //look at the object
        
        //determine which element occurs the most
            //if the element is NOT the last element stored in in the results array
            //store element
            //otherwise
                //find the next highest ocurring element
                //store element

    //return results array


let boxOfBarcodes = {};

let reduceBarcode = (barcodes, currentBarcode) => Object.keys(barcodes).reduce((pre,cur)=>{
    return cur === currentBarcode || barcodes[pre] >= barcodes[cur] ? pre : cur;
}, '')

let selectProperBarcode = (barcodeBox, currentBarcode) => {
    //loop thru object and select proper barcode==>highest occuring frequency, 
    //and is NOT the last barcode pushed into the final array
    let highFrequency = 0;
    let result = '';
    for (barcode in barcodeBox){
        let code = barcodeBox[barcode];
        if (code > highFrequency && barcode !== currentBarcode){
            highFrequency = code;
            result = barcode;
        }
    }
    return result;
}

//extract array into an object
let rearrangeBarcodes = (barcodes) => {
    
    //load the obj
    barcodes.forEach((digit) => {
        if (!boxOfBarcodes[digit]){
            boxOfBarcodes[digit] = 1
        } else {
            boxOfBarcodes[digit]++
        }
    })
    
    let barcodeLength = barcodes.length;
    let finalBarcode = [];
    let previousBarcode = 0;

    let fillFinalBarcode = (currentBarcode, currentCount) => {
        finalBarcode.push(currentBarcode);
        currentCount--;
        previousBarcode = currentBarcode;
        boxOfBarcodes[currentBarcode] = currentCount;
    }

    for(i = 0; i < barcodeLength; i++){

        let lastBarcode = (finalBarcode.length > 0) ? finalBarcode[finalBarcode.length - 1] : undefined;
        // let currentBarcode = selectProperBarcode(boxOfBarcodes, lastBarcode);
        let currentBarcode = reduceBarcode(boxOfBarcodes, lastBarcode);
        let currentCount = boxOfBarcodes[currentBarcode];
        
        if (currentBarcode !== previousBarcode && currentCount > 0){
            fillFinalBarcode(currentBarcode, currentCount);
        }
    }
    return finalBarcode;
}


let codes = [1,1,1,1,2,2,0,0]// 1,2,1,2,1,2,3,1,2,3 or similar
console.log(rearrangeBarcodes(codes))


