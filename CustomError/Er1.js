class Authenticate extends Error {
    constructor(message, field, username) {
        super(message);
        this.name = this.constructor.name;
        this.field = field;
        this.username = username; // Add username property
    }
    toString() {
        return `${this.name}: ${this.message} for username ${this.username}`;
    }
}

function user(username, Password) {
    if (username.length < 2) {
        throw new Authenticate("Invalid username", username, username);
    } else if (String(Password).length < 2) { // Ensure Password is a string
        throw new Authenticate("Invalid Password", Password, username);
    }
}

try {
    user("A", 123); // Pass Password as a number
} catch (error) {
    if (error instanceof Authenticate) {
        console.log(error.toString());
    }
}


