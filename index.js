// Write your solution in this file!
// Declare customerName in global scope
var customerName = "bob";

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope but do not assign a value
var bestCustomer;

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "someone";

// Function to change leastFavoriteCustomer (should fail because it's a constant)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another person"; // This will cause an error
}
