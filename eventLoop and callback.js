function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
      console.log("Data fetched!");
      callback(); // Callback function ko yahan call karte hain
    }, 2000);
  }
  
  function processData() {
    console.log("Processing data...");
  }
  
  fetchData(processData);
  