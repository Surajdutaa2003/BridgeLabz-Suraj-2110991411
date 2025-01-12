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


fetchData(processData);
