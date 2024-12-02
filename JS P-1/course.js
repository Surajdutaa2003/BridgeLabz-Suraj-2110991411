// Initial courses array
let users = [
    {coursename: "java", Price: 100},
    {coursename: "python", Price: 200},
    {coursename: "javascript", Price: 400}
];

// Function to add a course
function addCourse(coursename, price) {
    users.push({coursename, Price: price});
    console.log(`${coursename} course added.`);
}

// Function to calculate total price of all courses
function totalPrice() {
    return users.reduce((sum, course) => sum + course.Price, 0);
}

// Function to delete a course
function deleteCourse(coursename) {
    const index = users.findIndex(course => course.coursename === coursename);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`${coursename} course deleted.`);
    } else {
        console.log(`${coursename} not found.`);
    }
}

// Example Usage:

// Initial total price of all courses
console.log("Total Price:", totalPrice()); // Get total price of all courses

// Add a new course
addCourse("ruby", 150); // Add Ruby course

// Get updated total price after adding Ruby
console.log("Total Price after adding Ruby:", totalPrice());

// Delete a course
deleteCourse("python"); // Delete Python course

// Get updated total price after deleting Python
console.log("Total Price after deleting Python:", totalPrice());
