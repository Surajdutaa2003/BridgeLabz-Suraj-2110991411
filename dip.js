// Low-level module
class Database {
    connect() {
        console.log("Connecting to database");
    }
}

// High-level module
class UserService {
    constructor(db) { // Dependency injection
        this.db = db;
    }

    getUser() {
        this.db.connect(); // Abstraction is used
        console.log("Getting user");
    }
}

// Usage
const db = new Database(); // Low-level module instance
const userService = new UserService(db); // Inject dependency
userService.getUser();
