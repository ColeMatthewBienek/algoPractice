// /[;:][~-]?[)D]/gm

function countSmileys(arr){
    var reg = /[;:][~-]?[)D]/gm
    var matched=[]
    for (i=0; i < arr.length; i++){
        if (arr[i].match(reg)){
            matched.push(arr[i]);

        }
    }
    console.log('the count is: ', matched.length)
    return matched.length

}

countSmileys([':)',';~D','(*&',':*)',':-)'])

