//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); //$1 refers to the first bracketed block
    //$2 refers to the second bracketed block. does not reduce to lowercase
    //the "$1 $2"puts a space in between words if there isn't one

    // reegex for whitepace, underscores
    var regex = /\s+|_+/g;
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();

}








var testCase_a = "This- is ! a big hassle!!!!"
var testCase_b = "BRING ON **THE NOISE"
var testCase_c = "I love Maia Ling with all my heart!"
var testCase_d = "ThisIsSpinalTap"
var testCase_e = "the_way_to_a_woman's_heart_is_by_listening"

console.log(spinalCase(testCase_a))
console.log(spinalCase(testCase_b))
console.log(spinalCase(testCase_c))
console.log(spinalCase(testCase_d))
console.log(spinalCase(testCase_e))
