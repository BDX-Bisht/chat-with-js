const name = "Dipanshu";
const age = 22;

// console.log(name + " my age is " + age);

//?--- String Interpolation
// console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = "battlegroundMobile";

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('t'));

const mIndex = gameName.indexOf("M");

//?-- Substring and slice have same funcationality but the slice accept negative index valeus but substring does not.........

const newString1 = gameName.substring(0, mIndex);
const newString2 = gameName.slice(0, -mIndex);
// console.log(newString1);
// console.log(newString2);
// console.log(mIndex);

//?--- Trim

const string = "     deepu          ";
// console.log(string);
// console.log(string.trim());

//?--- Replace , Includes, Search, Split, StartWdith, EndsWith

const url = "https://dipanshu.com/dipanshu%20bisht";

console.log(url.replace("%20", "-"));
console.log(url.includes("dipanshu"));
console.log(url.search("xyz"));       //---- Give the index of the search value
console.log(url.split("/"));
console.log(url.startsWith("dipanshu"));
console.log(url.endsWith("bisht"));
console.log(url.match("com"));
