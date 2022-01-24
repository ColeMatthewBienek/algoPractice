/*Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as *

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/
//maxFloor.length = nFloors
//floors are incremented by 2* each additional floor
//first * is centered in the middle of a string maxFloor.length long
//so, if  nFloors = 5
    //the first floor (first element in the array) is: '--*--'
    //last floor has no leading or ending spaces
    //all array elements are the same length
    //use template literals?
    
    //pattern:
    //3 floors:
    //1st floor: '  *  ' === space + space + * + space + space
    //2nd floor = ' *** ' === space + *+*+*+space
    //3rd floor = ' ***** ' = *+*+*+*+*
    //4th floor = '*******'
    //spaces are even num totals; * are odd num totals

        //build from the bottom up, then reverse the array at the end
    //start with an element of length + 2 === floor, because 3 floors gives a bottom floor length of 5 *s
    //subtract 2 *s each floor, keep the *s centered
    //use a floor builder to build the string element to push into the floorBuild array
  



// function towerBuilder(floors){
//     let floorBuild = [];
//     //build a floor made of strings
//         //if the floor is not the bottom floor, add leading spaces and ending spaces
//             //leading space & endingh space is equal to number of asterisks - total num of floors / 2 -- 
//     //push the finished floor into an array
//     //return the finished floorArray
    
    
//     return floorBuild.reverse
// }

function makeSpaces(spaces){
    let space = " ";
    let airSpace = "";
    for (i = 0; i < spaces; i++){
        airSpace += space;
    }
    return airSpace;
}

function makeBricks(bricks){
    let brick = "*";
    let row = "";
    for (i = 0; i < bricks; i++){
        row += brick;
    }
    return row;
}

//makeSpaces + makeBricks + makeSpaces

function towerBuilder (floors) {
    //
    if (floors < 1){
        return [];
    }
    //build variables
    let strLength = (floors *2) -1;

    let getNumberOfBricks = (floor) => (floor*2)-1;
    let getNumberOfSpaces = (bricks, strLength) => (strLength - bricks) / 2
    
    let building = [];
   
    while (floors > 0) {
        let row = "";
        //build floor of asterisks
        //sequence formula: (2n - 1) ==> 2 * floors - 1;
        let bricks = getNumberOfBricks(floors);
        let spaces = getNumberOfSpaces(bricks, strLength);

        //build the row;
        row = row + makeSpaces(spaces) + makeBricks(bricks) + makeSpaces(spaces);
        building.push(row);
        floors --;
    }
    return building.reverse();
}
//5 floor building
//strLength = 2n-1
console.log(towerBuilder(1));
