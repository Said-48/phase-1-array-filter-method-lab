// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(driver =>
    driver.toLowerCase() === string.toLowerCase()
  );
}

function fuzzyMatch(drivers, string) {
  const lowerString = string.toLowerCase();
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(lowerString)
  );
}

function matchName(drivers, string) {
  return drivers.filter(driverObj =>
    driverObj.name === string
  );
}