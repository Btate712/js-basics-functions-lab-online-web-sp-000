// Code your solution in this file!
function distanceTravelledInFeet(beginningBlock, endingBlock) {
  let blocksTravelled = Math.abs(beginningBlock - endingBlock);
  return blocksTravelled * 264;
}

function distanceFromHqInBlocks(streetLocation) {
  return Math.abs(streetLocation - 42);
}

function distanceFromHqInFeet(streetLocation) {
  return 264 * distanceFromHqInBlocks(streetLocation);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  }
  else if (distance >= 400 && distance < 2000) {
    return parseFloat((0.02 * distance - 8).toFixed(2));
  }
  else if (distance >= 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far'
  }
}
