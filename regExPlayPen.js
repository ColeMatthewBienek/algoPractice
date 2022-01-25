// let input = 'abcd';


// function splitPairs(input) {
// let result = [];
//      if (input === ""){
//          return result;
//      }
//     for (i = 0; i < input.length; i++){
//         if (input.length %2 !== 0){
//             input += "_";
//             result.push(`${input[i]}${input[i+1]}`);
//             i++;
//         } else {
//         result.push(`${input[i]}${input[i+1]}`);
//         i++;
//         }
//     }
//     return result;
// }

//   console.log(splitPairs(input))


let input = "http://www.github.com/carbonfive/raygun";
let domain = (new URL(input));
let domainName = domain.hostname;
domainName = domainName.replace('www.','');

domainName = domainName.split('.');

domainName.pop();
// console.log(domainName.join())


// split off the http part
// split off the endpoints (everything after the / )
// split by period
// use the second to last element

class UrlProcessor {
    constructor(url) {
        this.url = url;
        this.processedUrl = "";
    }

    removeHttpPrefix() {
        this.processedUrl = this.url.split('//');
        this.processedUrl = this.processedUrl.pop();
        return this;
    }

    removeEndPoints() {
        this.processedUrl = this.processedUrl.split('/').shift();
        return this;
    }

    getDomainName() {
        this.processedUrl = this.processedUrl.split('.');
        return this.processedUrl[this.processedUrl.length - 2];
    }
}

function functionalUrlProcessor(url) {
     var classObj = {};
     classObj.processedUrl = "";
     classObj.url = url;

     classObj.removeHttpPrefix = function() {
        classObj.processedUrl = classObj.url.split('//');
        classObj.processedUrl = classObj.processedUrl.pop();
        return classObj;
    }

    classObj.removeEndPoints = function() {
        classObj.processedUrl = classObj.processedUrl.split('/').shift();
        return classObj;
    }

    classObj.getDomainName = function() {
        classObj.processedUrl = classObj.processedUrl.split('.');
        return classObj.processedUrl[classObj.processedUrl.length - 2];
    }

    return classObj;
}

const removeHttpPrefix = url => url.split('//')[1];

function getDomainNameFromUrl (url) {
    let noHttp = url.split('//');
    noHttp.shift();
    let noEndpoints = noHttp[0].split('/').shift();
    let address = noEndpoints.split('.');
    return address[address.length - 2];
}

function classyGetDomainName(url) {
    const urlProcessor = new UrlProcessor(url);
    return urlProcessor
                .removeHttpPrefix()
                .removeEndPoints()
                .getDomainName();
}

console.log(classyGetDomainName('https://www.xakep.ru'));
console.log(classyGetDomainName('https://www.google.com'));
console.log(classyGetDomainName('http://github.com/carbonfive/raygun'));
console.log(classyGetDomainName('http://www.zombie-bites.com/'));
console.log(classyGetDomainName('https://www.cnet.com/'));