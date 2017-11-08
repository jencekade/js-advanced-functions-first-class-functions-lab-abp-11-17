// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let newArray = [];
  newArray.push(drivers[0], drivers[1]);
  return newArray;
};

const returnLastTwoDrivers = function(drivers) {
  let newArray = [];
  newArray.push(drivers[drivers.length - 2], drivers[drivers.length - 1]);
  return newArray;
};

const selectingDrivers = function (selector) {
  if (selector == 0) {
    return returnFirstTwoDrivers;
  } else {
    return returnLastTwoDrivers;
  }
};

function createFareMultiplier(multiplier) {
  let price = function(fare) {
    price = fare * multiplier;
  };
  return price;
}

//const fareDoubler = createFareMultiplier(2);

//const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers() {

}
