function a(str) {
    if (!str) return ""; // Handle empty or null input
    return str.split(/\s+/).map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}

const text = "this is a sample text.";
console.log(a(text)); // Output: "This Is A Sample Text."
