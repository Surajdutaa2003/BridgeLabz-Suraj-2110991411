// 1. Callback Functions

// What is a Callback?
// A callback is a function passed into another function as an argument to be executed later.
// It's often used to handle asynchronous operations like fetching data or reading files.

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback("Here is your data.");
    }, 2000);
}

function processData(data) {
    console.log("Processing: " + data);
}

fetchData(processData); // Calls processData after data is fetched

// 2. Promises in JavaScript

// What is a Promise?
// A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It can either be:
//  - Resolved (Fulfilled): Operation is successful.
//  - Rejected: Operation failed.

// Promise Syntax:
let promise1 = new Promise((resolve, reject) => {
    // Asynchronous task
});

// 3. resolve() and reject()

// resolve: Used to fulfill the promise when the asynchronous task is successful.
// reject: Used to reject the promise when the task fails or there’s an error.

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully!"); // Resolving promise
    }, 2000);
});

promise2.then((value) => {
    console.log(value); // Output: Data fetched successfully!
});

// 4. Handling Rejections with .then() and .catch()

// Handling Rejections:
// If a promise is rejected, use the second argument in .then() or .catch() to handle errors.

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Task failed!"); // Rejecting promise
    }, 2000);
});

promise3.then(
    function(value) {
        console.log("Resolved with:", value); // Won't run because of rejection
    },
    function(error) {
        console.log("Error handled in .then():", error); // Runs when rejected
    }
);

// Alternative Error Handling with .catch():
let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong!"));
    }, 2000);
});

promise4.catch(function(error) {
    console.log("Error handled in .catch():", error.message); // Error handled here
});

// 5. .then() for Chaining

// Chaining with .then():
// You can chain multiple .then() calls to handle successive asynchronous tasks.
// Each .then() returns a new promise that can be chained further.

let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5); // Resolving with 5
    }, 2000);
});

promise5.then(function(value) {
    console.log("Step 1:", value); // Output: Step 1: 5
    return value * 2; // Returning 10
}).then(function(value) {
    console.log("Step 2:", value); // Output: Step 2: 10
    return value + 3; // Returning 13
}).then(function(value) {
    console.log("Step 3:", value); // Output: Step 3: 13
});

// 6. Error Handling with .catch()

// .catch():
// .catch() is used specifically for handling errors and rejections in promises.
// It catches errors from all the previous .then() calls in the chain.

let promise6 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject(new Error("Something went wrong!")); // Reject with error
    }, 2000);
});

promise6.then(function(value) {
    console.log("Resolved with:", value); // Won't run because of rejection
}).catch(function(error) {
    console.log("Error handled in .catch():", error.message); // Error handled here
});

// 7. Difference Between .then() and .catch()

// .then():
// Used for handling resolved values (success).
// Can also handle errors with a second argument (error callback).
  
// .catch():
// Specifically for error handling.
// A cleaner way to handle promise rejections or errors.


// 8. reject in Promises

// reject:
// Used when something goes wrong or an asynchronous task fails.
// Rejection sends an error or message that you can handle using .then() or .catch().

let promise7 = new Promise(function(resolve, reject) {
    let success = false; // Change to true to test resolve

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed due to some error.");
    }
});

promise7.then(function(value) {
    console.log("Resolved with:", value); // Runs if resolved
}).catch(function(error) {
    console.log("Error caught using .catch():", error); // Runs if rejected
});

// 9. Summary of Key Concepts

// resolve(): Marks a promise as successful and returns a value.
// reject(): Marks a promise as failed and returns an error.
// .then(): Used to handle resolved values and optionally errors (with a second argument).
// .catch(): Used specifically for error handling.
// Chaining: Multiple .then() calls can be chained to handle successive tasks.
