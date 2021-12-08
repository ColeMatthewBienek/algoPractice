let obj = {
    three: 'e',
    alamo: 'western',
    drunk: false,
    cole: 'Bienek'
}

function objectKeysToArray (obj) {
    let container = [];
        for (let key in obj) {
            container.push(key);
        }

    console.log(container);
    return container;

}

objectKeysToArray(obj);
