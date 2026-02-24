const maravelHeros = ["CaptainAmerica", "Thor", "IronMan"];
const dcHeros = ["superman", "flash", "batman"];

// maravelHeros.push(dcHeros);

// console.log(maravelHeros);
// console.log(maravelHeros[3]);

// const newArr = maravelHeros.concat(dcHeros);
// console.log(newArr);

//?---- Spread Operators
const allNewHeros = [...maravelHeros, ...dcHeros];
// console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArr = anotherArr.flat(Infinity);

// console.log(realAnotherArr);

//?--- Check this array or not
// console.log(Array.isArray("hitesh"));

//?--- Convert any dataType into Array
// console.log(Array.from("hitesh"));
// console.log(Array.from({ name: "Dipanshu" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

// console.log(Array.of(score1, score2, score3, score4));
