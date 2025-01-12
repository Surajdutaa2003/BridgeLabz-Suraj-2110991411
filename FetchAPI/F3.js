async function fetchWeather() {
    try {
        var response = await fetch("https://goweather.herokuapp.com/weather/New York");
        if (!response.ok) {
            throw new Error("New Error: " + response.status);
        }
        var data = await response.json();
        console.log("Temperature in New York:", data.temperature); // Corrected property name
    } catch (error) {
        console.log("Error fetching Weather Data:", error);
    }
}

fetchWeather();
