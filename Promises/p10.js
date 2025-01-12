new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1 completed"), 1000); // First promise resolves
})
.then((message) => {
    console.log(message); // "Step 1 completed"
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Step 2 completed"), 1000); // Second promise resolves
    });
})
.then((message) => {
    console.log(message); // "Step 2 completed"
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Step 3 failed"), 1000); // Third promise rejects
    });
})
.catch((error) => {
    console.error("Caught error:", error); // Handling the rejection from Step 3
    return "Recovered from Step 3"; // Returning a value to continue the chain
})
.then((message) => {
    console.log(message); // "Recovered from Step 3"
    return "Step 4 completed"; // Return value for the next step
})
.then((message) => {
    console.log(message); // "Step 4 completed"
});
