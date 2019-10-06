// Code your solution here:
function driversWithRevenueOver(drivers, amount){
    return drivers.filter(function(driver){return driver.revenue > amount});
}

function driverNamesWithRevenueOver(drivers, amount){
    return driversWithRevenueOver(drivers, amount).map(function (driver){return driver.name});
}

function exactMatch(drivers, match){
    return drivers.filter(function (driver) {
        for(const key in match){
            return driver[key] === match[key]
        };
    });
}

function exactMatchToList(drivers, match){
    const matches = exactMatch(drivers, match);
    return matches.map(function(driver) {return driver.name});
}