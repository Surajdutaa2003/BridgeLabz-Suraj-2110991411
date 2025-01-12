const myPromise = new Promise(function (resolve, reject) {
    resolve("Operation successful");
});

myPromise
    .then(function (message) {
        console.log(message); // Output: Operation successful
    })
    .catch(function (error) {
        console.log("Error:", error);
    })
    .finally(function () {
        console.log("Clean-up complete"); // Output: Clean-up complete
    });
