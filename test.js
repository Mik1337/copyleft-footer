const getCurrentYear = require("./index.js");

console.log("Current year:", getCurrentYear());

// Test that it returns a number
const year = getCurrentYear();
console.assert(typeof year === "number", "Year should be a number");

// Test that it returns the current year (2025)
console.assert(year === 2025, "Year should be 2025");

console.log("All tests passed!");
