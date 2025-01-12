// Abstraction for Database
class IDatabase {
    connect() {
        throw new Error("Method 'connect()' must be implemented.");
    }
}

// SQL Database implementation
class SQLDatabase extends IDatabase {
    connect() {
        console.log("Connecting to SQL database");
    }
}

// NoSQL Database implementation
class NoSQLDatabase extends IDatabase {
    connect() {
        console.log("Connecting to NoSQL database");
    }
}

// High-level module
class UserService {
    constructor(db) {
        this.db = db;
    }

    getUser() {
        this.db.connect();
        console.log("Getting user");
    }
}

// Usage
const sqlDb = new SQLDatabase();
const noSqlDb = new NoSQLDatabase();

const userService1 = new UserService(sqlDb);
userService1.getUser(); // Output: Connecting to SQL database \n Getting user

const userService2 = new UserService(noSqlDb);
userService2.getUser(); // Output: Connecting to NoSQL database \n Getting user
