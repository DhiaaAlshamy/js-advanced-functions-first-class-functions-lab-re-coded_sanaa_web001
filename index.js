// Code your solution in this file!
const returnFirstTwoDrivers=(drivers)=>drivers.slice(0,1);


const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2,1);
}
const selectingDrivers =[returnFirstTwoDrivers(),returnLastTwoDrivers()];

function createFareMultiplier(num){
    return function(num){
        return num*num;
    }
}
const  fareDoubler=createFareMultiplier(2);
const fareTripler =createFareMultiplier(3);
function selectDifferentDrivers(draiversArray,fu){
}

