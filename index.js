function driversWithRevenueOver(driversArray, revenue){
  return driversArray.filter(function (driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(driversArray, revenue){
  return driversWithRevenueOver(driversArray, revenue)
  .map(function (driver){
    return driver.name;
  })
}

function exactMatch(driversArray, object){
  return driversArray.filter(function (driver){
    let keys = Object.keys(object)
    return driver[keys[0]] === object[keys[0]]
  })
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
