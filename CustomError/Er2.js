class PaymentError extends Error {
    constructor(message, amount) {
        super(message);
        this.name = this.constructor.name;
        this.amount = amount;
    }

    toString() {
        return `${this.name}: "${this.message}" for amount "${this.amount}"`;
    }
}

function processPayment(amount) {
    if (amount <= 0) {
        throw new PaymentError("Invalid payment amount", amount);
    }

    return "Payment processed successfully!";
}

try {
    console.log(processPayment(-50));
} catch (error) {
    if (error instanceof PaymentError) {
        console.error(error.toString());
    } else {
        console.error("Unexpected error:", error.message);
    }
}
