const original = { name: "Aman", details: { age: 25 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.details.age = 30; 
console.log(original);
console.log(deepCopy);
