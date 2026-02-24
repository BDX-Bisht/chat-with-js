//!-- array

const myArr = [1, 2, 3, 4, 5];
const myArr2 = new Array(2, 3, 4, 5, 6);

// console.log(myArr[3]);

//!--- Array method

//?---- Push method add the value in the array in the end
// myArr.push(6);
// myArr.push(7);

//?--- Unshift add the value in the first index of the array
// myArr.unshift(0)

//?--- Pop remove the value of last index of the array
// myArr.pop();

//?--- Shift remove the value of first index of the array
// myArr.shift()

// console.log(myArr.includes(5));
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join("-");

// console.log(newArr);

//?---- Slice, Splice

console.log("A " + myArr);

const myA1 = myArr.slice(1, 3);

console.log(myA1);

console.log("B " + myArr);

const myA2 = myArr.splice(1, 3);

console.log(myA2);
console.log("C " + myArr);