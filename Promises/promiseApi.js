let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Value 1");
    }, 11000);
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // resolve("Value 2");
        reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Value 3");
    }, 3000);
});

// p1.then(function(value) {
//     console.log(value);
// });

// p2.then(function(value) {
//     console.log(value);
// });

// p3.then(function(value) {
//     console.log(value);
// });

// let promise_all = Promise.all([p1, p2, p3]);
// let promise_all = Promise.allSettled([p1, p2, p3]);
// let promise_all = Promise.race([p1, p2, p3]);
// let promise_all = Promise.resolve(6);
let promise_all = Promise.reject(new Error("Hey"));

promise_all.then(function(value) {
    console.log(value);
}).catch(function(error) {
    console.log(error.message); // This will catch the rejection and log "Hey"
});
