const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise 1 resolved");
    }, 1000);
});

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("Promise 2 rejected");
    }, 2000);
});

Promise.all([promise1, promise2])
    .then(function (messages) {
        console.log(messages);
    })
    .catch(function (error) {
        console.log("Error:", error); // Output: Error: Promise 2 rejected
    });
