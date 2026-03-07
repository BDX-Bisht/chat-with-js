// var c = 300;
let a = 20;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "hitesh";
    function two() {
        const website = "bdxBisht";
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();

//!+++++++++++++++ Interesting ++++++++++++

console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

// console.log(addTwo(5)); //?---- This is not work due to hoisting
const addTwo = function (num) {
    return num + 2;
};

console.log(addTwo(5));
