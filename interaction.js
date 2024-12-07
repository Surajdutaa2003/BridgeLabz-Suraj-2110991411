// 1. Ask for the user's name
let userName = prompt("What is your name?");

// 2. Greet the user
if (userName) {
    alert(`Hello, ${userName}! Welcome to our website.`);
} else {
    alert("You didn't enter your name!");
}

// 3. Ask for confirmation
let isEnjoying = confirm("Are you enjoying learning JavaScript?");

if (isEnjoying) {
    alert("That's great! Keep up the good work!");
} else {
    alert("Don't worry, it gets easier with practice!");
}
