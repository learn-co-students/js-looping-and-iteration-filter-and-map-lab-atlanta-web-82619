// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const grouped = drivers.filter(driver => driver.revenue > revenue)
    return grouped.map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
    const key = Object.keys(attribute)[0]
    return drivers.filter(driver => driver[key] === attribute[key])
}

function exactMatchToList(drivers, attribute){
    return exactMatch(drivers, attribute).map(driver => driver.name)
}