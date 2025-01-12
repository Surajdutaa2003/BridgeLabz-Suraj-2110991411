async function fetchConcurrent() {
    try {
        console.log("Fetching resources concurrently...");
        var [response1, response2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/2")
        ]);

        var data1 = await response1.json();
        var data2 = await response2.json();

        console.log("First Resource:", data1);
        console.log("Second Resource:", data2);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchConcurrent();
