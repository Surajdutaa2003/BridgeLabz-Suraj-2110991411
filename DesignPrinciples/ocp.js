// Base class
class Shape {
    area() {
      throw new Error("Method 'area()' must be implemented.");
    }
  }
  
  // Rectangle class
  class Rectangle extends Shape {
    constructor(width, height) {
      super(); // Call parent class constructor
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
  }
  
  // Circle class
  class Circle extends Shape {
    constructor(radius) {
      super(); // Call parent class constructor
      this.radius = radius;
    }
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Create shapes and calculate areas
  const rectangle = new Rectangle(10, 5);
  const circle = new Circle(7);
  
  console.log("Rectangle Area:", rectangle.area());
  console.log("Circle Area:", circle.area());
  