fetch("https://jsonplaceholder.typicode.com/posts")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].title);
    }
})
.catch(function (error) {
    console.error("Error fetching posts:", error);
});
