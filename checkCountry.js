// Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is an  island.
//Write an if statement to help Sarah figure out if your country is right for her.

let countries = [
    {name:'portugal',island:false,pop: 25000000, english:true},
    {name:'hawaii', island:true, pop: 17000000, english:true},
    {name:'china', island:false, pop: 2000000000, english: false}
]

const askUser = prompt('What country?');

function checkCountry (countryName) {
  let filterCountry = countries.filter(country => (country.name === askUser))
  if (filterCountry[0].island === true &&
        filterCountry[0].pop < 50000000 &&
            filterCountry[0].english === true){
                return (`island: ${askUser} is suitable`)
    } else {
                    return (`island: ${askUser} is not suitable`)
    }

}
alert (checkCountry(askUser));