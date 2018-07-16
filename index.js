// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  const newArr = drivers.slice(0,2);
  return newArr;
}

const returnLastTwoDrivers = function(drivers){
  let i = drivers.length;
  let j = drivers.length-2;
  const newArr = drivers.slice(j,i);
  return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare){
  return function (num){
    return num*fare;
  };
}

function fareDoubler(fare){
  return fare*2;
}

function fareTripler(fare){
  return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers);
}
