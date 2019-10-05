// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(driver => driver.revenue > num);
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map( driver => driver.name );
}

function exactMatch(drivers, condition) {
  const key = Object.keys(condition)[0];
  const value = Object.values(condition)[0];
  const filtered =  drivers.filter( driver => driver[key] === value );
  return filtered;
}

function exactMatchToList(drivers, condition) {
  return exactMatch(drivers, condition).map( driver => driver.name );
}