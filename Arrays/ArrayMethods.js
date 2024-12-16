// Create an initial array
let arr = [1, 2, 3, 4, 5];

// 1. push() - Adds elements to the end of the array
arr.push(6); // [1, 2, 3, 4, 5, 6]
console.log("push:", arr);

// 2. pop() - Removes the last element and returns it
let last = arr.pop(); // [1, 2, 3, 4, 5]
console.log("pop:", last, arr);

// 3. unshift() - Adds elements to the beginning of the array
arr.unshift(0); // [0, 1, 2, 3, 4, 5]
console.log("unshift:", arr);

// 4. shift() - Removes the first element and returns it
let first = arr.shift(); // [1, 2, 3, 4, 5]
console.log("shift:", first, arr);

// 5. slice() - Extracts a portion of the array
let sliced = arr.slice(1, 3); // [2, 3]
console.log("slice:", sliced, arr);

// 6. splice() - Modifies the array by adding/removing elements
arr.splice(2, 1, 10, 20); // Removes 1 element at index 2, adds 10 and 20
console.log("splice:", arr);

// 7. concat() - Combines arrays into a new array
let combined = arr.concat([6, 7, 8]); // [1, 2, 10, 20, 4, 5, 6, 7, 8]
console.log("concat:", combined);

// 8. forEach() - Iterates over the array
console.log("forEach:");
combined.forEach(function (num, index) {
  console.log("Index", index + ":", num);
});

// 9. map() - Transforms each element and returns a new array
let squared = combined.map(function (num) {
  return num * num;
}); // [1, 4, 100, 400, 16, 25, 36, 49, 64]
console.log("map:", squared);

// 10. filter() - Returns a new array with elements that pass the condition
let even = combined.filter(function (num) {
  return num % 2 === 0;
}); // [2, 10, 20, 4, 6, 8]
console.log("filter:", even);

// 11. reduce() - Reduces the array to a single value
let sum = combined.reduce(function (acc, num) {
  return acc + num;
}, 0); // 73
console.log("reduce:", sum);

// 12. find() - Returns the first element that matches a condition
let found = combined.find(function (num) {
  return num > 10;
}); 
console.log("find:", found);

// 13. findIndex() - Returns the index of the first element that matches a condition
let index = combined.findIndex(function (num) {
  return num > 10;
}); // 3
console.log("findIndex:", index);

// 14. indexOf() - Returns the first index of a specified element
let idx = combined.indexOf(4); // 4
console.log("indexOf:", idx);

// 15. includes() - Checks if the array contains a specific value
let hasSeven = combined.includes(7); // true
console.log("includes:", hasSeven);

// 16. sort() - Sorts the array in place
let sorted = combined.slice(); // Create a copy using `slice`
sorted.sort(function (a, b) {
  return a - b;
}); // [1, 2, 4, 5, 6, 7, 8, 10, 20]
console.log("sort:", sorted);

// 17. reverse() - Reverses the order of the elements
let reversed = combined.slice(); // Create a copy using `slice`
reversed.reverse(); // [8, 7, 6, 5, 4, 20, 10, 2, 1]
console.log("reverse:", reversed);

// 18. join() - Combines all elements into a string
let joined = combined.join(" - "); // "1 - 2 - 10 - 20 - 4 - 5 - 6 - 7 - 8"
console.log("join:", joined);

// 19. split() - (Not a direct array method but used to create arrays from strings)
let splitArray = joined.split(" - "); // ["1", "2", "10", "20", "4", "5", "6", "7", "8"]
console.log("split:", splitArray);

// 20. length - Property to get the number of elements
console.log("length:", combined.length); // 9
