// Code your solution in this file!
const returnFirstTwoDrivers = function (driverAr) {return driverAr.slice(0, 2)}
const returnLastTwoDrivers = function (driverAr) {return driverAr.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function (fare) {
      return fare * num
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driverAr, difDrivers) {return difDrivers(driverAr)}
