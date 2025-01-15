const original = { name: "Aman", details: { age: 25 } };
const shallowCopy = { ...original };

shallowCopy.name = "Ravi";
shallowCopy.details.age = 30; 
console.log(original);
console.log(shallowCopy);



