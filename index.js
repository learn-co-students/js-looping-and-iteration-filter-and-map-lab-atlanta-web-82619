

function driversWithRevenueOver(drivers,amount){
    return drivers.filter(driver => (driver.revenue > amount))}



function driverNamesWithRevenueOver(drivers,amount) { 
        return drivers.filter(driver => (driver.revenue > amount)).map(driver => (driver.name))}
            


// function exactMatch(drivers,obj) {
//     return drivers.filter(({driver}) => console.log(driver))
// }


function exactMatch(driver,obj){
    return driver.filter(function(driver){
        for(const key in obj) {
            return driver[key] === obj[key]
        };
    })}




function exactMatchToList(driver,obj){
    return driver.filter(function(driver){
        for(const key in obj) {
            return driver[key] === obj[key]
        };
    }).map(driver => driver.name)}
    
