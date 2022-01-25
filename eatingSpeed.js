let piles = [30,11,23,4,20];
let hours = 5;

function findEatingSpeed (piles, hours, currEatingSpeed) {
    let timeSpentEating = 0;
    console.log(currEatingSpeed)
    for (let pile of piles) {
        timeSpentEating += Math.ceil(pile/ currEatingSpeed);
    }

    if (timeSpentEating <= hours){
        return currEatingSpeed;

    } else {
        
        currEatingSpeed ++
       return findEatingSpeed(piles, hours, currEatingSpeed);
    }
  console.log('why')
}

function pilesOfBananas (bananas, hoursToEat){
   //Determine the min num of bananas Koko has to eat/ hour
   //in order to finishe before the guards return (hours)
   //return the eating speed
   //*If the pile has less than (eating speed) bananas, she eats all of them instead and will not eat any more bananas during that hour.
   let kokoEatingSpeed = findEatingSpeed(bananas, hoursToEat, 1);
   console.log(kokoEatingSpeed);
   return kokoEatingSpeed;

     

}

console.log(findEatingSpeed (piles, hours, 0));
