

---

# Datastructures Repository

Welcome to the **Datastructures** repository! This repository is organized to help you understand and implement various data structures and algorithms. It consists of a dedicated branch named `Datastructures` containing two folders: `array` and `stacks`.

---

## Branch Overview: `Datastructures`

This branch is specifically created for learning and implementing basic data structures, algorithms, and Object-Oriented Programming (OOP) principles. Below is the structure of the branch:

### Folder 1: `array`

This folder contains implementations of array methods and sorting algorithms. Each file is modular to make understanding and testing easier:

1. **`array_methods.js`**  
   - Common array operations like searching, updating, and traversing.

2. **`bubble_sort.js`**  
   - Implementation of Bubble Sort algorithm.

3. **`insertion_sort.js`**  
   - Implementation of Insertion Sort algorithm.

4. **`selection_sort.js`**  
   - Implementation of Selection Sort algorithm.

### Folder 2: `stacks`

This folder focuses on stack data structures and provides two different implementations:

1. **`stack_implementation.js`**  
   - Basic implementation of a stack using arrays.

2. **`extended_stack.js`**  
   - Stack implementation by extending the functionality of the `array` class, showcasing inheritance and code reuse.

---

## Object-Oriented Programming (OOP) Principles

This repository also demonstrates the **4 pillars of OOP** through various implementations:

1. **Encapsulation**  
   - Data and methods are encapsulated within classes for modularity and security.  
   - Example: `stack_implementation.js` uses encapsulated methods to control how elements are pushed or popped from the stack.

2. **Inheritance**  
   - Code reuse through class extension.  
   - Example: `extended_stack.js` extends the basic `stack_implementation` to add new functionalities.

3. **Polymorphism**  
   - Methods behave differently based on the context or class.  
   - Example: Overriding methods in `extended_stack.js` demonstrates polymorphism by adding custom behavior to inherited methods.

4. **Abstraction**  
   - Simplified interfaces for complex functionality.  
   - Example: The stack interface hides internal details (like array manipulation) and exposes only essential methods like `push` and `pop`.

---

## How to Use

1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   cd <repository_name>
   git checkout Datastructures
   ```



--- 

