// With DRY: Centralized Function

function logUserInfo(user) {
  return `Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`;
}

// Reusing the function without repeating code
const user1 = { name: "Ravi", email: "ravi@example.com", age: 25 };
const user2 = { name: "Aman", email: "aman@example.com", age: 30 };

console.log(logUserInfo(user1)); // Reuse logic
console.log(logUserInfo(user2)); // Reuse logic
