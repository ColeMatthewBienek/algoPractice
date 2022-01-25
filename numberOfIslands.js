

let grid_1 = [
    ["1","1","0","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","1","1"]
  ] 

  let grid_2 = [
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"]
  ] 

function getRightPath(location) {
    return {
        row: location.row,
        col: location.col + 1
    }
}

function getDownPath(location) {
    return {
        row: location.row + 1,
        col: location.col
    }
}

let isLand = currentLocation => currentLocation === "1";
let mapKey = (coordinates) => coordinates.row + "," + coordinates.col;

  function generateValidPaths(world, location) {
    let validPaths = [];
    if(location.col < world[0].length - 1) {
        let rightPath = getRightPath(location)
        if(world[rightPath.row][rightPath.col] == 1) {
            validPaths.push(rightPath)
        }
    }
    if(location.row < world.length - 1) {
        let downPath = getDownPath(location);
        if(world[downPath.row][downPath.col] == 1) {
            validPaths.push(downPath)
        }
    }
    return validPaths;
  }

function exploreIsland(world, map, startingLocation, ) {
    // remember where I've travelled before so I don't double count
        // this has to occur in explore function
        // going to create a explored obj to track where I've been
        // explore function must be passed this obj so it can save to it
    map[mapKey(startingLocation)] = "explored";
    // starting at the startingLocation, look around to see what directions I can travel on foot
        // calculate coordinates for each cardinal direction and eliminate out of array range values
        // create an array of valid directions
    let paths = generateValidPaths(world, startingLocation);
    // explore each direction that I can see from here and mark it explored on my map (remember where I've been)
        // recursively call exploreIsland with new startingLocation based on the array of valid directions to explore
    for(let path of paths) {
        exploreIsland(world, map, path);
    }
}

/* 
map: {
    "0,0": "explored"
}
*/
function numIslands(world) {
    // declare local tracking variables
    let islandCount = 0;
    let map = {};

    // explore the world searching for land
        // iterate over 2d array, nested for loops
    for (let row = 0; row < world.length; row++) {
        for (let col = 0; col < world[0].length; col++) {
            let currentLocation = world[row][col];
            let currentCoordinates = {row: row, col: col};
            // if land is found, increment count and explore the landmass to determine all the tiles that belong to that island
                // element at current pos is 1, increment counter, call explore function
            if(isLand(currentLocation) && !map[mapKey(currentCoordinates)]) {
                islandCount++;
                exploreIsland(world, map, currentCoordinates)
            }      
        }
    }
    // return count
    return islandCount;
}

console.log(numIslands(grid_1));
console.log(numIslands(grid_2));

function findNumberOfIslands (grid) {
    let islandCounter = 0;
    
    //look at the map and search for land
    for ( let column = 0; column < grid.length; column++){
        for (let row = 0; row < grid[column].length; row ++){
        //if i find a land mark the land as found
        if (column[row] === 1){
            //land found
            //increment a land counter
                //look for all the connected lands **this part is recursive
                //look at the neighbors
                //if i find more lands, mark them as found
                //if the neighbors have neighbors that are lands, mark them as found as well. 
            }
        }
    }
    //return the number of lands found
    return islandCounter;
}

// console.log(findNumberOfIslands(grid_1));

// recursive, land hunting call
let searchForLand = (grid, row, column) =>{
    let north = grid[row][column - 1];
    let east = grid[row + 1][column];
    let south = grid[row][column +1];
    let west = grid[row - 1][column];

    let landIsFound = (direction) => (direction > 0) ? true : false;
    let markLandFound = (grid, row, column) => (grid[row][column] = 0);

    //if land is found, keep searching, calling searchForLand until the landIsFound condition is not met;

   if (isOnMap && landIsFound(north)) {
        markLandFound();
        //recurse using the new coordinate
        searchForLand(grid, row, column -1)

    } else if (isOnMap && landIsFound(east)){
        markLandFound;
        searchForLand(grid, row+1, column);

    } else if (isOnMap && landIsFound(south)){
        markLandFound;
        searchForLand(grid, row, column +1);
        
    } else if (isOnMap && landIsFound(west)){
        markLandFound;
        searchForLand(grid, row-1, column);

    //base case
    //if i don't find a land in any direction, return to the searching loop
    } else {
        return;
    }   
} 



/*

Basic Recursive Framework:

0) Check for base case, return/end if  at base case

Otherwise
1) Calculate or be given choices
2) iterate over choices
3) recurse over each choice
4) store results of recursive calls
5) return results

*/





//else
//look N/S/E/W for a connected land and mark it and look at it's neighbors (recurse)
