function fearNotLetter (str){
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let firstLetter = str.slice(0,1);
     let matchIndex = alpha
        .match(firstLetter).index;
    let matchSlice = alpha
        .slice(matchIndex, matchIndex + str.length)
        .split('');
    let strArr = str.split('')
    let filtered = matchSlice.filter (letter => {
            for (let i = 0; i < strArr.length; i++){
                return (!strArr.includes(letter)) ? letter : undefined
             }
        })     
        return (filtered.join()==='') ? undefined : filtered.join()
            
}

console.log(fearNotLetter('stvwx'))