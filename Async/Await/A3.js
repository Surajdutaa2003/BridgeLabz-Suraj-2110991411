async function fetchInvalidUrl() {
    try {
        var response = await fetch("https://invalid-url.com");
        var data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.log("Error while fetching:", error.message);
    }
}

fetchInvalidUrl();
