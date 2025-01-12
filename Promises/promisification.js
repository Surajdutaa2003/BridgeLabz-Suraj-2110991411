

function getCheese() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            const cheese = "🧀";
            console.log("here is cheese", cheese);
            resolve(cheese);
        }, 2000);
    });
}

function makeDough(cheese) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            const dough = cheese + "🫓";
            console.log("here is the dough", dough);
            resolve(dough);
        }, 2000);
    });
}

function bakePizza(dough) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            const pizza = dough + "🍕";
            console.log("here is the pizza", pizza);
            resolve(pizza);
        }, 2000);
    });
}

// Using Promise chaining
getCheese()
    .then(function(cheese) {
        return makeDough(cheese);
    })
    .then(function(dough) {
        return bakePizza(dough);
    })
    .then(function(pizza) {
        console.log("got my pizza", pizza);
    })
    .catch(function(error) {
        console.log("Error occurred: ", error);
    });