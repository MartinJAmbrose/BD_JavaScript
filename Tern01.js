// On line 6, create a variable called messageStatus 
// and use a TERNARY operator to set the value of that variable 
// to either
// "Processing": the number of retries is less than the limit
// "Failed": the number of retries is greater than or equal to the limit
const retryLimit = 10;
const numRetries = 9;

// don't touch above this line

const messageStatus = numRetries <= retryLimit ? "Processing" : "Failed";

// don't touch below this line

console.log(messageStatus);