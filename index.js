// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'khajira';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another name'; // This will result in an error because you cannot reassign a value to a constant variable.
}
