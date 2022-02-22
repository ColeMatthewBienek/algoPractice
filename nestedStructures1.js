//1) Warehouse Bins

/*
  Given an object of empty bins (arrays) and an array of items with their type (items), move the item name to the correct bin based on the type. You can assume the type of item will always have a corresponding bin.

  ****Do not harcode check the bin names and do not loop over the objects
 */

  var unsortedItems = [
    {item: 'desk', type: 'homegoods'},
    {item: 'lamp', type: 'homegoods'},
    {item: 'laptop', type: 'electronics'},
    {item: 'moisturizer', type: 'skincare'},
    {item: 'towel', type: 'homegoods'},
    {item: 'mouse', type: 'electronics'},
    {item: 'sunscreen', type: 'skincare'},
    {item: 'bed frame', type: 'homegoods'}
  ]
  
  var binNames = {
    homegoods: [],
    electronics: [],
    skincare: [],
  };
  

//   console.log(warehouseBins(unsortedItems, binNames)); // ==> 
  /*
    {
      homegoods: ['desk', 'lamp', 'towel', 'bed frame'],
      electronics: ['laptop', 'mouse'],
      skincare: ['moisturizer', 'sunscreen'],
    }
  */

    function warehouseBins(items, bins) {
    //loop over unsorted items array
        for (i = 0; i < items.length; i++){
            //access the type key, value 
            let itemCat = items[i].type;
            let product = items[i].item;
            //using the type key value,
            //find the matching category in the binNames obj
            //push the type key value into the array at the matching type
            bins[itemCat].push(product);
        }
    //return the binNames obj
        return bins;
    }

    // console.log(warehouseBins(unsortedItems, binNames));
    
//solved < 10 min
//---------------------------------------------------------------------------

// Given an array of days the dog attempted to fetch the paper, return how many times the dog received a treat. 
// You know the dog performed the correct action when the description says 'brought the paper.' 
// */

var attempts = [
  {day: 'Monday', action: 'ran around the yard'},
  {day: 'Tuesday', action: 'barked at strangers'},
  {day: 'Wednesday', action: 'brought the paper'},
  {day: 'Thursday', action: 'dug a hole'},
  {day: 'Friday', action: 'brought the paper'},
  {day: 'Saturday', action: 'brought the paper'},
  {day: 'Sunday', action: 'went to sleep'},
]


// function howManyTreats(actions) {
//     let result = 0;
//     let correctAction = `brought the paper`;

//     for ( i = 0; i < actions.length; i++){
//         let behavior = actions[i].action;
//         if (behavior === correctAction) {
//             result ++;
//         }
//     }
//     return result;
// }

let howManyTreats = actions => {
    let correctAction = `brought the paper`;
    let broughtPapers = actions.filter((element) => element.action === correctAction );
    return broughtPapers.length;
}

let goodBoyCounter = (prevCounterValue, currentDay) => prevCounterValue + currentDay.action === `brought the paper` ? 1 : 0;

// let howManyTreats = actions => actions.reduce(goodBoyCounter, 0);

let goodBoyBehavior = [
    `brought the paper`,
    `didn't bark`
]

let goodBoyCriteria = day => goodBoyBehavior.includes(day.action);
// let howManyTreats = actions => actions.filter(goodBoyCriteria).length;

// console.log(howManyTreats(attempts));

/*
There are killer robots on the loose! And they look like all the other robots. There is only one way to tell the robots apart: by what they say. 
All robots speak in 'beep' and 'boop'. A killer robot will always speak in a string that contains beeps or boops in multiples of 4, while a non-killer robot will never speak with both 'beeps' and 'boops' in multiples of four.

Given a an array of robots and their strings, find the killer robots! Return a array of true and false. True marks a killer robot and false marks a normal robot.
 */

var robotTalk = [
    {str: 'boop beep boop'},
    {str: 'boop boop beep beep boop boop beep beep'},
    {str: 'beep beep beep beep boop boop boop'},
    {str: 'boop boop boop boop beep beep beep beep boop boop boop boop'},
    {str: 'boop beep boop beep boop'},
    {str: 'boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop beep'}
  ]
  
  function killerRobots(strings) {
      let robotTest = [];
    //convert the string of robot talk to an array
    strings.forEach((robot) => {

        let robotWords = robot.str.split(' ');
        let robotWordCount = robotWords.length;
        // let isRobot = (Number.isInteger(robotWordCount/4));
        robotTest.push((Number.isInteger(robotWordCount/4)));
        
    })

    return robotTest;
}
  
  console.log(killerRobots(robotTalk)); //=> [false, true, false, true, false, false]

    