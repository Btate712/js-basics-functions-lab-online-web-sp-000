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
