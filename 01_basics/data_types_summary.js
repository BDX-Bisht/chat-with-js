//?========================================================
//?------------------  Primitice DataTypes  -------------------
//?========================================================

//!- 7 type  : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//*  Javscript is a dynamic typed , this means that variable types are determined at runtime, not at compile time.

const score = 100;
const scoreValue = 100.2;

const isLoggedIn = false;
const isIamCapable = null;
let userEmail;

const id = Symbol("123");
const anotherid = Symbol("123");

// console.table([id, anotherid]);
// console.log(id == anotherid);

const bigNumber = 1111111111222222222n;

//?========================================================
//?------------------  Non-Primitice DataTypes ( Reference Type )  -------------------
//?========================================================

//! Array, Objects, Functions

const heros = ["shaktiman", "kriss", "nagaraj"];

const students = {
  name: "dipanshu",
  age: 21,
};

const bio = function () {
  console.log("demo");
};
// bio();

console.log(typeof bigNumber);
console.log(typeof students);
console.log(typeof bio);
console.log(typeof heros);
console.log(typeof anotherid);
