// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const headquarters = 42; 
    return Math.abs(location - headquarters);
  }

  function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(end - start);
    return distanceInBlocks * feetPerBlock;
  }
  function distanceFromHqInFeet(location) {
    const headquarters = 42; // Headquarters location
    const feetPerBlock = 264; // Distance in feet per block
    const distanceInBlocks = Math.abs(location - headquarters);
    return distanceInBlocks * feetPerBlock;
  }

  distanceFromHqInFeet(42,30)
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // Assuming each block is 264 feet
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
  
    if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    } else if (distanceInFeet > 2000) {
      return 25;
    } else if (distanceInFeet > 400) {
      const chargeableFeet = distanceInFeet - 400;
      return chargeableFeet * 0.02;
    } else {
      return 0;
    }
  }
  calculatesFarePrice(56,34)