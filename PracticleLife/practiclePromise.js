console.log("Starting script");

// Simulating tasks using Promises
let fetchGoogle = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("google.com homepage done");
        resolve("Google data");
    }, 1000); // Simulates 1 second delay
});

let fetchDataAPI = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Data from API fetched");
        resolve("API data");
    }, 2000); // Simulates 2 seconds delay
});

let fetchPictures = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Pictures downloaded");
        resolve("Pictures data");
    }, 3000); // Simulates 3 seconds delay
});

Promise.all([fetchGoogle, fetchDataAPI, fetchPictures]).then(function(results) {
    console.log("All tasks done:", results);
});

console.log("Rest of the script executing...");
