let attempt = 0;

function retryPromise() {
    return new Promise(function (resolve, reject) {
        attempt++;
        if (attempt === 2) {
            resolve("Success on retry!");
        } else {
            reject("Failed on first attempt");
        }
    });
}

retryPromise()
    .catch(function (error) {
        console.log(error); // Output: Failed on first attempt
        return retryPromise(); // Retry
    })
    .then(function (message) {
        console.log(message); // Output: Success on retry!
    });
