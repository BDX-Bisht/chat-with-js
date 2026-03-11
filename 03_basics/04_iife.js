//* Immediately Invoked Function Expressions (IIFE)

//? Call the function when immediate when created, to not get the problem with the global variable pollution

(function db() {
    // named iife
    console.log("DB connected");
})();

(() => {
    console.log("DB connected two");
})();

((name) => {
    console.log(`Welcome DB , ${name}`);
})("Dipanshu");
