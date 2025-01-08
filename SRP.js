// Bad Practice
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    validateEmail() {
      // Validate email logic
    }
    sendEmail() {
      // Email sending logic
    }
  }
  
  // Good Practice
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  class EmailValidator {
    validate(email) {
      // Email validation logic
    }
  }
  
  class EmailService {
    send(email, message) {
      // Email sending logic
    }
  }
  