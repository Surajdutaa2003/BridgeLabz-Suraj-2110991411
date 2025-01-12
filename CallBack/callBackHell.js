// console.log("hello");

// setTimeout(function () {
//     console.log("this will execute later");
// }, 3000);

// console.log("world");
// console.log("three");

function getCheese(callback) {
    setTimeout(function() {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout(function() {
        const dough = cheese + "🫓";
        console.log("here is the dough", dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout(function() {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2000);
}

getCheese(function(cheese) {
    makeDough(cheese, function(dough) {
        bakePizza(dough, function(pizza) {
            console.log("got my pizza", pizza);
        });
    });
});

// pizza -> dough -> cheese
//====================== resolve it using promise

// function getCheese() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             const cheese = "🧀";
//             console.log("here is cheese", cheese);
//             resolve(cheese);
//         }, 2000);
//     });
// }

// function makeDough(cheese) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             const dough = cheese + "🫓";
//             console.log("here is the dough", dough);
//             resolve(dough);
//         }, 2000);
//     });
// }

// function bakePizza(dough) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             const pizza = dough + "🍕";
//             console.log("here is the pizza", pizza);
//             resolve(pizza);
//         }, 2000);
//     });
// }

// // Using Promise chaining
// getCheese()
//     .then(function(cheese) {
//         return makeDough(cheese);
//     })
//     .then(function(dough) {
//         return bakePizza(dough);
//     })
//     .then(function(pizza) {
//         console.log("got my pizza", pizza);
//     })
//     .catch(function(error) {
//         console.log("Error occurred: ", error);
//     });
