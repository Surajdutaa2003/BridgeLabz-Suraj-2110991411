// **1. Creating a Promise**
let p1 = new Promise(function (resolve, reject) {
    // Resolves after 2 seconds with the value 1
    setTimeout(function () {
        resolve(1);
    }, 2000);
});

// **2. Chaining .then**
p1.then(function () {
    console.log("Hurray"); // Prints after p1 is resolved
    // Returns a new promise that resolves after 6 seconds with value 4
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(4);
        }, 6000);
    });
}).then(function (value) { 
    console.log(value); // Prints the resolved value (4) of the new promise
});

// **3. Multiple .then Calls**
p1.then(function () {
    console.log("Congratulations this promise is now resolved");
});

// **Expected Output**
// After 2 seconds:
// Hurray
// Congratulations this promise is now resolved
// After 8 seconds (2 + 6):
// 4
