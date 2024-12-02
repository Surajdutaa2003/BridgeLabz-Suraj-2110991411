// List of employees with their names and salaries
let employees = [
    {name: "Alice", salary: 12000},
    {name: "Bob", salary: 20000},
    {name: "Charlie", salary: 18000},
    {name: "David", salary: 15000},
    {name: "Eve", salary: 25000}
];

// Filter employees with salary greater than 15000
let filteredEmployees = employees.filter(employee => employee.salary > 15000);

// Map the filtered employees with a 10% salary increment
let employeesWithIncrement = filteredEmployees.map(employee => {
    return {name: employee.name, salary: employee.salary * 1.1}; // 10% increment
});

// Calculate the average salary after increment using reduce
let averageSalary = employeesWithIncrement.reduce((sum, employee) => sum + employee.salary, 0) / employeesWithIncrement.length;

console.log("Employees after 10% increment:", employeesWithIncrement);
console.log("Average salary after increment:", averageSalary.toFixed(2)); // rounded to two decimal places
