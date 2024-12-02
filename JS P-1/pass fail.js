let users = [
    {name: "Aryan", Marks: 30},
    {name: "Sameer", Marks: 70},
    {name: "Ayan", Marks: 80},
    {name: "Sohel", Marks: 35}
];

let passingCount = 0;

users.forEach(student => {
    if (student.Marks >= 40) {
        console.log(`${student.name} is Pass`);
        passingCount++;
    } else {
        console.log(`${student.name} is Fail`);
    }
});

console.log(`Passing students are: ${passingCount}`);
