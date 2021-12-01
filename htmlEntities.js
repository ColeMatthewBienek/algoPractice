
const punctLookup = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&apos;'
}

function replacement (match){
    return punctLookup[match];
}



function convertHTML (str) {
let newStr;
    let regx = new RegExp(/([&<>\"'])/, 'g')
    //replace looks in the string for anything that matches regx
    //and then runs the replacement function on any found match,
    //using the match as the key to access the value in the punctLookup object
    
    newStr = str.replace(regx, replacement);
    return newStr;    

//********This didn't work, it failed on cases where **********************
//********no regEx matches were found--it returned undefined****************  
//
//     for (i = 0; i < str.length; i++){
//         for (prop of arrKeys)
//             if (str[i].includes(prop)){
//                     newStr = str.replace(regx,punctLookup[prop]);
            
//             }     
//         }
//     }
//return newStr;
//}
//************************************************************************* */



}

console.log(convertHTML("Dolce & Gabbana &"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("><"));
console.log(convertHTML("abc"));
