//?--- for of -----------

let myArr = [1, 2, 3, 4, 2, 2, 1, 1];

for (const element of myArr) {
    // console.log(element);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(greet);
}

//?------ Maps------------

const maps = new Map();
maps.set("name", "Dipanshu");
maps.set("city", "Almora");
maps.set("state", "Uttrakhand");

for (const [key, value] of maps) {
    // console.log(key, " :- ", value);
}

//! Objects are not iterable

const myObj = {
    game1: "Spiderman",
    game2: "Irom Man",
};

// for (const [key, value] of myObj) {
//     console.log(key, " :- ", value);
// }


