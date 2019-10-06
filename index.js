// Code your solution here:
function driversWithRevenueOver(drivers, num) {
    //returns an array of all matching drivers
    //returns an empty array if there is no match
    return drivers.filter(driver => driver.revenue > num);
}

function driverNamesWithRevenueOver(drivers, num) {
    let matching =  driversWithRevenueOver(drivers, num);
    return matching.map(driver => driver.name);
}

//WHY DIDN'T 'key of pair' WORK?
function exactMatch(drivers, pair) {
    //This function takes an array of driver objects as the first argument 
    //and a JS object that specifies an attribute and corresponding value. 
    //For example, exactMatch(drivers, { revenue: 3000 })
    return drivers.filter(function(driver) {
        for(const key in pair) {
            return driver[key] === pair[key]
        };
    })
}

function exactMatchToList(drivers, pair) {
    let matching = exactMatch(drivers, pair);
    return matching.map(driver => driver.name);
}